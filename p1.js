document.addEventListener('DOMContentLoaded', (event) => {

    document.addEventListener('DOMContentLoaded', (event) => {
        document.getElementById('downloadResume').addEventListener('click', function() {
            const link = document.createElement('a');
            link.href = 'MyResume.pdf'; // Update with the actual path to your resume file
            link.download = 'MyResume.pdf';
            link.click();
        });

        document.getElementById('github').addEventListener('click', function() {
            window.open('https://github.com/Rabia2417', '_blank');
        });
    });


    const skillsLink = document.getElementById('skillsLink');
    const educationLink = document.getElementById('educationLink');
    const achievementsLink = document.getElementById('achievementsLink');

    const skillsSection = document.getElementById('skills');
    const educationSection = document.getElementById('education');
    const achievementsSection = document.getElementById('achievements');

    // Navigation links
    const homeLink = document.querySelector('a[href="#"]');
    const aboutLink = document.querySelector('a[href="#about"]');
    const servicesLink = document.querySelector('a[href="#services"]');
    const projectsLink = document.querySelector('a[href="#projects"]');
    const contactLink = document.querySelector('a[href="#contact"]');

    // Sections
    const sections = {
        'home': document.querySelector('.section1_home'),
        'about': document.querySelector('.section2_about'),
        'services': document.querySelector('.section3_services'),
        'projects': document.querySelector('.section4_projects'),
        'contact': document.querySelector('.section5_contact')
    };

    // Function to handle navigation link clicks
    function navigateToSection(sectionId) {
        const section = sections[sectionId];
        if (section) {
            // Scroll to the section
            section.scrollIntoView({ behavior: 'smooth' });

            // Optionally, highlight the active link
            const activeLink = document.querySelector(a[href="#${sectionId}"]);
            if (activeLink) {
                // Remove active class from all links
                document.querySelectorAll('nav ul li a').forEach(link => {
                    link.classList.remove('active');
                });
                // Add active class to the clicked link
                activeLink.classList.add('active');
            }
        }
    }

    // Event listeners for navigation links
    homeLink.addEventListener('click', (e) => {
        e.preventDefault();
        navigateToSection('home');
    });

    aboutLink.addEventListener('click', (e) => {
        e.preventDefault();
        navigateToSection('about');
    });

    servicesLink.addEventListener('click', (e) => {
        e.preventDefault();
        navigateToSection('services');
    });

    projectsLink.addEventListener('click', (e) => {
        e.preventDefault();
        navigateToSection('projects');
    });

    contactLink.addEventListener('click', (e) => {
        e.preventDefault();
        navigateToSection('contact');
    });

    // Optionally, you can also initialize the scroll behavior for the initial active section
    const initialActiveLink = document.querySelector('nav ul li a.active');
    if (initialActiveLink) {
        const initialSectionId = initialActiveLink.getAttribute('href').substring(1);
        navigateToSection(initialSectionId);
    }
    

    // Event listeners for sub-navigation (about section)
    skillsLink.addEventListener('click', (e) => {
        e.preventDefault();
        skillsSection.classList.remove('hidden');
        educationSection.classList.add('hidden');
        achievementsSection.classList.add('hidden');
    });

    educationLink.addEventListener('click', (e) => {
        e.preventDefault();
        skillsSection.classList.add('hidden');
        educationSection.classList.remove('hidden');
        achievementsSection.classList.add('hidden');
    });

    achievementsLink.addEventListener('click', (e) => {
        e.preventDefault();
        skillsSection.classList.add('hidden');
        educationSection.classList.add('hidden');
        achievementsSection.classList.remove('hidden');
    });
});

var typed = new Typed('#domain', {
    strings: ['Web Developer.', 'Cyber Security Analyst.', 'Data Scientist.'],
    typeSpeed: 100,
    loop: true
});