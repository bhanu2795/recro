import { increment, decrement, setSlot } from './actions';

const incrementCurrent = () => async (dispatch, getState) => {
  const date = new Date(getState().app.current);
  await dispatch(increment(new Intl.DateTimeFormat('en-US', {
    day: 'numeric',
    month: 'short',
    weekday: 'short',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
  }).format(date.setDate(date.getDate() + 1))));
};

const decrementCurrent = () => async (dispatch, getState) => {
  const date = new Date(getState().app.current);
  await dispatch(decrement(new Intl.DateTimeFormat('en-US', {
    day: 'numeric',
    month: 'long',
    weekday: 'short',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
  }).format(date.setDate(date.getDate() - 1))));
};

const addSlot = data => async (dispatch, getState) => {
  const _obj = {
    ...getState().app.selectedSlotes,
    [`'${new Date(getState().app.current).getDate().toString()}-${new Date(getState().app.current).getMonth().toString()}-${new Date(getState().app.current).getFullYear().toString()}'`]: data
  };
  dispatch(setSlot(_obj));
};


export default {
  incrementCurrent,
  decrementCurrent,
  addSlot
};
