import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import React from 'react';
import { AppContainer } from 'react-hot-loader'

import 'index.html';

ReactDOM.render(
  <h1>Hello World</h1>,
  document.getElementById('root')
);


if (module.hot) {
  module.hot.accept(() => { render(App) })
}