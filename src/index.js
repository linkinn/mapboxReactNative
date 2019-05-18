import './config/ReactotronConfig';
import React from 'react';
import { Provider } from 'react-redux';

import Main from './pages/Main';
import store from './store';

const App = () => (
  <Provider store={store}>
    <Main />
  </Provider>
);

export default App;