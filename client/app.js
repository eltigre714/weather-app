
console.log("TEsting")

const searchLocation = document.querySelector(".weather-display container");
 
searchLocation.addEventListener("search", e => {
  e.preventDefault();
  const inputVal = input.value;
});


const inputVal = input.value;
const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${APIKEY}&units=metric`;

