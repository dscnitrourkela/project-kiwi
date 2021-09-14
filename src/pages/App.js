import React from 'react';

import AuthContextProvider from '../contexts/AuthContext';

import { SignInButton } from '../components';

const App = () => {
  return (
    <AuthContextProvider>
      <SignInButton />
    </AuthContextProvider>
  );
};

export default App;
