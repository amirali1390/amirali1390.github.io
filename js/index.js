const nav = document.querySelectorAll("div")
const icon = document.querySelector(".header__sidebar-toggle");
const icon1 = document.querySelectorAll("span");
const icon2 = document.querySelectorAll("span");
const icon3 = document.querySelectorAll("span");
const meno  = document.querySelector(".menoglobe")
const icon4 = document.querySelectorAll("i")
const serch =document.querySelector(".serch")
const body =document.querySelector("body")

icon.addEventListener("click", function(){
nav[6].classList.toggle("menoopen");
icon1[0].classList.toggle("bar1new");
icon2[1].classList.toggle("bar2new");
icon2[2].classList.toggle ("bar3new");
});
nav[17].addEventListener("click" ,function(){
    meno.classList.add("menoglobenew")
       
        nav[17].style.display ="none";
        nav[18].style.display ="block";
   

}) ;
nav[18].addEventListener("click" ,function(){
    meno.classList.remove("menoglobenew")
       
    nav[18].style.display ="none";
    nav[17].style.display ="block";
   

}) ;
nav[15].addEventListener("click" ,function(){
serch.classList.add("newsearch")
        nav[15].style.display ="none";
        nav[11].style.display ="block";
      
});
nav[11].addEventListener("click" ,function(){
    serch.classList.remove("newsearch")
            nav[11].style.display ="none";
            nav[15].style.display ="block";
   
    }); 
