import {applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import todos from './todos';

const rootReducer = combineReducers({ todos });

export default rootReducer;
