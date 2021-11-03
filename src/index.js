import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { muiTheme } from './config/muiTheme';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';

console.log(muiTheme)

ReactDOM.render(
    <BrowserRouter>
        <ThemeProvider theme={muiTheme}>
            <App />
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById('root')
);

