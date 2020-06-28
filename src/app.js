function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
}

let apiKey = "f4ddb9f0ce33aafdd96e40000ea348d3";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=San Antonio&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
