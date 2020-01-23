import { combineReducers } from 'redux';
import {reducer as todos } from './Todo';
import {reducer_todo_detail as todoDetail } from './Todo';

export default combineReducers({
    todos, todoDetail
});
