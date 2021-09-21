import React from 'react';

// ThemeProviders
import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

// theme
import theme from '../config/theme';

// Components
import { AuthSection } from '../components';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthSection />
    </ThemeProvider>
  );
};

export default App;
