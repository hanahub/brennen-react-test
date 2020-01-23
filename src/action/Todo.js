import axios from 'axios';
import { TODOS, TODO_DETAIL } from './_ActionTypes';
import Config from '../config/config';

const fetchSuccess = (todos) => ({
  type: TODOS.FETCH_SUCCESS,
  todos: todos,
  loading: false
})

const fetchFailed = () => ({
  type: TODOS.FETCH_FAILED
})

const fetchSuccessTodoDetail = (dataTodo) => ({
  type: TODO_DETAIL.FETCH_SUCCESS,
  dataTodo: dataTodo,
  loading: false
})

const fetchFailedTodoDetail = () => ({
  type: TODO_DETAIL.FETCH_FAILED
})

export function fetchTodos(){
  return (dispatch) => {
    axios.get(`${Config.apiUrl}/todos`).then((res) => {
      if (res.status === 200) {
        dispatch(fetchSuccess(res.data))
      } else {
        dispatch(fetchFailed())
      }
    })
  }
}
