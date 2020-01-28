import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Routes from './routes'
import './App.scss'
import 'react-notifications/lib/notifications.css';

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;