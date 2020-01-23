import { combineReducers } from 'redux';
import { reducer_auth as auth } from './Auth';
import { reducer_todos as todos } from './Todo';
import { reducer_todo_detail as todoDetail } from './Todo';

export default combineReducers({
    auth, todos, todoDetail
});
