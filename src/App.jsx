import React, { useState } from 'react';
import Login from './components/Login';
import Home from './components/Home';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      {loggedIn ? <Home /> : <Login onSuccess={() => setLoggedIn(true)} />}
    </>
  );
}

export default App;
