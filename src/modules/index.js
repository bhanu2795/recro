import AsyncStorage from '@react-native-community/async-storage';
import { persistCombineReducers } from 'redux-persist';

import app from './app';

const config = {
    key: 'root',
    whitelist: [
        'app'
    ],
    storage: AsyncStorage,
};

const appReducer = {
    app
};

export default persistCombineReducers(config, appReducer);
