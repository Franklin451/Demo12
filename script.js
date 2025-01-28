// Smooth Scrolling for Navigation Links
document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetSection = document.querySelector(this.getAttribute('href'));
      targetSection.scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Change Navbar Background Color on Scroll
  window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('navbar-scrolled');
    } else {
      navbar.classList.remove('navbar-scrolled');
    }
  });
  
  // Show/Hide Back to Top Button
  const backToTopBtn = document.createElement('button');
  backToTopBtn.innerText = '↑';
  backToTopBtn.classList.add('back-to-top');
  document.body.appendChild(backToTopBtn);
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  });
  
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
/*THE FOOTER*/
document.addEventListener('DOMContentLoaded', function() {
  const stats = [
      { value: 1500, element: document.querySelector('.stat-item:nth-child(1) h2'), formatAsK: true },
      { value: 10, element: document.querySelector('.stat-item:nth-child(2) h2') },
      { value: 80, element: document.querySelector('.stat-item:nth-child(3) h2') },
      { value: 100, element: document.querySelector('.stat-item:nth-child(4) h2') }
  ];

  stats.forEach(stat => {
      let count = 0;
      const increment = stat.value / 100; // Adjust this to control speed
      const updateCounter = setInterval(function() {
          count += increment;
          if (count >= stat.value) {
              if (stat.formatAsK) {
                  stat.element.textContent = (stat.value / 1000).toFixed(1) + 'k';
              } else {
                  stat.element.textContent = stat.value;
              }
              clearInterval(updateCounter);
          } else {
              if (stat.formatAsK) {
                  stat.element.textContent = (count / 1000).toFixed(1) + 'k';
              } else {
                  stat.element.textContent = Math.ceil(count);
              }
          }
      }, 20); // Adjust this to control speed
  });
});




/*THE SERVICES SECTION*/
  // Initialize the carousel 
  var myCarousel = document.getElementById('testimonialsCarousel')
  var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 5000,  // Auto-slide every 5 seconds
    ride: 'carousel' // Automatically start sliding when the page loads
  });

  //carousel functionality
  document.querySelector('.carousel-control-prev').addEventListener('click', function() {
    carousel.prev();
  });

  document.querySelector('.carousel-control-next').addEventListener('click', function() {
    carousel.next();
  });


document.addEventListener("DOMContentLoaded", function() {
  // Select all cards
  const cards = document.querySelectorAll('.card');
  
  // Hover effect on cards
  cards.forEach(card => {
      card.addEventListener('mouseover', function() {
          card.style.backgroundColor = '#f1f1f1'; // Change background color on hover
      });

      card.addEventListener('mouseout', function() {
          card.style.backgroundColor = '#fff'; // Reset background color
      });

      // Click effect to show card info
      card.addEventListener('click', function() {
          const cardTitle = card.querySelector('h3').textContent;
          const cardDescription = card.querySelector('p').textContent;
          alert(`You clicked on the card: ${cardTitle}\n\nDescription: ${cardDescription}`);
      });
  });
});




/*THE TESTIMONIAL FOOTER*/console.log('Testiomonials section loaded.');













/*PORTFOLIO*/
document.addEventListener('DOMContentLoaded', function() {
  // Select all buttons
  const buttons = document.querySelectorAll('.cta-button');

  buttons.forEach(button => {
      // Add click event to navigate to the project page
      button.addEventListener('click', (e) => {
          e.preventDefault(); // Prevent default link behavior
          const projectName = button.previousElementSibling.textContent;
          alert(`Navigating to ${projectName} project page`);
          // Here, you can actually navigate to the project page like this:
          // window.location.href = 'project-details.html'; 
      });
  });
});









/*CONTACT*/
// contact.js - Handle form validation and submission
document.addEventListener("DOMContentLoaded", function() {
  // Get the form and its elements
  const form = document.getElementById('quote-form');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const phoneInput = document.getElementById('phone');
  const messageInput = document.getElementById('message');

  // Handle form submission
  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    
    // Simple validation: Check if all fields are filled
    if (nameInput.value === '' || emailInput.value === '' || phoneInput.value === '' || messageInput.value === '') {
      alert("Please fill out all fields before submitting!");
    } else {
      // Show a confirmation message if all fields are valid
      alert("Thank you for your submission! We will get back to you shortly.");
      
      // Optionally, reset the form after successful submission
      form.reset();
    }
  });
});


  
/*THE FOOTER*/
document.addEventListener('DOMContentLoaded', function() {
  const stats = [
      { value: 1500, element: document.querySelector('.stat-item:nth-child(1) h2'), formatAsK: true },
      { value: 10, element: document.querySelector('.stat-item:nth-child(2) h2') },
      { value: 80, element: document.querySelector('.stat-item:nth-child(3) h2') },
      { value: 100, element: document.querySelector('.stat-item:nth-child(4) h2') }
  ];

  stats.forEach(stat => {
      let count = 0;
      const increment = stat.value / 100; // Adjust this to control speed
      const updateCounter = setInterval(function() {
          count += increment;
          if (count >= stat.value) {
              if (stat.formatAsK) {
                  stat.element.textContent = (stat.value / 1000).toFixed(1) + 'k';
              } else {
                  stat.element.textContent = stat.value;
              }
              clearInterval(updateCounter);
          } else {
              if (stat.formatAsK) {
                  stat.element.textContent = (count / 1000).toFixed(1) + 'k';
              } else {
                  stat.element.textContent = Math.ceil(count);
              }
          }
      }, 20); // Adjust this to control speed
  });
});
