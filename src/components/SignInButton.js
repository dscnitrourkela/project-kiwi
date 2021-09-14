import React, { useContext } from 'react';

// Context
import { AuthContext } from '../contexts/AuthContext';

// Components
import { Button, Typography } from '@material-ui/core';

const SignInButton = () => {
  const { signIn, signOut, userName, state } = useContext(AuthContext);
  const { loading, loginSuccess, error } = state;
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <h1>{error}</h1>
      ) : (
        <div>
          {!loginSuccess ? (
            <div>
              <Button onClick={signIn} variant='contained' color='primary'>
                SignIn
              </Button>
            </div>
          ) : (
            <div>
              <Typography variant='h1'>Hello ,{userName}</Typography>
              <Button onClick={signOut} variant='contained' color='primary'>
                SignOut
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SignInButton;
