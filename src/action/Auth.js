import { AUTH } from './_ActionTypes';
import storage from '../libs/storage';

const setUsername = (username) => ({
  type: AUTH.LOGIN,
  loading: false,
  username: username
})

export function login(username) {
  return (dispatch) => {
    console.log("test===", username)
    storage.set('username', username);
    dispatch(setUsername(username))
  }
}
