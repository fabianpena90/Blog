import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import App from './components/App';
import reducers from './reducers'
import thunk from 'redux-thunk' //importing redux-thunk 
import 'semantic-ui-css/semantic.min.css'

const store = createStore(reducers, applyMiddleware(thunk)) // applying redux thunk 

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

