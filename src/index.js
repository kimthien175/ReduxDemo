import React from 'react';

import { Provider } from 'react-redux';
import store from './Reducers';

import Counter from './Screens/Counter';
import Todo from './Components/Todo/App';

function App() {
  return (
    <Provider store={store}>
      <Todo/>
    </Provider>
  );
}

export default App;
