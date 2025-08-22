document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out'
    });
  
    // Typed.js Animation
    if (document.querySelector('.typed-text')) {
      new Typed('.typed-text', {
        strings: ['Web Developer', 'Data Analyst', 'Data Engineer', 'Data Scientist', 'UI/UX Designer', 'Tech Enthusiast'],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true,
        showCursor: false
      });
    }
  
    // Contact Form Handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
      contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = {
          name: contactForm.name.value,
          email: contactForm.email.value,
          message: contactForm.message.value
        };
  
        try {
          const response = await fetch('/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
          });
          
          const data = await response.json();
          showMessage(data.message, data.success);
          contactForm.reset();
        } catch (error) {
          showMessage('⚠️ Error sending message. Please try again.', false);
        }
      });
    }
  
    function showMessage(message, isSuccess) {
      const messageDiv = document.createElement('div');
      messageDiv.className = `alert alert-${isSuccess ? 'success' : 'danger'} fade-in`;
      messageDiv.textContent = message;
      
      const container = document.getElementById('formMessage');
      container.innerHTML = '';
      container.appendChild(messageDiv);
      
      setTimeout(() => messageDiv.remove(), 3000);
    }
  });
  

AOS.init({
  duration: 400, // or 500 for slightly slower
  once: true,
  easing: 'ease-out'
});

  