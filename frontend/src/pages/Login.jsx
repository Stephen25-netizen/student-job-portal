import React, { useState } from 'react';
import { api, setToken } from '../api';

export default function Login({ setUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  async function submit(e) {
    e.preventDefault();
    setError('');
    try {
      const data = await api('/auth/login', { method:'POST', body: { email, password } });
      setToken(data.token);
      setUser(data.user);
      window.location.href = '/';
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div className="container">
      <div className="card" style={{maxWidth:420, margin:'40px auto'}}>
        <h2>Login</h2>
        <form onSubmit={submit} className="row">
          <input className="input" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
          <input className="input" type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} />
          {error && <div className="muted">{error}</div>}
          <button className="btn primary">Login</button>
        </form>
      </div>
    </div>
  );
}
