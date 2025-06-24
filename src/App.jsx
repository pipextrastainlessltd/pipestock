import React, { useState } from 'react';
import Login from './components/Login';
import StockView from './components/StockView';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      {loggedIn ? <StockView /> : <Login onSuccess={() => setLoggedIn(true)} />}
    </>
  );
}

export default App;
