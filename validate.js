function validateForm() {
    const form = document.getElementById('login-form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const usernameError = document.getElementById('username-error');
    const passwordError = document.getElementById('password-error');
  
    // Retrieve the username and password values
    const usernameValue = usernameInput.value.trim();
    const passwordValue = passwordInput.value.trim();
  
    // Validate the username
    const usernameRegex = /^[a-zA-Z0-9][a-zA-Z0-9_]{4,}$/;
    if (!usernameRegex.test(usernameValue)) {
      usernameInput.classList.add('error');
      usernameError.textContent = 'Username should not be less than 5 letters and should start either with alphabet or number.';
      usernameInput.focus();
      return false; // Prevent the form submission
    } else {
      usernameInput.classList.remove('error');
      usernameError.textContent = '';
    }
  
    // Validate the password
    const passwordRegex = /^(?=.*\d)[a-zA-Z0-9]{5,}$/;
    if (!passwordRegex.test(passwordValue)) {
      passwordInput.classList.add('error');
      passwordError.textContent = 'Password should not be less than 5 letters and at least contain one digit.';
      passwordInput.focus();
      return false; // Prevent the form submission
    } else {
      passwordInput.classList.remove('error');
      passwordError.textContent = '';
    }
  
    // If there are no errors, allow the form submission
    return true;
  }
  