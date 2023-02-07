const nav = document.querySelectorAll("div")
const icon = document.querySelector(".header__sidebar-toggle");
const icon1 = document.querySelectorAll("span");
const icon2 = document.querySelectorAll("span");
const icon3 = document.querySelectorAll("span");

icon.addEventListener("click", function(){
nav[5].classList.toggle("menoopen");
icon1[0].classList.toggle("bar1new");
icon2[1].classList.toggle("bar2new");
icon2[2].classList.toggle ("bar3new");
});