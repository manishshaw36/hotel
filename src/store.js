import { createStore, combineReducers } from 'redux';

import roomDetailsReducer from './reducers/roomDetailsReducer';
import signReducer from './reducers/signReducer';

export default createStore(
    combineReducers({
        roomDetailsReducer,
        signReducer,
    }),
    {}
);