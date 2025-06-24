import React, { useState } from 'react';
import Login from './components/Login';
import Home from './components/Home'; // Assuming Home.jsx is your main app

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      {loggedIn ? <Home /> : <Login onSuccess={() => setLoggedIn(true)} />}
    </>
  );
}

export default App;
