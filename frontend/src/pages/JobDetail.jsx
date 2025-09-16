import React, { useEffect, useState } from 'react';
import { api } from '../api';

export default function JobDetail({ id, user }) {
  const [job, setJob] = useState(null);
  const [cover, setCover] = useState('');
  const [msg, setMsg] = useState('');

  useEffect(() => {
    (async () => {
      try { setJob(await api('/jobs/' + id)); } catch (e) { setMsg(e.message); }
    })();
  }, [id]);

  async function apply() {
    try {
      await api(`/jobs/${id}/apply`, { method:'POST', auth:true, body: { cover_letter: cover } });
      setMsg('Applied successfully!');
    } catch (e) {
      setMsg(e.message);
    }
  }

  if (!job) return <div className="container"><div className="card">{msg || 'Loading...'}</div></div>;

  return (
    <div className="container">
      <div className="card">
        <h2>{job.title}</h2>
        <div className="muted">{job.employer_name} • {job.location || 'Remote'}</div>
        {job.salary && <div className="tag" style={{marginTop:8}}>Salary: {job.salary}</div>}
        <p style={{whiteSpace:'pre-wrap'}}>{job.description}</p>

        {user && user.role === 'student' && (
          <div style={{marginTop:16}}>
            <textarea className="input" rows="5" placeholder="Write a short cover letter (optional)"
              value={cover} onChange={e=>setCover(e.target.value)} />
            <button className="btn primary" onClick={apply}>Apply</button>
            {msg && <div className="muted" style={{marginTop:8}}>{msg}</div>}
          </div>
        )}
      </div>
    </div>
  );
}
