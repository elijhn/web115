 
    // JavaScript code for form validation
	// Prevent form from submitting
    var inputField = document.getElementById('inputField');
    var form = document.getElementById('myForm');
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      // Retrieve the input field value
      var inputValue = inputField.value.trim();
      // Regular expression pattern for alphanumeric input
      var alphanumericPattern = /^[a-zA-Z0-9]+$/;
      // Check if the input value matches the pattern
      if (alphanumericPattern.test(inputValue)) {
        // Valid input: display confirmation and submit the form
        if (confirm('Input is valid.')){
            form.submit();
        }
      } else {
        // Invalid input: display error message
        alert('Error: Input must be alphanumeric');
      }
    });
 