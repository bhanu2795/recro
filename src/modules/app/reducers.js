import { handleActions } from 'redux-actions';
import types from './types';

const initialState = {
  isImagesLoaded: false,
  isLoading: false,
  current: new Intl.DateTimeFormat('en-US', {
    day: 'numeric',
    month: 'short',
    weekday: 'short',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
  }).format(),
  selectedSlotes: {}
};

const authReducer = handleActions(
  {
    [types.INCREMENT]: (state, { payload }) => ({
      ...state,
      current: payload,
    }),
    [types.DECREMENT]: (state, { payload }) => ({
      ...state,
      current: payload,
    }),
    [types.SET_SLOT]: (state, { payload }) => ({
      ...state,
      selectedSlotes: payload
    })
  },
  initialState
);

export default authReducer;
