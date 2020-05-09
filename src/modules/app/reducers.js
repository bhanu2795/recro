import {handleActions} from 'redux-actions';
import moment from 'moment';
import types from './types';

const initialState = {
	isImagesLoaded: false,
	isLoading: false,
	current: moment().valueOf(),
	selectedSlotes: {},
};

const authReducer = handleActions(
	{
		[types.INCREMENT]: (state, {payload}) => ({
			...state,
			current: payload,
		}),
		[types.DECREMENT]: (state, {payload}) => ({
			...state,
			current: payload,
		}),
		[types.SET_SLOT]: (state, {payload}) => ({
			...state,
			selectedSlotes: payload,
		}),
	},
	initialState,
);

export default authReducer;
