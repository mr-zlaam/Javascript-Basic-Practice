const clock = document.querySelector("#clock");
const tareekh = document.querySelector("#date");
setInterval(() => {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
  let mydate = new Date();
  tareekh.innerHTML = date.toLocaleDateString();
}, 1000);
