const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  const minutes = now.getMinutes();
  const minutesDegrees = (minutes / 60) * 360 + 90;
  const hours = now.getHours();
  const hoursDegrees = (hours / 12) * 360 + 90;

  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
  minHand.style.transform = `rotate(${minutesDegrees}deg)`;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  console.log(seconds);
  console.log(minutes);
  console.log(hours);
}

setInterval(setDate, 1000);
