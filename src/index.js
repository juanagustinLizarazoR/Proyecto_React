import React from 'react';
import ReactDOM from 'react-dom';
import './assets/stylesheets/Index.css';
import * as serviceWorker from './serviceWorker';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter, Route} from 'react-router-dom'

const app = (
  <BrowserRouter>
  <Route component={App} />

  </BrowserRouter>
)

ReactDOM.render(
  app,
  document.getElementById('root')
);

serviceWorker.unregister();
