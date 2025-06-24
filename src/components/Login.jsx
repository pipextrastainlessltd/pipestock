import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyD4ztdj41ggb21d_cKygq0cxxQzCINKyzY",
  authDomain: "pipestock2025.firebaseapp.com",
  projectId: "pipestock2025",
  storageBucket: "pipestock2025.appspot.com",
  messagingSenderId: "591046290131",
  appId: "1:591046290131:web:0e52d5cff4cdb00fb70226"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function Login({ onSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      onSuccess();
    } catch (err) {
      setError("Invalid login. Please try again.");
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      /><br/>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      /><br/>
      <button onClick={handleLogin}>Login</button>
      {error && <div style={{ color: 'red', marginTop: '10px' }}>{error}</div>}
    </div>
  );
}

export default Login;
