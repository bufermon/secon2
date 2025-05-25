document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
    const formMessages = document.getElementById('formMessages');

    // Input fields
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    // Error message paragraphs
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');

    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();
            let isValid = true;

            // Reset previous messages
            formMessages.textContent = '';
            formMessages.className = 'mt-4 text-sm';
            nameError.textContent = '';
            nameError.classList.add('hidden');
            emailError.textContent = '';
            emailError.classList.add('hidden');
            messageError.textContent = '';
            messageError.classList.add('hidden');

            // Validate Name
            if (nameInput.value.trim() === '') {
                nameError.textContent = 'Please enter your name.';
                nameError.classList.remove('hidden');
                nameInput.classList.add('border-red-500');
                nameInput.classList.remove('border-neutral-700', 'focus:border-brand-gold');
                isValid = false;
            } else {
                nameInput.classList.remove('border-red-500');
                nameInput.classList.add('border-neutral-700', 'focus:border-brand-gold');
            }

            // Validate Email
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (emailInput.value.trim() === '') {
                emailError.textContent = 'Please enter your email address.';
                emailError.classList.remove('hidden');
                emailInput.classList.add('border-red-500');
                emailInput.classList.remove('border-neutral-700', 'focus:border-brand-gold');
                isValid = false;
            } else if (!emailPattern.test(emailInput.value.trim())) {
                emailError.textContent = 'Please enter a valid email address.';
                emailError.classList.remove('hidden');
                emailInput.classList.add('border-red-500');
                emailInput.classList.remove('border-neutral-700', 'focus:border-brand-gold');
                isValid = false;
            } else {
                emailInput.classList.remove('border-red-500');
                emailInput.classList.add('border-neutral-700', 'focus:border-brand-gold');
            }

            // Validate Message
            if (messageInput.value.trim() === '') {
                messageError.textContent = 'Please enter your message.';
                messageError.classList.remove('hidden');
                messageInput.classList.add('border-red-500');
                messageInput.classList.remove('border-neutral-700', 'focus:border-brand-gold');
                isValid = false;
            } else {
                messageInput.classList.remove('border-red-500');
                messageInput.classList.add('border-neutral-700', 'focus:border-brand-gold');
            }

            if (isValid) {
                formMessages.textContent = 'Thank you! Your message has been sent (simulated).';
                formMessages.classList.add('text-green-500');
                contactForm.reset(); // Clear the form
                // Restore default border styles on successful submission
                nameInput.classList.remove('border-red-500');
                nameInput.classList.add('border-neutral-700', 'focus:border-brand-gold');
                emailInput.classList.remove('border-red-500');
                emailInput.classList.add('border-neutral-700', 'focus:border-brand-gold');
                messageInput.classList.remove('border-red-500');
                messageInput.classList.add('border-neutral-700', 'focus:border-brand-gold');

            } else {
                formMessages.textContent = 'Please correct the errors above.';
                formMessages.classList.add('text-red-500');
            }
        });
    }
});
