function formatDate(timestamp) {
  let date = new Date(timestamp);
  let minute = date.getMinutes();
  if (minute < 10) {
    minute = `0${minute}`;
  }
  let hour = date.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  return `${day} ${hour}:${minute}`;
}
function displayFormat(response) {
  console.log(response);
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let temperatureElement = document.querySelector("#temperature");
  let dateElement = document.querySelector("#date");
  cityElement.innerHTML = response.data.city;
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = response.data.temperature.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  dateElement.innerHTML = formatDate(response.data.time * 1000);
}

let apiKey = "ob09c1d70a7b42abct8580f52909b5a3";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=Lisbon&key=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayFormat);
