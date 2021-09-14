import {
  ADD_CODE_FAIL,
  ADD_CODE_REQUEST,
  ADD_CODE_SUCCESS,
  ALL_USER_FAIL,
  ALL_USER_REQUEST,
  ALL_USER_SUCCESS,
} from '../constants/UserConstants';

export const addCodeToUserReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_CODE_REQUEST:
      return {
        loading: true,
      };
    case ADD_CODE_SUCCESS:
      return {
        loading: false,
        success: true,
      };
    case ADD_CODE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};


export const allUserReducer = (state = {}, action) => {
  switch (action.type) {
    case ALL_USER_REQUEST:
      return {
        loading: true,
      };
    case ALL_USER_SUCCESS:
      return {
        loading: false,
        users: action.payload,
      };
    case ALL_USER_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
