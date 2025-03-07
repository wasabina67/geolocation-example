function successCallback(position) {
  const lat = position.coords.latitude;  // 緯度
  const lon = position.coords.longitude;  // 経度
  const accuracy = position.coords.accuracy;  // 誤差(m)

  document.getElementById('location').innerHTML = `
    <ul>
      <li>Latitude: ${lat}</li>
      <li>Longitude: ${lon}</li>
      <li>Accuracy: ${accuracy} m</li>
    </ul>
  `;
}

function errorCallback(error) {
  let msg = '';
  switch (error.code) {
    case error.PERMISSION_DENIED:
      msg = 'Denied';
      break;
    case error.POSITION_UNAVAILABLE:
      msg = 'Unavailable';
      break;
    case error.TIMEOUT:
      msg = 'Timeout';
      break;
    default:
      msg = 'Error';
      break;
  }

  document.getElementById('location').textContent = msg;
}

if ('geolocation' in navigator) {
  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
} else {
  document.getElementById('location').textContent = 'Not supported';
}
