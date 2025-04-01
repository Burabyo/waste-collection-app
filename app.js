document.getElementById('notify-button').addEventListener('click', function() {
  // Get the location entered manually or use geolocation for location
  const location = document.getElementById('address').value || "User's current location";
  const message = "Waste bin is full, please collect it."; // You can customize the message as needed

  // Send POST request to backend
  fetch('http://localhost:3000/notify', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json' // Setting the content type to JSON
      },
      body: JSON.stringify({ location, message }) // Sending location and message as JSON data
  })
  .then(response => response.json()) // Parse the JSON response
  .then(data => {
      if (data.success) {
          alert('Waste collection notification sent!'); // Success message
      } else {
          alert('Error: ' + data.error); // Error message if there's an issue
      }
  })
  .catch(error => {
      alert('Error: ' + error.message); // Handle any fetch errors
  });
});

