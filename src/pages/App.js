import React from 'react';

import { ThemeProvider } from '@material-ui/styles';
import { CssBaseline } from '@material-ui/core';

import theme from '../config/theme';

import ProfileCard from '../components/AuthSection/ProfileCard';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ProfileCard />
    </ThemeProvider>
  );
};

export default App;
