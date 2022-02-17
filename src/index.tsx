import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ApiCache from './ApiCache';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ApiCache>
        <App />
      </ApiCache>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

