const button = document.querySelector(".toggle-button");

const menu = document.querySelector(".menu");

button.addEventListener("click", () => {
  menu.classList.toggle("responsive");
});
