import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import { ThemeProvider, CssBaseline } from '@mui/material';
import customTheme from './theme';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
   <React.StrictMode>
      <ThemeProvider theme={customTheme}>
         <CssBaseline />
         <App />
      </ThemeProvider>
   </React.StrictMode>
);
