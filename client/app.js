// Get weather information from API
function getWeather(city) {
fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=d088141b907de3effa5c6e2b4d9b08bf").then(function(response) {
  return response.json()
}).then((data) => this.displayWeather(data));
}


// Get weather data
function displayWeather(data) {
  const { name } = data;
  const { icon, description } = data.weather[0];
  const {temp, feels_like, humidity } = data.main;
  console.log(name, icon, temp, feels_like, description, humidity);
  document.querySelector(".current-city").innerText = name;
  document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
  document.querySelector(".temp").innerText = temp + " °F";
  document.querySelector(".feels-like").innerText = "FEELS LIKE " + feels_like + " °F";
  document.querySelector(".description").innerText = description;
  document.querySelector(".humidity").innerText = "HUMIDITY " + humidity + "%";

}

function searchWeather() {
  this.getWeather(document.querySelector(".search-field").value);
}

document.querySelector(".search").addEventListener("click", function () {
  searchWeather();
});

