import { AUTH } from './_ActionTypes';
import storage from '../libs/storage';

const setUsername = (username) => ({
  type: AUTH.LOGIN,
  loading: false,
  username: username
})

const destroyUsername = () => ({
  type: AUTH.LOGOUT,
  loading: false,
  username: ''
})


export function login(username) {
  return (dispatch) => {
    storage.set('username', username);
    dispatch(setUsername(username))
  }
}

export function logout() {
  return (dispatch) => {
    storage.set('username', '');
    dispatch(destroyUsername())
  }
}
