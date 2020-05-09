import { connect } from 'react-redux';
import R from 'ramda';
import { Platform, BackHandler, ToastAndroid } from 'react-native';
import { NavigationActions } from 'react-navigation';
import {
  compose,
  branch,
  renderComponent,
  lifecycle,
  withState,
  withHandlers
} from 'recompose';
import NavigatorView from './NavigatorView';
import { isRootScreen } from '../utils/navHelpers';

const stateToProps = ({ navigator }) => ({
  navigator: navigator,
  isReady: true
});

const enhance = compose(
  connect(stateToProps),
  withState('backTimestamp', 'setBackTimestamp', null),
  withHandlers({
    navigateBack: props => () => {
      if (!isRootScreen(props.navigator)) {
        props.dispatch(NavigationActions.back({ key: null }));
        return true;
      }

      // otherwise show toast and handle the back button action
      const currentTime = new Date().getTime();
      const timeDiff = (currentTime - props.backTimestamp) / 1000;

      if (props.backTimestamp && timeDiff <= 1) {
        props.setBackTimestamp(null);
        return false;
      }

      props.setBackTimestamp(new Date().getTime());
      ToastAndroid.show('Press again to close the app', ToastAndroid.SHORT);
      return true;
    },
  }),
  lifecycle({
    componentDidMount() {
      if (Platform.OS === 'android') {
        console.log(this.props);
        BackHandler.addEventListener(
          'hardwareBackPress',
          this.props.navigateBack,
        );
      }
    },
    componentWillUnmount() {
      BackHandler.removeEventListener('hardwareBackPress');
    },
  }),
  branch(R.prop('isReady'), renderComponent(NavigatorView)),
);

export default enhance();
