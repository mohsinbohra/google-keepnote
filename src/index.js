import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createMuiTheme,ThemeProvider } from '@material-ui/core/styles';

import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import { red } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: red,
  },
});

ReactDOM.render(
 
  <ThemeProvider theme={theme}>
  <BrowserRouter>
  <App />
  </BrowserRouter>
</ThemeProvider> ,

  
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
