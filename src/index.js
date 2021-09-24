import React from 'react';
import ReactDOM from 'react-dom';
import Agenda from './container/Agenda';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import './style/style.css'

ReactDOM.render(
  <React.StrictMode>
    <Agenda/>
  </React.StrictMode>,
  document.getElementById('root')
);

