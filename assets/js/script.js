let burger = document.querySelector(".drawer-hamburger");
let menu = document.querySelector(".drawer-nav");
let menuItem = document.getElementsByClassName("drawer-menu--item");
let isToggled = false;
burger.style.left = "60px"

function toggle(){
    // Look into replacing this with something more supported.
    if(isToggled){
        burger.style.left = "60px"
        toggleClasses();
        isToggled = !isToggled
        closeNav();
        return;
    }
    burger.style.left = "150px"
    toggleClasses();
    isToggled = !isToggled
    openNav();
    return;
}

function openNav() {
    return menu.style.width = "140px";
}

function closeNav() {
    return menu.style.width = "50px";
}

function toggleClasses(){
    burger.classList.toggle('is-active');

    for (var i = 0; i < menuItem.length; i++) {
        menuItem[i].classList.toggle('is-transition');
    }
}