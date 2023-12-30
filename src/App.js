import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import ComponentA from './components/componentA/componentA';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ComponentA />
      </div>
    </Provider>
  );
}

export default App;

