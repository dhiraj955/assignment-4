
      document.getElementById('contactForm').addEventListener('submit', function (e) {
        e.preventDefault();
      
        // Get field values
        const name = document.getElementById('fullname').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
      
        
        const nameError = document.getElementById('name-error');
        const subjectError = document.getElementById('subject-error');
        const emailError = document.getElementById('email-error');
        const messageError = document.getElementById('message-error');
      
      
        nameError.textContent = '';
        subjectError.textContent = '';
        emailError.textContent = '';
        messageError.textContent = '';
      
        let isValid = true;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      
        if (name === '') {
          nameError.textContent = 'Name is required.';
          isValid = false;
        }else if (name.length < 5) {
          nameError.textContent = "name must be atleast 5 character";
          isValid = false;
        } else if (!/^[a-zA-Z\s]+$/.test(name)) {
          nameError.textContent = "Name can only contain letters and spaces!";
          isValid = false;
        }
      
        if (subject === '') {
          subjectError.textContent = 'Subject is required.';
          isValid = false;
        }
      
        if (email === '') {
          emailError.textContent = 'Email is required.';
          isValid = false;
        } else if (!emailRegex.test(email)) {
          emailError.textContent = 'Please enter a valid email.';
          isValid = false;
        }
      
        if (message === '') {
          messageError.textContent = 'Message is required.';
          isValid = false;
        }
      
        if (isValid) {
          nameError.textContent = '';
          subjectError.textContent = '';
          emailError.textContent = '';
          messageError.textContent = '';
          
        }
      });