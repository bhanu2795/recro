import { connect } from 'react-redux';
import { compose, hoistStatics, lifecycle, withState, withProps } from 'recompose';
import HomeScreenView from './HomeScreenView';
import { appOperations } from '../../modules/app';
import { shallowCompare } from '../../utils/utils';

const mapStateToProps = ({ app }) => ({
    current: app.current,
    selectedSlotes: app.selectedSlotes
});

const onNavigate = (nav, screen, params) => nav.navigate(screen, params);

const enhance = compose(
    connect(mapStateToProps, { ...appOperations }),
    withState('slots', 'setSlots', props => {
        const date = new Date(props.current);
        const slots = [
            {
                title: 'morning',
                data: []
            },
            {
                title: 'noon',
                data: []
            },
            {
                title: 'after noon',
                data: []
            },
            {
                title: 'evening',
                data: []
            }
        ];
        date.getMinutes() > 29 ? (
            date.setHours(date.getHours() + 1),
            date.setMinutes('00')
        ) : date.setMinutes('30');
        while (date.getDate() === new Date(props.current).getDate()) {
            if (date.getDate() === new Date(props.current).getDate()) {
                if (date.getHours() >= 0 && (date.getHours() <= 12 && date.getMinutes() >= 0)) {
                    slots[0].data.push(date.toString());
                } else if (date.getHours() >= 12 && (date.getHours() <= 14 && date.getMinutes() >= 0)) {
                    slots[1].data.push(date.toString());
                } else if (date.getHours() >= 14 && (date.getHours() <= 16 && date.getMinutes() >= 0)) {
                    slots[2].data.push(date.toString());
                } else {
                    slots[3].data.push(date.toString());
                }
            }
            date.setMinutes(date.getMinutes() + 30);
        }
        return slots;
    }),
    withProps({
        addNewSlot: data => props => {
            console.log(data)
        }
    }),
    withProps(props => ({
        addNewSlot: (data) => props.addSlot(data),
    })),
    lifecycle({
        componentDidMount() {
            this.props.navigation.setParams({
                increment: this.props.incrementCurrent,
                decrement: this.props.decrementCurrent
            });
        },
        componentDidUpdate() {
            console.log(this.props.current);
        },
        shouldComponentUpdate(nextProps, nextState) {
            return shallowCompare(this, nextProps, nextState);
        }
    })
);

export default hoistStatics(enhance)(HomeScreenView);
