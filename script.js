document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const jobsContainer = document.querySelector('.jobs') || document.getElementById('jobs');
    
    // 15 dynamic jobs
    const jobs = [
        { id: 1, title: 'Robotics Engineer', company: 'Tech Solution', location: 'Nairobi', salary: '$80k', description: 'Develop AI robots.', experience: '3+ years' },
        { id: 2, title: 'Graphic Designer', company: 'Creative Minds', location: 'Nairobi', salary: '$40k', description: 'UI/UX designs.', experience: '1+ year' },
        { id: 3, title: 'Backend Engineer', company: 'DevSphere', location: 'Mombasa', salary: '$90k', description: 'Node.js APIs.', experience: '4+ years' },
        { id: 4, title: 'Frontend Developer', company: 'Web Innovations', location: 'Kisumu', salary: '$60k', description: 'React apps.', experience: '2+ years' },
        { id: 5, title: 'Data Scientist', company: 'Analytics Pro', location: 'Nairobi', salary: '$100k', description: 'ML models.', experience: '3+ years' },
        { id: 6, title: 'DevOps Engineer', company: 'Cloud Masters', location: 'Remote', salary: '$110k', description: 'Docker/AWS.', experience: '4+ years' },
        { id: 7, title: 'Product Manager', company: 'Startup Hub', location: 'Nairobi', salary: '$120k', description: 'Agile leadership.', experience: '5+ years' },
        { id: 8, title: 'UX Designer', company: 'Design Lab', location: 'Mombasa', salary: '$50k', description: 'User research.', experience: '2+ years' },
        { id: 9, title: 'Fullstack Developer', company: 'Digital Agency', location: 'Eldoret', salary: '$70k', description: 'MEAN stack.', experience: '3+ years' },
        { id: 10, title: 'Cybersecurity Analyst', company: 'SecureNet', location: 'Nairobi', salary: '$95k', description: 'Threat hunting.', experience: '4+ years' },
        { id: 11, title: 'Mobile Developer', company: 'AppWorks', location: 'Remote', salary: '$65k', description: 'Flutter apps.', experience: '2+ years' },
        { id: 12, title: 'AI Engineer', company: 'Future Tech', location: 'Nairobi', salary: '$130k', description: 'Deep learning.', experience: '5+ years' },
        { id: 13, title: 'QA Engineer', company: 'Quality Assure', location: 'Kisumu', salary: '$55k', description: 'Test automation.', experience: '2+ years' },
        { id: 14, title: 'Cloud Architect', company: 'Cloud9', location: 'Remote', salary: '$140k', description: 'AWS/Azure.', experience: '6+ years' },
        { id: 15, title: 'Blockchain Developer', company: 'CryptoLabs', location: 'Nairobi', salary: '$110k', description: 'Solidity smart contracts.', experience: '3+ years' }
    ];

    // Render jobs
    function renderJobs(filteredJobs = jobs) {
        jobsContainer.innerHTML = filteredJobs.map(job => `
            <div class="job-card">
                <h3>${job.title}</h3>
                <p><strong>Company:</strong> ${job.company}</p>
                <p><strong>Location:</strong> ${job.location || 'N/A'}</p>
                <p><strong>Salary:</strong> ${job.salary}</p>
                <p><strong>Experience:</strong> ${job.experience}</p>
                <p>${job.description}</p>
                <a href="#" class="apply-btn" data-job-id="${job.id}">Apply Now</a>
            </div>
        `).join('');
        
        // Apply handlers
        document.querySelectorAll('.apply-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const jobId = parseInt(btn.dataset.jobId);
                const job = jobs.find(j => j.id === jobId);
                alert(`Applied for ${job.title} at ${job.company}!\\nEmail notification ready.`);
                // EmailJS here after config
            });
        });
    }
    renderJobs();

    // Search
    searchInput.addEventListener('input', function() {
        const term = searchInput.value.toLowerCase();
        const filtered = jobs.filter(job => 
            job.title.toLowerCase().includes(term) ||
            job.company.toLowerCase().includes(term) ||
            job.description.toLowerCase().includes(term) ||
            job.location.toLowerCase().includes(term)
        );
        renderJobs(filtered);
    });
});
