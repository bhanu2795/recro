import React from 'react';
import { StatusBar, View } from 'react-native';
import { PersistGate } from 'redux-persist/es/integration/react';
import { Provider } from 'react-redux';
import { lifecycle } from 'recompose';
import { store, persistor } from './src/store';
import Navigator from './src/navigation/NavigatorContainer';
import styles from './src/styles/AppStyles';
import colors from './src/styles/colors';

// console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed', 'MenuContext', 'Deprecation warning'];
// console.disableYellowBox = true;

const App = () => (
  <View style={styles.rootStyle}>
    <StatusBar barStyle={'dark-content'} backgroundColor={colors.white} />
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Navigator />
      </PersistGate>
    </Provider>
  </View>
);

const enhance = lifecycle({
  componentDidMount() {
    // console.log('componentDidMount');
  },
});

export default enhance(App);
