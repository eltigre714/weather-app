

async function getWeather() {
  const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=Phoenix&units=imperial&appid=d088141b907de3effa5c6e2b4d9b08bf")
  const data = await response.json()
  console.log(data)
}

getWeather()

/**const form = document.querySelector(".weather-display form");
 
form.addEventListener("search", e => {
  e.preventDefault();
  const inputVal = input.value;
});


const inputVal = input.value;
const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${APIKEY}&units=metric`; 
**/
