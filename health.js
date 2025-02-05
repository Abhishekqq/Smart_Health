// Get all elements
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.nav a');
const getStartedButton = document.querySelector('.btn');
const bookAppointmentButton = document.querySelector('.btn2');
const startMonitoringButton = document.querySelector('.btn');
const learnMoreButton = document.querySelector('.btn3');
const accordionButtons = document.querySelectorAll('.accordion-button');
const faqAccordionContents = document.querySelectorAll('.accordion-content');
const mobileNavButton = document.querySelector('.mobile-nav-button');
const mobileNavMenu = document.querySelector('.mobile-nav-menu');
const imageGrid = document.querySelector('.image-grid');
const imageModal = document.querySelector('.image-modal');

// Add event listeners to navigation links
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Remove active class from all links
        navLinks.forEach(link => link.classList.remove('active'));

        // Add active class to the clicked link
        link.classList.add('active');
    });
});

// Add event listener to get started button
getStartedButton.addEventListener('click', () => {
    // Scroll to the middle section
    document.querySelector('middle').scrollIntoView({ behavior: 'smooth' });
});

// Add event listener to book appointment button
bookAppointmentButton.addEventListener('click', () => {
    // Scroll to the features section
    document.querySelector('.features').scrollIntoView({ behavior: 'smooth' });
});

// Add event listener to start monitoring button
startMonitoringButton.addEventListener('click', () => {
    // Scroll to the features section
    document.querySelector('.features').scrollIntoView({ behavior: 'smooth' });
});

// Add event listener to learn more button
learnMoreButton.addEventListener('click', () => {
    // Scroll to the features section
    document.querySelector('.features').scrollIntoView({ behavior: 'smooth' });
});

// Add event listeners to accordion buttons
accordionButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Get the accordion content associated with the button
        const accordionContent = button.nextElementSibling;

        // Toggle the aria-expanded attribute of the button
        button.setAttribute('aria-expanded', button.getAttribute('aria-expanded') === 'true' ? 'false' : 'true');

        // Toggle the display of the accordion content
        accordionContent.style.display = accordionContent.style.display === 'block' ? 'none' : 'block';
    });
});

// Add event listeners to FAQ accordion contents
faqAccordionContents.forEach(content => {
    content.addEventListener('click', () => {
        // Get the accordion button associated with the content
        const accordionButton = content.previousElementSibling;

        // Toggle the aria-expanded attribute of the button
        accordionButton.setAttribute('aria-expanded', accordionButton.getAttribute('aria-expanded') === 'true' ? 'false' : 'true');

        // Toggle the display of the accordion content
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});

// Add event listener to mobile navigation button
mobileNavButton.addEventListener('click', () => {
    // Toggle the display of the mobile navigation menu
    mobileNavMenu.classList.toggle('active');
});

// Add event listener to mobile navigation menu
mobileNavMenu.addEventListener('click', () => {
    // Toggle the display of the mobile navigation menu
    mobileNavMenu.classList.toggle('active');
});

// Add event listener to image grid
imageGrid.addEventListener('click', () => {
    // Get the clicked image
    const clickedImage = event.target;

    // Check if the clicked element is an image
    if (clickedImage.tagName === 'IMG') {
        // Get the image modal
        const imageModal = document.querySelector('.image-modal');

        // Set the image modal image source
        imageModal.querySelector('img').src = clickedImage.src;

        // Show the image modal
        imageModal.classList.add('active');
    }
});

// Add event listener to image modal
imageModal.addEventListener('click', () => {
    // Hide the image modal
    imageModal.classList.remove('active');
});

// Add event listener to window scroll
window.addEventListener('scroll', () => {
    // Get the current scroll position
    const scrollPosition = window.scrollY;

    // Check if the navbar should be fixed
    if (scrollPosition > 100) {
        navbar.classList.add('fixed');
    } else {
        navbar.classList.remove('fixed');
    }
});

// Add event listener to window load
window.addEventListener('load', () => {
    // Animate the loading of the page
    document.querySelector('body').classList.add('loaded');
});

// Get the form
const form = document.querySelector('form');

// Add event listener to form submission
form.addEventListener('submit'), (event) => {
}


// Get the contact form
const contactForm = document.querySelector('.contact-form');

// Add event listener to contact form submission
contactForm.addEventListener('submit', (event) => {
    // Prevent default form submission behavior
    event.preventDefault();

    // Get the form data
    const formData = new FormData(contactForm);

    // Send the form data to the server
    fetch('/contact', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
});

// Example: Add event listener to newsletter signup form
const newsletterForm = document.querySelector('.newsletter-form');

newsletterForm.addEventListener('submit', (event) => {
  event.preventDefault();
  // Handle form submission logic here
});