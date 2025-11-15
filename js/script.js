    
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

function validateForm(){
    const email = document.getElementById("email").value;
    const error = document.getElementById("error");
    
    if(!email.includes("@")){
        error.innerText = "Please enter a valid email.";
        return false;
    }
    error.innerText = "";
    alert("Form submitted!");
    return true;
}     
