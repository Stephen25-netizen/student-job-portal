document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const jobsContainer = document.querySelector('.jobs');
    const jobCards = document.querySelectorAll('.job-card');
    
    // Job data matching HTML
    const jobs = [
        {
            id: 1,
            title: 'Robotics Engineer',
            company: 'Tech Solution',
            experience: '3+ years'
        },
        {
            id: 2,
            title: 'Graphic Designer',
            company: 'Creative Minds',
            location: 'Nairobi, Kenya',
            experience: '1+ year'
        },
        {
            id: 3,
            title: 'Backend Engineer',
            company: 'DevSphere',
            location: 'Mombasa, Kenya',
            experience: '4+ years'
        }
    ];
    
    searchInput.addEventListener('input', function() {
        const searchTerm = searchInput.value.toLowerCase();
        
        jobCards.forEach((card, index) => {
            const job = jobs[index];
            if (!job) return;
            
            const matches = job.title.toLowerCase().includes(searchTerm) ||
                           job.company.toLowerCase().includes(searchTerm) ||
                           (job.location && job.location.toLowerCase().includes(searchTerm)) ||
                           job.experience.toLowerCase().includes(searchTerm);
            
            if (matches) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});
