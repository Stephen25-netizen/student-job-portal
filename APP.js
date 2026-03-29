// src/App.js
import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const jobs = [
    {
      id: 1,
      title: 'Frontend Developer',
      company: 'Tech Solutions Ltd',
      location: 'Nairobi, Kenya',
      experience: '2+ years',
    },
    {
      id: 2,
      title: 'Graphic Designer',
      company: 'Creative Minds',
      location: 'Mombasa, Kenya',
      experience: '1+ year',
    },
    {
      id: 3,
      title: 'Backend Engineer',
      company: 'DevSphere',
      location: 'Remote',
      experience: '3+ years',
    },
  ];

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <header>
        <h1>Job Finder Portal</h1>
        <p>Find your next opportunity</p>
      </header>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search jobs by title or company..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button>Search</button>
      </div>

      <div className="jobs">
        {filteredJobs.map((job) => (
          <div key={job.id} className="job-card">
            <h3>{job.title}</h3>
            <p>Company: {job.company}</p>
            <p>Location: {job.location}</p>
            <p>Experience: {job.experience}</p>
          </div>
        ))}
      </div>

      <footer>
        &copy; 2025 JobFinder. All rights reserved.
      </footer>
    </div>
  );
};

export default App;
