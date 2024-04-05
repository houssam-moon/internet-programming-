document.addEventListener("DOMContentLoaded", function() {
    // Function to toggle navigation menu on small screens
    const toggleMenu = () => {
        const nav = document.querySelector('nav');
        nav.classList.toggle('active');
    };

    // Event listener to toggle navigation menu on click
    const menuToggle = document.querySelector('.menu-toggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMenu);
    }

    // Function to display a confirmation message when form is submitted
    const handleFormSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const name = formData.get('name');
        alert(`Thank you, ${name}! Your message has been submitted.`);
        form.reset();
    };

    // Event listener for form submission
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }

    // Function to handle page transition on link click
    const handlePageTransition = (event) => {
        event.preventDefault();
        const href = event.target.getAttribute('href');
        const currentPage = document.querySelector('main');
        
        // Create a div for the page transition effect
        const transitionDiv = document.createElement('div');
        transitionDiv.classList.add('page-transition');
        
        // Insert the transition div before navigating to the new page
        document.body.appendChild(transitionDiv);

        // Delay navigating to the new page to allow time for the transition effect
        setTimeout(() => {
            window.location.href = href;
        }, 500); // Adjust this value to match the duration of the animation
    };

    // Event listener for link clicks to trigger page transition
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', handlePageTransition);
    });

    console.log("Script loaded successfully!"); // Example: Log a message to the console when the script is loaded
});