import {combineReducers} from "redux";
import app from './app';
import data from './data';

const reducers = combineReducers({
    app,
    data
});

export default reducers;