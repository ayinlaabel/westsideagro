const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.menu-btn');
const menuNav = document.querySelector('.menu-nav');
const branding = document.querySelector('.branding');
const navItems = document.querySelectorAll('.nav-item');

//Setting init state of the Menu
let showMenu = false; 

//setting an AddEventListener of Click
menuBtn.addEventListener('click', toggleMenu);

//Creating the ToggleMenu Functure
function toggleMenu(){
    if (!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        branding.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));

        //Set menu State
        showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        branding.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));

        //Set menu State
        showMenu = false;
    }
}

window.onscroll = function () { 
    "use strict";
    if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200  ) {
        menu.classList.add("menu-bg");
        menuBtn.classList.add("menu-btn-bg");
    } 
    else {
        menu.classList.remove("menu-bg");
        menuBtn.classList.remove("menu-btn-bg");
    }
};