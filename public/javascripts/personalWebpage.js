// JavaScript source code

var color = document.querySelector('#color');

function random(number) {
  return Math.floor(Math.random() * number);
}
function randomColor() {
  return "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
}

color.addEventListener('click', function () {
    //Changes background color of body on all pages
    document.body.style.backgroundColor = randomColor();

});


const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const body = document.querySelector("body");

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


