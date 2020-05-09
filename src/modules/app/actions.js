import { createActions } from 'redux-actions';
import types from './types';

export const { increment, decrement, setSlot } = createActions(types.INCREMENT, types.DECREMENT, types.SET_SLOT);
