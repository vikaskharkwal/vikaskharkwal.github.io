const root = document.querySelector(":root");
const toggle = document.querySelector(".menu-toggle");
const hamburger = document.querySelector(".hamburger");
const hamburgerTop = document.querySelector(".ham-t");
const hamburgerMiddle = document.querySelector(".ham-m");
const hamburgerBottom = document.querySelector(".ham-b");
const landing = document.querySelector(".landing");
const menu = document.querySelector(".menu");
const header = document.querySelector("header");
const modeSwitch = document.querySelector(".mode-check");
const checkbox = document.querySelector(".mode-check");


landing.addEventListener("click", () => {
    if (landing.classList.contains("move")) {
        landing.classList.remove("move");
        toggle.classList.remove("close-menu")
        setTimeout(() => hamburgerBottom.classList.remove("hidden"), 1000)
    }
})

toggle.addEventListener('click', (evt) => {
    evt.stopPropagation();
    menuEvent()
});

toggle.addEventListener("keypress", evt => {
    let keypress = evt.code;
    if (keypress === "Enter") {
        menuEvent();
    }
})


function menuEvent() {
    landing.classList.toggle("move");
    if (toggle.classList.contains("close-menu")) {
        toggle.classList.toggle("close-menu");
    } else { setTimeout(() => toggle.classList.toggle("close-menu"), 600); }

    if (hamburgerBottom.classList.contains("hidden")) {
        setTimeout(() => hamburgerBottom.classList.remove("hidden"), 1000)
    } else {
        setTimeout(() => hamburgerBottom.classList.add("hidden"), 750)
    }
}

root.style.setProperty('--vh', window.innerHeight / 100 + 'px');

window.addEventListener('resize', () => {
    root.style.setProperty('--vh', window.innerHeight / 100 + 'px');
})


var flkty = new Flickity(".main-carousel", {
    // options
    cellAlign: 'left',
    contain: true,
    autoPlay: true,
    autoPlay: 10000,
    wrapAround: true,
    imagesLoaded: true,
});


