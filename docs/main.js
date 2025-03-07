function successCallback() {}

function errorCallback() {}

if ('geolocation' in navigator) {
  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
} else {
  document.getElementById('location').textContent = 'Not supported';
}
