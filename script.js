document.getElementById("animateButton").addEventListener("click", function () {
  const textElement = document.querySelector(".stroke-animation");
  textElement.style.opacity = 1;
  textElement.style.animation = "stroke-fill 2s infinite";
});
