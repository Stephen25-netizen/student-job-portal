import React, { useState } from 'react';
import { api, setToken } from '../api';

export default function Register({ setUser }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student');
  const [error, setError] = useState('');

  async function submit(e) {
    e.preventDefault();
    setError('');
    try {
      const data = await api('/auth/register', { method:'POST', body: { name, email, password, role } });
      setToken(data.token);
      setUser(data.user);
      window.location.href = '/';
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div className="container">
      <div className="card" style={{maxWidth:520, margin:'40px auto'}}>
        <h2>Create account</h2>
        <form onSubmit={submit} className="row">
          <input className="input" placeholder="Full name" value={name} onChange={e=>setName(e.target.value)} />
          <input className="input" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
          <input className="input" type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} />
          <div>
            <label><input type="radio" name="role" checked={role==='student'} onChange={()=>setRole('student')} /> Student</label>
            {' '}
            <label><input type="radio" name="role" checked={role==='employer'} onChange={()=>setRole('employer')} /> Employer</label>
          </div>
          {error && <div className="muted">{error}</div>}
          <button className="btn primary">Register</button>
        </form>
      </div>
    </div>
  );
}
