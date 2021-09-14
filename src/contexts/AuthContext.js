import React, { createContext, useReducer, useEffect, useState } from 'react';

// Reducers
import { authReducer } from '../store/reducers/AuthReducers';

// Constants
import {
  AUTH_FAIL,
  AUTH_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
} from '../store/constants/AuthConstants';

//Firebase
import useFirebase from '../hooks/useFirebase';
import { provider } from '../config/firebase';

// Context Created
export const AuthContext = createContext();

//Context Provider
const AuthContextProvider = ({ children }) => {
  const [userName, setuserName] = useState('Hacker');
  const [state, dispatch] = useReducer(authReducer, {});

  const firebase = useFirebase();

  useEffect(() => {
    if (!firebase) return;
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setuserName(user.displayName);
      }
    });
  }, [dispatch,state]);

  const signIn = async (e) => {
    e.preventDefault();
    dispatch({ type: AUTH_REQUEST });

    await firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({ type: LOGIN_SUCCESS });
        var user = result.user;

        firebase
          .firestore()
          .collection('users')
          .doc(user.uid)
          .set({
            name: user.displayName,
            email: user.email,
            imageUrl: user.providerData[0].photoURL,
            points: 0,
            codeIDs: [],
          })
          .then(() => {
            console.log('login success');
            dispatch({
              type: LOGIN_SUCCESS,
            });
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((error) => {
        var errorMessage = error.message;
        dispatch({
          type: AUTH_FAIL,
          payload: errorMessage,
        });
      });
  };

  const signOut = async (e) => {
    e.preventDefault();
    try {
      dispatch({ type: AUTH_REQUEST });

      await firebase
        .auth()
        .signOut()
        .then(() => {
          dispatch({ type: LOGOUT_SUCCESS });
        });
    } catch (error) {
      dispatch({
        type: AUTH_FAIL,
        payload: error,
      });
    }
  };

  return (
    <AuthContext.Provider value={{ signIn, signOut, userName, state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
