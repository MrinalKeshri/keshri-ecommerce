document.addEventListener("DOMContentLoaded", () => {

    if (window.location.pathname.includes("signup.html")) {

      const signupForm = document.querySelector("#signupForm");
  
      if (signupForm) {
        signupForm.addEventListener("submit", (event) => {
  
          const nameField = document.getElementById("name");
          const emailField = document.getElementById("email");
          const passwordField = document.getElementById("password");
  
          if (!nameField.value || !emailField.value || !passwordField.value) {
            alert("Please fill out all fields before submitting!");
            return;
          }
  
          if (passwordField.value.length < 6) {
            alert("Password must be at least 6 characters long!");
            return;
          }
  
          alert("Signup successful! 🎉");
  
          
        
        });
  
        
        const passwordInput = document.getElementById("password");
        passwordInput.addEventListener("focus", () => {
          passwordInput.setAttribute("type", "text");
        });
        passwordInput.addEventListener("blur", () => {
          passwordInput.setAttribute("type", "password");
        });
      }
    }
  });
  