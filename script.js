
const apiKey = process.env.OPENWEATHER_API_KEY
const citySearch = document.getElementById('city-search');
const cityName = document.getElementById('city-name');
const temp = document.getElementById('temp');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('wind-speed');
const forecastCards = document.getElementById('forecast-cards');
const mapContainer = document.getElementById('map');
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

// **Step 1: Geolocation Support**
// Check if Geolocation is supported by the browser
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
} else {
    alert("Geolocation is not supported by this browser.");
}

// Success callback when the location is obtained
function successCallback(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    
    // Call fetchWeather by coordinates
    fetchWeatherByCoords(lat, lon);
    
    // Update the map with the user's current location
    updateMap(lat, lon);
}

// Error callback if there's an issue getting the location
function errorCallback(error) {
    console.error("Error getting geolocation: ", error);
    alert("Unable to retrieve your location.");
}

// **Step 2: Fetch Weather Data by Coordinates (Geolocation)**
async function fetchWeatherByCoords(lat, lon) {
    const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`);
    const weatherData = await weatherResponse.json();

    // Update weather info
    cityName.textContent = weatherData.name;
    temp.textContent = `Temperature: ${weatherData.main.temp} °C`;
    humidity.textContent = `Humidity: ${weatherData.main.humidity}%`;
    windSpeed.textContent = `Wind Speed: ${weatherData.wind.speed} m/s`;

    // Fetch 5-day forecast by coordinates
    fetchForecastByCoords(lat, lon);
}

// Fetch 5-day Forecast by Coordinates
async function fetchForecastByCoords(lat, lon) {
    const forecastResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`);
    const forecastData = await forecastResponse.json();

    forecastCards.innerHTML = '';
    forecastData.list.forEach((forecast, index) => {
        if (index % 8 === 0) {
            const forecastCard = document.createElement('div');
            forecastCard.classList.add('forecast-card');
            forecastCard.innerHTML = `
                <h4>${new Date(forecast.dt_txt).toDateString()}</h4>
                <p>Temp: ${forecast.main.temp} °C</p>
                <p>Humidity: ${forecast.main.humidity}%</p>
            `;
            forecastCards.appendChild(forecastCard);
        }
    });
}

// **Step 3: Fetch Weather Data by City Name (Existing Search Feature)**
async function fetchWeather(city) {
    const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    const weatherData = await weatherResponse.json();

    // Update weather info
    cityName.textContent = weatherData.name;
    temp.textContent = `Temperature: ${weatherData.main.temp} °C`;
    humidity.textContent = `Humidity: ${weatherData.main.humidity}%`;
    windSpeed.textContent = `Wind Speed: ${weatherData.wind.speed} m/s`;

    // Fetch 5-day forecast
    fetchForecast(city);
    updateMap(weatherData.coord.lat, weatherData.coord.lon);
}

