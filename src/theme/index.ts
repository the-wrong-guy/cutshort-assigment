import { createTheme } from '@mui/material/styles';
import { responsiveFontSizes } from '@mui/material/styles';

const theme = createTheme({
   typography: {
      fontFamily: 'Inter, sans-serif',
   },
   palette: {
      primary: {
         main: '#5a4ad1',
         light: '#9077ff',
         dark: '#16209f',
         contrastText: '#ffffff',
      },
   },

   components: {
      MuiButton: {
         styleOverrides: {
            root: {
               textTransform: 'none',
               fontWeight: 400,
               borderRadius: '5px',
            },
         },
      },
      MuiStep: {
         styleOverrides: {
            root: {
               padding: 0,
            },
         },
      },
      MuiStepLabel: {
         styleOverrides: {
            root: {
               padding: 0,
               '& .MuiStepLabel-iconContainer': {
                  paddingRight: 0,
               },
            },
         },
      },
   },
});

const customTheme = responsiveFontSizes(theme);

export default customTheme;
