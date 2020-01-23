import { TODOS, TODO_DETAIL } from '../action/_ActionTypes';

const defaultState = {
  loading: true,
  TODOS: []
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
        TODOS: action.TODOS
      };
    default:
      return state;
  }
}

/*  REDUCER FOR POST DETAIL   */
const defaultStateTodoDetail = {
  loading: true,
  dataTodo: {}
}

export const reducer_todo_detail =  (state = defaultStateTodoDetail, action) => {
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
        dataTodo: action.dataTodo.data
      };
    default:
      return state;
  }
}
