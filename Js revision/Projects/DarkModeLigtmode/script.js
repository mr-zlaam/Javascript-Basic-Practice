const sun = document.querySelector("#sun");
const soraj = document.querySelector(".sun");
const moon = document.querySelector("#moon");
const chand = document.querySelector(".moon");
const txtsun = document.querySelector(".txtlight");
const txtmoon = document.querySelector(".txtdark");

sun.style.display = "none";
txtsun.style.display = "none";
moon.addEventListener("click", () => {
  const sunn = () => {
    if (moon) {
      txtsun.style.display = "block";
      txtmoon.style.display = "none";
      moon.style.display = "none";
      sun.style.display = "block";
      chand.style.backgroundColor = "transparent";
      document.body.style.backgroundColor = "black";
    }
  };
  sunn();
});

sun.addEventListener("click", () => {
  const moonn = () => {
    if (sun) {
      txtmoon.style.display = "block";

      txtsun.style.display = "none";
      sun.style.display = "none";
      moon.style.display = "block";
      soraj.style.backgroundColor = "white";
      document.body.style.backgroundColor = "white";
    }
  };
  moonn();
});
