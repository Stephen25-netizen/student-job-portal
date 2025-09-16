import React, { useState } from 'react';
import { api } from '../api';

export default function PostJob() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [salary, setSalary] = useState('');
  const [msg, setMsg] = useState('');

  async function submit(e) {
    e.preventDefault();
    setMsg('');
    try {
      const job = await api('/jobs', { method:'POST', auth:true, body: { title, description, location, salary } });
      setMsg('Job posted!');
      window.location.href = `/job/${job.id}`;
    } catch (err) {
      setMsg(err.message);
    }
  }

  return (
    <div className="container">
      <div className="card" style={{maxWidth:720, margin:'40px auto'}}>
        <h2>Post a Job</h2>
        <form onSubmit={submit} className="row">
          <input className="input" placeholder="Title" value={title} onChange={e=>setTitle(e.target.value)} />
          <input className="input" placeholder="Location" value={location} onChange={e=>setLocation(e.target.value)} />
          <input className="input" placeholder="Salary (optional)" value={salary} onChange={e=>setSalary(e.target.value)} />
          <textarea className="input" rows="6" placeholder="Description" value={description} onChange={e=>setDescription(e.target.value)} />
          <button className="btn primary">Create job</button>
          {msg && <div className="muted">{msg}</div>}
        </form>
      </div>
    </div>
  );
}
