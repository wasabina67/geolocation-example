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
  let msg = '';
  switch (error.code) {
    case error.PERMISSION_DENIED:
      msg = '';
      break;
    case error.POSITION_UNAVAILABLE:
      msg = '';
      break;
    case error.TIMEOUT:
      msg = '';
      break;
    default:
      msg = '';
      break;
  }

  document.getElementById('location').textContent = msg;
}

if ('geolocation' in navigator) {
  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
} else {
  document.getElementById('location').textContent = 'Not supported';
}
