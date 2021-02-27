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
