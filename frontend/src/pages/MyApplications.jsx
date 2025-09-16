import React, { useEffect, useState } from 'react';
import { api } from '../api';

export default function MyApplications() {
  const [apps, setApps] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    (async () => {
      try { setApps(await api('/jobs/me/applications', { auth:true })); } catch (e) { setError(e.message); }
    })();
  }, []);

  return (
    <div className="container">
      <div className="card">
        <h2>My Applications</h2>
        {error && <div className="muted">{error}</div>}
        {apps.map(a => (
          <div key={a.id} className="job">
            <div><strong>{a.title}</strong></div>
            <div className="muted">{new Date(a.created_at).toLocaleString()}</div>
            {a.cover_letter && <p>{a.cover_letter}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
