var nameInput = document.getElementById('name');
var errorMessage = document.getElementById('error');
var ageInput = document.getElementById('age');
var errorMessage = document.getElementById('error1');
var form = document.getElementById('nameForm');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    var nameValue = nameInput.value;

    if (!/^[a-zA-Z]+$/.test(nameValue)) {
        // Show error if input is not only letters
        errorMessage.style.display = 'inline';
    } else {
        // Hide error and show success
        errorMessage.style.display = 'none';
  
    }
});
form.addEventListener('submit', function(event) {
    event.preventDefault();
    var nameValue = ageInput.value;

    if (!/^[0-9]+$/.test(nameValue)) {
        // Show error if input is not only letters
        errorMessage.style.display = 'inline';
    } else {
        // Hide error and show success
        errorMessage.style.display = 'none';
        
    }
});
