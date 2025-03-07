function successCallback(position) {
  document.getElementById('location').innerHTML = 'Supported';
}

function errorCallback(error) {
  document.getElementById('location').textContent = 'Error';
}

if ('geolocation' in navigator) {
  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
} else {
  document.getElementById('location').textContent = 'Not supported';
}
