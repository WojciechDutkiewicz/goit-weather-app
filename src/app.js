const dataEl = document.getElementById('data');
const searchElButton = document.getElementById('search');
const searchInputEl = document.getElementById('search-input');
const errorMessageEl = document.getElementById('error-message');
const tableContentEl = document.getElementById('table-content');
function getWeatherData(city) {
  errorMessageEl.textContent = '';
  dataEl.textContent = '';
  tableContentEl.innerHTML = '';

  fetch(
    `http://api.weatherapi.com/v1/current.json?key=6b85e57ffb74420b825185110231703&q=${city}&aqi=no`
  )
    .then(response => response.json())
    .then(data => {
      if (data.error) {
        errorMessageEl.textContent = data.error.message;
      } else {
        dataEl.textContent = JSON.stringify(data, null, 2);
      }
      let content = ``;

      for (const [key, value] of Object.entries(data.location)) {
        content += `
          <tr>
            <td class="px-6 py-3">${key}</td>
            <td class="px-6 py-3">${value}</td>
          </tr>
        `;
      }
      tableContentEl.innerHTML = content;
      tableDataEl.classList.remove('hidden');
    });
}
searchElButton.addEventListener('click', () => {
  const city = searchInputEl.value;
  getWeatherData(city);
});
