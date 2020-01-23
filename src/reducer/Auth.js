import { AUTH } from '../action/_ActionTypes';

const defaultState = {
  loading: false,
  username: null
}

export const reducer_auth = (state = defaultState, action) => {
  switch (action.type) {
    case AUTH.LOADING:
      return {
        ...state,
        loading: true
      };
    case AUTH.LOGIN:
      return {
        ...state,
        loading: false,
        username: action.username
      };
    case AUTH.LOGOUT:
      return {
        ...state,
        loading: false,
        username: null
      };
    default:
      return state;
  }
}
