const dataEl = document.getElementById('data');
const searchElButton = document.getElementById('search');
const searchInputEl = document.getElementById('search-input');
const errorMessageEl = document.getElementById('error-message');
function getWeatherData(city) {
  errorMessageEl.textContent = '';
  dataEl.textContent = '';
  fetch(
    `http://api.weatherapi.com/v1/current.json?key=6b85e57ffb74420b825185110231703&q=${city}&aqi=no`
  )
    .then(response => response.json())
    .then(data => {
      if (data.error) {
        errorMessageEl.textContent = data.error.message;
      } else {
        dataEl.textContent = `Current temperature is ${data.current.temp_c}`;
      }
    });
}
searchElButton.addEventListener('click', () => {
  const city = searchInputEl.value;
  getWeatherData(city);
});
