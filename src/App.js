import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import GlobalStyles from './styles/global';

import './config/ReactotronConfig';
import store from './store';
import Routes from './routes';
import Header from './components/Header';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyles />
        <Header />
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
