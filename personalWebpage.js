// JavaScript source code

var color = document.querySelector('#color');

// function bgColor(color){
//    document.body.style.backgroundColor = color; 
// }

color.addEventListener('click', function () {

   document.body.classList.toggle("colorred");

});


const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
} 

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}



