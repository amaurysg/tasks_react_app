import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//Dejamos reactDom (Api para render)
ReactDOM.render(
  //Con StrictMode, si tenemos un error nos mostrará en consola
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


