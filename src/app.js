const dataEl = document.getElementById('data');
const searchElButton = document.getElementById('search');
const searchInputEl = document.getElementById('search-input');
function getWeatherData(city) {
  fetch(
    `http://api.weatherapi.com/v1/current.json?key=6b85e57ffb74420b825185110231703&q=${city}&aqi=no`
  )
    .then(response => response.json())
    .then(data => {
      dataEl.textContent = JSON.stringify(data, null, 2);
    });
}
searchElButton.addEventListener('click', () => {
  const city = searchInputEl.value;
  getWeatherData(city);
});
