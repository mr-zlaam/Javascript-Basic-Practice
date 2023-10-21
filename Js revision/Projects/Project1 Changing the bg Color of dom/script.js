const orange = document.querySelector(".orange");
orange.addEventListener("click", function () {
  console.log("click");
  document.body.style.backgroundColor = "orange";
});
const black = document.querySelector(".black");
black.addEventListener("click", function () {
  console.log("click");
  document.body.style.backgroundColor = "black";
});
const red = document.querySelector(".red");
red.addEventListener("click", function () {
  console.log("click");
  document.body.style.backgroundColor = "red";
});
const green = document.querySelector(".green");
green.addEventListener("click", function () {
  console.log("click");
  document.body.style.backgroundColor = "green";
});
const blue = document.querySelector(".blue");
blue.addEventListener("click", function () {
  console.log("click");
  document.body.style.backgroundColor = "blue";
});
const pink = document.querySelector(".pink");
pink.addEventListener("click", function () {
  console.log("click");
  document.body.style.backgroundColor = "pink";
});
const DefaultColor = () => {
  setTimeout(() => {
    document.body.style.backgroundColor = "gray";
  }, 3000);
};
DefaultColor();
