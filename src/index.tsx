import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import '@avtopro/button/dist/style.css';
import '@avtopro/text-input/dist/style.css';
import '@avtopro/select/dist/style.css';
import '@avtopro/preloader/dist/style.css';
import '@avtopro/modal/dist/style.css';
import './index.scss';
import { App } from './App';

ReactDOM.render(
  // <React.StrictMode>
  <Router>
    <App />
  </Router>,
  // </React.StrictMode>,
  document.getElementById('root'),
);
