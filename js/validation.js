document.addEventListener('DOMContentLoaded', () => {
    // Get references to the form and message element
    const form = document.getElementById('queryForm');
    const successMessage = document.getElementById('successMessage');

    // Attach an event listener for the form submission
    form.addEventListener('submit', function(event) {
        // Prevent the form from submitting normally (which would bypass JS validation)
        event.preventDefault(); 

        // Perform Validation
        if (validateForm()) {
            // Validation passed!
            
            // Show the success message
            successMessage.style.display = 'block';

            // B. Use a small delay for the user to see the success message before redirecting
            setTimeout(() => {
                // Redirect to the success page (QueryRecieved.html)
                window.location.href = 'QueryRecieved.html';
            }, 1500); // 1.5 second delay
        }
    });

    // Validation Function
    function validateForm() {
        // Get field values
        const name = document.getElementById('firstName').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phoneNumber').value.trim();
        const message = document.getElementById('message').value.trim();

        // Simple email regex for basic check
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

        // Reset any previous error states (optional, but good practice)
        let isValid = true;
        
        //  Validate Name (must be > 2 characters) ---
        if (name.length <= 2) {
            alert('First Name must be more than 2 characters.');
            isValid = false;
        }
        
        // Validate Message (must be > 2 characters) ---
        else if (message.length <= 2) {
            alert('Message must be more than 2 characters.');
            isValid = false;
        }

        //  Validate Email ---
        else if (!emailRegex.test(email)) {
            alert('Please enter a valid email address (e.g., example@domain.com).');
            isValid = false;
        }

        //  Validate Phone Number (must be exactly 10 digits) ---
        // Uses a regex to check for exactly 10 digits
        else if (!/^\d{10}$/.test(phone)) {
            alert('Phone Number must be exactly 10 digits.');
            isValid = false;
        }
        
        return isValid;
    }
});