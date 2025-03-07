function successCallback(position) {
  const lat = position.coords.latitude;  // 緯度
  const lon = position.coords.longitude;  // 経度
  const accuracy = position.coords.accuracy;  // 誤差(m)

  document.getElementById('location').innerHTML = `
    <p>Latitude: ${lat}</p>
    <p>Longitude: ${lon}</p>
    <p>Accuracy: ${accuracy} m</p>
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
