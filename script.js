const comingYear = document.querySelector(".coming-year");
const hrs = prompt("Enter hours (0-23):");
const min = prompt("Enter minutes (0-59):");
const secs = prompt("Enter seconds (0-59):");

function countdown() {
  const today = new Date();
  const hours = hrs - today.getHours();
  const minutes = min - today.getMinutes();
  const seconds = secs - today.getSeconds();
  console.log(hours);
  console.log(minutes);
  console.log(seconds);
  document.querySelector(".hours").innerHTML = hours;
  document.querySelector(".minutes").innerHTML = minutes;
  document.querySelector(".seconds").innerHTML = seconds;
}

setInterval(countdown, 1000);
