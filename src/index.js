function frequent(number) {
  var count = 0;
  var sortedNumber = number.sort();
  var start = number[0],
    item;
  for (var i = 0; i < sortedNumber.length; i++) {
    if (start === sortedNumber[i] || sortedNumber[i] === sortedNumber[i + 1]) {
      item = sortedNumber[i];
    }
  }
  return item;
}

function showTime(datetime) {
  let now = new Date(datetime);
  let minute = now.getMinutes();
  if (minute < 10) {
    minute = `0${minute}`;
  }
  let hour = now.getHours();
  let amPm = "AM";
  if (hour > 12) {
    amPm = "PM";
  }
  convertHour();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[now.getDay()];
  let date = now.getDate();
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let month = months[now.getMonth()];
  let year = now.getFullYear();

  document.querySelector("#clock").innerHTML = `${hour}:${minute}`;
  document.querySelector("#day").innerHTML = day;
  document.querySelector("#date").innerHTML = `${date} ${month} ${year}`;
  document.querySelector("#amPm").innerHTML = amPm;

  function convertHour() {
    if (hour <= 9) {
      hour = `0${hour}`;
    } else if (hour > 9 && hour <= 12) {
      return hour;
    } else if (hour > 12 && hour <= 21) {
      hour = hour - 12;
      hour = `0${hour}`;
    } else {
      hour = hour - 12;
    }
  }
}

let celsius = null;
let celsiusFeelsLike = null;
let fahrenheit = null;
let fahrenheitFeelsLike = null;
let unit = null;


function showTemperature(response) {
  let city = response.data.name;
  let country = response.data.sys.country;
  let temp = response.data.main.temp;
  let description = response.data.weather[0].description;
  let cloudiness = Math.round(response.data.clouds.all);
  let wind = Math.round(response.data.wind.speed);
  let humidity = Math.round(response.data.main.humidity);
  let feelsLike = response.data.main.feels_like;
  let icon = document.querySelector("#icon");
  showTime(new Date(response.data.dt * 1000));

  celsius = temp;
  celsiusFeelsLike = feelsLike;
  fahrenheit = temp;
  fahrenheitFeelsLike = feelsLike;


