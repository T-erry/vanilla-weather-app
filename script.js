function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${hours}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursady",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  return `${day} ${hours}:${minutes}`;
}
function displayTemperature(response) {
  console.log(response);
  let dateElement = document.querySelector("#date");
  let windElement = document.querySelector("#wind");
  let humidityElement = document.querySelector("#humidity");
  let myDescription = document.querySelector("#description");
  let h1 = document.querySelector("#city");
  let temp = document.querySelector("#temperature");

  temp.innerHTML = Math.round(response.data.main.temp);
  h1.innerHTML = response.data.name;
  myDescription.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = Math.round(response.data.main.humidity);
  windElement.innerHTML = Math.round(response.data.wind.speed);
  dateElement.innerHTML = formatDate(response.data.dt * 1000);
}
let apiKey = "0d6137aeec57493e132a26d1fb505d97";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Berlin&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayTemperature);
