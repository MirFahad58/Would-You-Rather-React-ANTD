import { combineReducers, createStore, applyMiddleware } from "redux";
import userReducer from './Reducers/userReducer'
import questionReducer from './Reducers/questionReducer'

import thunk from "redux-thunk";
import logger from 'redux-logger'
const rootReducer = combineReducers({ userReducer, questionReducer});
function configureStore() {
    return createStore(rootReducer, {}, applyMiddleware(thunk, logger))
}

const store = configureStore();
export default store;