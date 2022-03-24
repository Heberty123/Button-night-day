var button = document.querySelector(".button-night");
var box_night = document.querySelector(".box-night");

button.addEventListener("click", e => {
    console.log("Voce clicou na classe: " + e.target);
    button.classList.toggle("night-click");
    box_night.classList.toggle("box-night-back");
});