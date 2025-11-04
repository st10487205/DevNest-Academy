function toggleMenu() {
      const navLinks = document.getElementById('navLinks');
      navLinks.classList.toggle('active');
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