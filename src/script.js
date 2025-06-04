const latitude = 40.71; // New York City
const longitude = -74.01;

const tempEl = document.getElementById('temperature-data');
const condEl = document.getElementById('condition-data');

const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;

fetch(url)
  .then(res => res.json())
  .then(data => {
    const weather = data.current_weather;
    if (tempEl) {
      tempEl.innerHTML = `<p>Temperature: ${weather.temperature}°C</p>`;
    }
    if (condEl) {
      const conditions = weather.weathercode;
      condEl.innerHTML = `<p>Weather Code: ${conditions}</p>`;
    }
  })
  .catch(err => {
    if (tempEl) tempEl.innerHTML = "Failed to load temperature.";
    if (condEl) condEl.innerHTML = "Failed to load conditions.";
  });
