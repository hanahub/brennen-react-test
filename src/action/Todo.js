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

const fetchSuccessTodoDetail = (todo) => ({
  type: TODO_DETAIL.FETCH_SUCCESS,
  todo: todo,
  loading: false
})

const fetchFailedTodoDetail = () => ({
  type: TODO_DETAIL.FETCH_FAILED
})

export function fetchTodos() {
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

export function fetchTodoDetail(id) {
  return (dispatch) => {
    const getTodoById = () => axios.get(`${Config.apiUrl}/todos/${id}`);
    axios.all([getTodoById()])
      .then(axios.spread( (res) => (
        dispatch(fetchSuccessTodoDetail(res.data))
      )))
      .catch( (err) => {
        dispatch(fetchFailedTodoDetail());
      })
  }
}