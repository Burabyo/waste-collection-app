document.getElementById('get-location').addEventListener('click', function() {
  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          alert(`Your location: Latitude: ${latitude}, Longitude: ${longitude}`);
      });
  } else {
      alert("Geolocation is not supported by this browser.");
  }
});

document.getElementById('submit-address').addEventListener('click', function() {
  const address = document.getElementById('address').value;
  alert(`Your address: ${address}`);
});

document.getElementById('notify-button').addEventListener('click', function() {
  alert("Waste collection request sent!");
});
