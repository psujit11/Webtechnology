function validateForm() {
    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();
    let usernameError = document.getElementById("usernameError");
    let passwordError = document.getElementById("passwordError");
    let isValid = true;
  
    // Validate username
    if (username === "") {
      usernameError.innerHTML = "Username is required";
      isValid = false;
      
      document.getElementById("username").focus();
    } else if (!/^[a-zA-Z0-9][a-zA-Z0-9-_\.]{4,}$/.test(username)) {
      usernameError.innerHTML = "Username should start with alphabet or number and be at least 5 characters long";
      isValid = false;
      document.getElementById("username").focus();
    } else {
      usernameError.innerHTML = "";
    }
  
    // Validate password
    if (password === "") {
      passwordError.innerHTML = "Password is required";
      isValid = false;
      
      document.getElementById("password").focus();
    } else if (!/(?=.*\d)(?=.*[a-zA-Z]).{5,}/.test(password)) {
    
      passwordError.innerHTML = "Password should be at least 5 characters long and contain at least one digit";
      isValid = false;
      
      document.getElementById("password").focus();
      
    } else {
      passwordError.innerHTML = "";
    }
  
    // Submit form if valid
    if (isValid) {
      return true;
    } else {
      return false;
    }
  }
  