// script.js

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Validate email
    const emailInput = document.getElementById('FormControlInput1');
    const email = emailInput.value.trim();
    if (!isValidEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    // Validate message
    const messageInput = document.getElementById('FormControlTextarea1');
    const message = messageInput.value.trim();
    if (message === '') {
      alert('Please enter a message.');
      return;
    }

    // If all validations pass, submit the form
    alert('Form submitted successfully!');
    form.reset(); // Reset form fields
  });
});

// Function to validate email
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
