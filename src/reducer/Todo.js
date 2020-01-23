import { TODOS, TODO_DETAIL } from '../action/_ActionTypes';

const defaultState = {
  loading: true,
  todos: []
}

export const reducer =  (state = defaultState, action) => {
  switch (action.type) {
    case TODOS.LOADING:
      return {
        ...state,
        loading: true,
      };
    case TODOS.FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        todos: action.todos
      };
    default:
      return state;
  }
}

/*  REDUCER FOR POST DETAIL   */
const defaultStateTodoDetail = {
  loading: true,
  todo: {}
}

export const reducer_todo_detail = (state = defaultStateTodoDetail, action) => {
  switch (action.type) {
    case TODO_DETAIL.LOADING:
      return {
        ...state,
        loading: true,
      };
    case TODO_DETAIL.FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        todo: action.todo
      };
    default:
      return state;
  }
}
