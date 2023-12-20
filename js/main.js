let icon = document.querySelector("#icon");
let login = document.querySelector(".login");
let btn = document.querySelector("#btn1");

icon.addEventListener('click', () => {
  login.classList.add("open");
});

btn.addEventListener('click', () => {
  login.classList.remove("open");
})