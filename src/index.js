import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import Header from './Header';
import Todos from './todos/Todos';
import Form from './form';

ReactDOM.render(
  <div className="container">
    {/* <LifeCycle /> */}
    {/* <Todos /> */}
    <Form />
  </div>,
  document.getElementById('root')
);
