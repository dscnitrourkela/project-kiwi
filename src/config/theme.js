import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#131217',
      paper: '#18171d',
    },
    text: {
      primary: '#ffffff',
      secondary: 'rgba(255, 255, 255, 0.4)',
    },
    action: {
      active: '#ffffff',
      hover: '#f8f0e3',
    },
  },
});

export default theme;
