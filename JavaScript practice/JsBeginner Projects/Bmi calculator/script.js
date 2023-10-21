const form = document.querySelector("form");
console.log(form);
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");
  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `${height} is invalid value `;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `${weight} is invalid value `;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;
    //
  }
});
