const rect = document.querySelector(".center");
rect.addEventListener("mousemove", (details) => {
  let rectangle = rect.getBoundingClientRect();
  let insideVectRel = details.clientX - rectangle.left;
  let percentage = (insideVectRel / rectangle.width) * 100;
  rect.style.backgroundPosition = `${percentage}% center`; // Update background position
});
