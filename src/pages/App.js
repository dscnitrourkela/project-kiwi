import React from 'react';

import { ThemeProvider } from '@material-ui/styles';
import { CssBaseline } from '@material-ui/core';

import theme from '../config/theme';

import LoginCard from '../components/AuthSection/LoginCard';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LoginCard />
    </ThemeProvider>
  );
};

export default App;
