import createTheme from 'spectacle/lib/themes/default';
require('normalize.css');

export default createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#00a2ff',
    quaternary: '#CECECE',
  },
  {
    primary: {
      name: 'Montserrat',
      googleFont: true
    },
    secondary: 'Helvetica',
  }
);
