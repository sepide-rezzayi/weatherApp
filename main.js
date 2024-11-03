// Define the API key and base URL for the weather API

const apiKey = "3903fa1f97d853405044bc4231b9dac5"; // Replace with your actual API key from OpenWeatherMap
const baseUrl = "https://api.openweathermap.org/data/2.5/weather";

// Get the necessary elements from the HTML
const cityInput = document.getElementById("city");
const getWeatherBtn = document.getElementById("getWeatherBtn");
const cityNameEl = document.getElementById("cityName");
const temperatureEl = document.getElementById("temperature");
const descriptionEl = document.getElementById("description");
const humidityEl = document.getElementById("humidity");
const windEl = document.getElementById("wind");
const weatherInfoEl = document.querySelector(".weather-info");

// Function to fetch weather data from the API
async function getWeather(city) {
  const response = await fetch(
    `${baseUrl}?q=${city}&appid=${apiKey}&units=metric`
  );
  const data = await response.json();

  if (data.cod === 200) {
    displayWeather(data);
  } else {
    alert("City not found");
  }
}

// Function to display weather data in the UI
function displayWeather(data) {
  cityNameEl.textContent = data.name;
  temperatureEl.textContent = `Temperature: ${data.main.temp} °C`;
  descriptionEl.textContent = `Description: ${data.weather[0].description}`;
  humidityEl.textContent = `Humidity: ${data.main.humidity}%`;
  windEl.textContent = `Wind speed: ${data.wind.speed} m/s`;

  weatherInfoEl.style.display = "block";
}

// Event listener for the Get Weather button
getWeatherBtn.addEventListener("click", () => {
  const city = cityInput.value;
  if (city) {
    getWeather(city);
  } else {
    alert("Please enter a city name");
  }
});
