// script.js
document.getElementById('idApplicationForm').addEventListener('submit', function(e) {
  e.preventDefault(); // prevent page reload

  const fullName = document.getElementById('fullName').value.trim();
  const idNumber = document.getElementById('idNumber').value.trim();

  if (idNumber.length !== 13 || isNaN(idNumber)) {
    alert('ID Number must be exactly 13 digits.');
    return;
  }

  document.getElementById('successMessage').innerText = 
    `Thank you, ${fullName}. Your application has been submitted.`;

  // Clear form
  this.reset();
});

