import {increment, decrement, setSlot} from './actions';
import moment from 'moment';

const incrementCurrent = () => async (dispatch, getState) => {
	const date = getState().app.current;

	await dispatch(
		increment(
			moment(date)
				.add(1, 'd')
				.valueOf(),
		),
	);
};

const decrementCurrent = () => async (dispatch, getState) => {
	const date = getState().app.current;
	await dispatch(
		decrement(
			moment(date)
				.add(1, 'd')
				.valueOf(),
		),
	);
};

const addSlot = data => async (dispatch, getState) => {
	const _obj = {
		...getState().app.selectedSlotes,
		[`'${new Date(getState().app.current).getDate().toString()}-${new Date(
			getState().app.current,
		)
			.getMonth()
			.toString()}-${new Date(getState().app.current)
			.getFullYear()
			.toString()}'`]: data,
	};
	dispatch(setSlot(_obj));
};

export default {
	incrementCurrent,
	decrementCurrent,
	addSlot,
};
