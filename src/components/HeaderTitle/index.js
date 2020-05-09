import { connect } from 'react-redux';
import { compose, hoistStatics, lifecycle } from 'recompose';
import HeaderTitle from './HeaderTitle';
import { shallowCompare } from '../../utils/utils';

const mapStateToProps = ({ app }) => ({
    current: app.current
});

const enhance = compose(
    connect(mapStateToProps),
    lifecycle({
        shouldComponentUpdate(nextProps, nextState) {
            return shallowCompare(this, nextProps, nextState);
        }
    })
);

export default hoistStatics(enhance)(HeaderTitle);