// Fetch 5-day Forecast by City Name (Existing Search Feature)
async function fetchForecast(city) {
    const forecastResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`);
    const forecastData = await forecastResponse.json();

    forecastCards.innerHTML = '';
    forecastData.list.forEach((forecast, index) => {
        if (index % 8 === 0) {
            const forecastCard = document.createElement('div');
            forecastCard.classList.add('forecast-card');
            forecastCard.innerHTML = `
                <h4>${new Date(forecast.dt_txt).toDateString()}</h4>
                <p>Temp: ${forecast.main.temp} °C</p>
                <p>Humidity: ${forecast.main.humidity}%</p>
            `;
            forecastCards.appendChild(forecastCard);
        }
    });
}

// **Update Map with Coordinates**
function updateMap(lat, lon) {
    mapContainer.innerHTML = `<iframe 
        src="https://www.google.com/maps/embed/v1/view?key=AIzaSyAHb_tY9kUaRTX3bTKi3TRuOUod31HUBUk&center=${lat},${lon}&zoom=10" 
        width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`;
}

// **City Search Event**
citySearch.addEventListener('change', (e) => {
    const city = e.target.value;
    fetchWeather(city);
});

// **Dark Mode Toggle**
darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});
=======
const apiKey = '3f799ad16600d7fd257ef40e460c6b83';
const citySearch = document.getElementById('city-search');
const cityName = document.getElementById('city-name');
const temp = document.getElementById('temp');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('wind-speed');
const forecastCards = document.getElementById('forecast-cards');
const mapContainer = document.getElementById('map');
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

// **Step 1: Geolocation Support**
// Check if Geolocation is supported by the browser
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
} else {
    alert("Geolocation is not supported by this browser.");
}

// Success callback when the location is obtained
function successCallback(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    
    // Call fetchWeather by coordinates
    fetchWeatherByCoords(lat, lon);
    
    // Update the map with the user's current location
    updateMap(lat, lon);
}

// Error callback if there's an issue getting the location
function errorCallback(error) {
    console.error("Error getting geolocation: ", error);
    alert("Unable to retrieve your location.");
}

// **Step 2: Fetch Weather Data by Coordinates (Geolocation)**
async function fetchWeatherByCoords(lat, lon) {
    const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`);
    const weatherData = await weatherResponse.json();

    // Update weather info
    cityName.textContent = weatherData.name;
    temp.textContent = `Temperature: ${weatherData.main.temp} °C`;
    humidity.textContent = `Humidity: ${weatherData.main.humidity}%`;
    windSpeed.textContent = `Wind Speed: ${weatherData.wind.speed} m/s`;

    // Fetch 5-day forecast by coordinates
    fetchForecastByCoords(lat, lon);
}

// Fetch 5-day Forecast by Coordinates
async function fetchForecastByCoords(lat, lon) {
    const forecastResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`);
    const forecastData = await forecastResponse.json();

    forecastCards.innerHTML = '';
    forecastData.list.forEach((forecast, index) => {
        if (index % 8 === 0) {
            const forecastCard = document.createElement('div');
            forecastCard.classList.add('forecast-card');
            forecastCard.innerHTML = `
                <h4>${new Date(forecast.dt_txt).toDateString()}</h4>
                <p>Temp: ${forecast.main.temp} °C</p>
                <p>Humidity: ${forecast.main.humidity}%</p>
            `;
            forecastCards.appendChild(forecastCard);
        }
    });
}

// **Step 3: Fetch Weather Data by City Name (Existing Search Feature)**
async function fetchWeather(city) {
    const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    const weatherData = await weatherResponse.json();

    // Update weather info
    cityName.textContent = weatherData.name;
    temp.textContent = `Temperature: ${weatherData.main.temp} °C`;
    humidity.textContent = `Humidity: ${weatherData.main.humidity}%`;
    windSpeed.textContent = `Wind Speed: ${weatherData.wind.speed} m/s`;

    // Fetch 5-day forecast
    fetchForecast(city);
    updateMap(weatherData.coord.lat, weatherData.coord.lon);
}

// Fetch 5-day Forecast by City Name (Existing Search Feature)
async function fetchForecast(city) {
    const forecastResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`);
    const forecastData = await forecastResponse.json();

    forecastCards.innerHTML = '';
    forecastData.list.forEach((forecast, index) => {
        if (index % 8 === 0) {
            const forecastCard = document.createElement('div');
            forecastCard.classList.add('forecast-card');
            forecastCard.innerHTML = `
                <h4>${new Date(forecast.dt_txt).toDateString()}</h4>
                <p>Temp: ${forecast.main.temp} °C</p>
                <p>Humidity: ${forecast.main.humidity}%</p>
            `;
            forecastCards.appendChild(forecastCard);
        }
    });
}

// **Update Map with Coordinates**
function updateMap(lat, lon) {
    mapContainer.innerHTML = `<iframe 
        src="https://www.google.com/maps/embed/v1/view?key=AIzaSyAHb_tY9kUaRTX3bTKi3TRuOUod31HUBUk&center=${lat},${lon}&zoom=10" 
        width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`;
}

// **City Search Event**
citySearch.addEventListener('change', (e) => {
    const city = e.target.value;
    fetchWeather(city);
});

// **Dark Mode Toggle**
darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});
>>>>>>> 2a0143f52b446043696f421a23e3e58682ab88ef
