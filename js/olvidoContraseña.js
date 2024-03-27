const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const olvContrasena = document.querySelector("#olvidoContrasena");
const container = document.querySelector(".container");

olvContrasena.addEventListener('click', function (event) {
  event.preventDefault();
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});
