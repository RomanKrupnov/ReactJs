import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Layout.jsx';
import Router from './components/Router';
import { BrowserRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


ReactDOM.render(
    <BrowserRouter>
  <MuiThemeProvider>
    <Router />
  </MuiThemeProvider>
    </BrowserRouter>,
  document.getElementById('root'),
);