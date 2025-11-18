    
    document.addEventListener("DOMContentLoaded", () => {
      const toggle = document.getElementById("darkModeToggle");

      // Load saved preference
      if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
        toggle.checked = true;
      }

      toggle.addEventListener("change", () => {
        if (toggle.checked) {
          document.body.classList.add("dark-mode");
          localStorage.setItem("darkMode", "enabled");
        } else {
          document.body.classList.remove("dark-mode");
          localStorage.setItem("darkMode", "disabled");
        }
      });
    });
    

     function toggleMode(){
       const toggleButton = document.getElementById("theme-toggle");
       const body = document.body;
  
       // Check local storage for theme preference
       if (localStorage.getItem("theme") === "dark-mode") {
         body.classList.add("dark-mode");
         toggleButton.textContent = "Light Mode";
       }
  
       toggleButton.addEventListener("click", () => {
         body.classList.toggle("dark-mode");
  
         // Update button text and save preference
         if (body.classList.contains("dark-mode")) {
           toggleButton.textContent = "Light Mode";
           localStorage.setItem("theme", "dark-mode");
         } else {
           toggleButton.textContent = "Dark Mode";
           localStorage.removeItem("theme");
         }
       });
     }

    
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("darkModeToggle");

  // Load saved preference
  if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
    toggle.checked = true;
  }

  toggle.addEventListener("change", () => {
    if (toggle.checked) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("darkMode", "enabled");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("darkMode", "disabled");
    }
  });
});

/*Menu Toggle*/
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');

  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
    menuToggle.textContent = navMenu.classList.contains('show') ? '✕' : '☰';
  });
});

function validateForm() {
    // Get values for text/email/tel inputs
    const name = document.getElementById('name').value.trim();
    const surname = document.getElementById('surname').value.trim();
    const email = document.getElementById('email').value.trim();
    const phoneNumber = document.getElementById('phoneNumber').value.trim();

    // Get selected radio button values
    const statusSelected = document.querySelector('input[name="status"]:checked');
    const skillSelected = document.querySelector('input[name="skill"]:checked');
    const courseSelected = document.querySelector('input[name="course"]:checked');

    // --- Validation Checks ---

    // Check Personal Details fields (already handled by the 'required' attribute, but good for custom validation messages)
    if (name === "" || surname === "" || email === "" || phoneNumber === "") {
        alert("Please fill in all personal details fields.");
        return false;
    }

    // Basic Email Format Validation (optional, but good practice)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Phone Number Validation (e.g., must be only digits and a minimum length)
    // Assuming the format is a standard 10-digit number like the example '0842287187'
    const phoneRegex = /^\d{10}$/; 
    if (!phoneRegex.test(phoneNumber)) {
        alert("Please enter a valid 10-digit phone number (e.g., 0842287187).");
        return false;
    }

    // Check Radio Groups (already handled by the 'required' attribute on the first radio of each group, 
    // but this ensures one is truly selected)
    if (!statusSelected) {
        alert("Please select your current status.");
        return false;
    }
    if (!skillSelected) {
        alert("Please select your software development skill level.");
        return false;
    }
    if (!courseSelected) {
        alert("Please select the course you are applying for.");
        return false;
    }

    // --- Success Action ---

    // If all checks pass:
    
    //Show the success message
    alert('Application successfully sent!');
    
    //Redirect to the next page
    window.location.href = 'ApplicationRecieved.html';

    // Prevent the default form submission (though the redirect already does this)
    return false;
}