import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserProfile />
      </div>
    </Provider>
  );
}

export default App;