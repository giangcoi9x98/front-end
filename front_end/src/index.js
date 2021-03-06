import React from 'react';
import './index.css'
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { SnackbarProvider } from 'notistack'

ReactDOM.render(
  <React.StrictMode>
    <SnackbarProvider>
      <App />
    </SnackbarProvider>
    {/* // ?? snackbar */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
