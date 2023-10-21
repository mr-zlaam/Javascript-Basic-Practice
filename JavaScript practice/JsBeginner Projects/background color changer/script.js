const buttons = document.querySelectorAll(".button");

const body = document.querySelector("body");

console.log(para);
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.id === "gray") {
      document.body.style.background = e.target.id;

      const el = document.getElementById("gray");
      el.style.borderRadius = "20px";
      el.style.borderColor = "white";
      const p = document.getElementById("para");
      p.style.color = "white";
      document.body.style.background = e.target.id;
    } else if (e.target.id === "blue") {
      const el = document.getElementById("blue");
      el.style.borderRadius = "20px";
      el.style.borderColor = "white";
      const p = document.getElementById("para");
      p.style.color = "yellow";
      document.body.style.background = e.target.id;
    } else if (e.target.id === "black") {
      const el = document.getElementById("black");
      el.style.borderRadius = "20px";
      el.style.borderColor = "white";
      const p = document.getElementById("para");
      p.style.color = "white";
      document.body.style.background = e.target.id;
    } else if (e.target.id === "yellow") {
      const el = document.getElementById("yellow");
      el.style.borderRadius = "20px";
      el.style.borderColor = "white";
      const p = document.getElementById("para");
      p.style.color = "blue";
      document.body.style.background = e.target.id;
    }
  });
});
