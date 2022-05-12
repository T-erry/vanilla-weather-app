function displayTemperature(response) {
  console.log(response);
  let descriptionElement = document.querySelector("#description");
  let h1 = document.querySelector("#city");
  let temp = document.querySelector("#temperature");
  temp.innerHTML = Math.round(response.data.main.temp);
  h1.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
}

let apiKey = "0d6137aeec57493e132a26d1fb505d97";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayTemperature);
