function signup() {
  location.href = "Signup.html";
}
function login() {
  location.href = "Login.html";
}
const dropdownBtn = document.querySelector(".dropdown-btn");
const dropdownMenu = document.querySelector(".dropdown-menu");
const dropdown = document.querySelector(".dropdown");

dropdownBtn.addEventListener("click", () => {
  dropdown.classList.toggle("active");
});