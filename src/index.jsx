import App from './App';
import ReactDOM from 'react-dom';
import React from 'react';

const render = (App) => {
  ReactDOM.render(
    <App />,
    document.getElementById('AppContainer')
  )
};

render(App);