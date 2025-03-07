function successCallback(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const accuracy = position.coords.accuracy;

  document.getElementById('location').innerHTML = `
    <p>Latitude: ${lat}</p>
    <p>Longitude: ${lon}</p>
    <p>Accuracy: ${accuracy}</p>
  `;
}

function errorCallback(error) {
  document.getElementById('location').textContent = 'Error';
}

if ('geolocation' in navigator) {
  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
} else {
  document.getElementById('location').textContent = 'Not supported';
}
