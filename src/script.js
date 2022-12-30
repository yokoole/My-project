// Search city

function searchCity(event) {
    event.preventDefault();
    let cityInput = document.querySelector("#city-search-input");
    let cityName = document.querySelector("#city-name");
    cityName.innerHTML = `${cityInput.value}`;  
};

let citySearchForm = document.querySelector("#city-search-form")
citySearchForm.addEventListener("submit", searchCity)

// Current day, time

let today = new Date();
let days = [`Sun`, `Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat`];
let day = days[today.getDay()];
let hour = today.getHours();
let minutes = today.getMinutes();
if (hour < 10) {
    hour = `0${hour}`;
}
if (minutes < 10) {
    minutes = `0${minutes}`;
} 
let currentDayTime = document.querySelector("#current-day-time");
currentDayTime.innerHTML = `${day}, ${hour}:${minutes}`;

// Display weather

let form = document.querySelector("#city-search-form");
form.addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();
  let city = document.querySelector("#city-search-input").value;
  searchity(city);
}

function searchity(city) {
  let apiKey = "5272a7a95dcdd049cd7ce16778c62a82";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(displayWeather);
}

function displayWeather(response) {
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#windspeed");
  humidityElement.innerHTML = response.data.main.humidity + `%`;
  windElement.innerHTML = Math.round(response.data.wind.speed) + ` km/h`;
  document.querySelector("#city-name").innerHTML = response.data.name;
  document.querySelector("#today-temperature").innerHTML = Math.round(
    response.data.main.temp
  );
}
//let precipitationElement = document.querySelector("#precipitation");
//precipitationElement.innerHTML = response.data.main./// + `%`;