import React, { useEffect, useState } from 'react';
import { api } from '../api';

export default function Jobs({ user }) {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    (async () => {
      try { setJobs(await api('/jobs')); } catch (e) { setError(e.message); }
    })();
  }, []);

  return (
    <div className="container">
      {user && user.role === 'employer' && (
        <div className="card" style={{marginBottom:18}}>
          <a className="btn primary" href="/post">+ Post a job</a>
        </div>
      )}
      <div className="row">
        {error && <div className="muted">{error}</div>}
        {jobs.map(j => (
          <div key={j.id} className="job">
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
              <h3 style={{margin:'8px 0'}}>{j.title}</h3>
              <a className="btn" href={`/job/${j.id}`}>View</a>
            </div>
            <div className="muted">{j.employer_name} • {j.location || 'Remote'}</div>
            {j.salary && <div className="tag" style={{marginTop:8}}>Salary: {j.salary}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}
