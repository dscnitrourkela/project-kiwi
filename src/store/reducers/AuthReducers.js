import {
  AUTH_FAIL,
  AUTH_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
} from '../constants/AuthConstants';

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case AUTH_REQUEST:
      return {
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        loading: false,
        loginSuccess: true,
      };
    case LOGOUT_SUCCESS:
      return {
        loading: false,
        loginSuccess: false,
      };
    case AUTH_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
