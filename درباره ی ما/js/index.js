const ico =document.querySelector(".iconmenu")
const menu =document.querySelector(".menu")
const li1=document.querySelector(".limenu2")
const li2=document.querySelector(".limenu4")
const menu1=document.querySelector(".ullimenu2")
const menu2=document.querySelector(".ullimenu4")



ico.addEventListener("click", function(){
    menu .classList.toggle("newmenu");
}
);


li1.addEventListener("click", function(){

menu1.classList.toggle("limenu")
}
);
li2.addEventListener("click", function(){

menu2.classList.toggle("limenu1")
}
);