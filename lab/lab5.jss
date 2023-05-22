function validateForm() {
        // Get the values from the form
        const name = document.getElementById("name").value;
        const favNum = document.getElementById("favNum").value;
        const hateNum = document.getElementById("hateNum").value;

        // Validate the name
        const nameRegex = /^[a-zA-Z]{5,}$/;
        if (!nameRegex.test(name)) {
          alert("Please enter a valid name with only alphabet characters and at least 5 characters long.");
          return false;
        }

        // Validate the favorite and least favorite numbers
        const numRegex = /^[0-9]*$/;
        if (!numRegex.test(favNum) || !numRegex.test(hateNum)) {
          alert("Please enter a valid number for favorite and least favorite numbers.");
          return false;
        }

        // Calculate and print the sum of the favorite and least favorite numbers
        const sum = parseInt(favNum) + parseInt(hateNum);
        alert(`The sum of your favorite and least favorite numbers is ${sum}.`);

        // Prevent the form from submitting
        return false;
      }