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


let theme = localStorage.getItem("theme");
const osLevelThemePreference = window.matchMedia("(prefers-color-scheme: dark)")

if (theme === null) {
    if (osLevelThemePreference.matches) {
        root.classList.add("dark-mode");
        checkbox.checked = true
        theme = "dark"
    } else {
        root.classList.remove("dark-mode");
        checkbox.checked = false
        theme = "light"
    }
} else if (theme === "dark") {
    root.classList.toggle("dark-mode");
    checkbox.checked = true
} else if (theme === "light") {
    if (root.classList.contains("dark-mode")) {
        root.classList.toggle("dark-mode");
    }
}


modeSwitch.addEventListener("input", () => {
    root.classList.toggle("dark-mode");
    if (!root.classList.contains("dark-mode")) {
        theme = "light";
    }
    else {
        theme = "dark";
    }

    localStorage.setItem("theme", theme);
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

window.addEventListener('resize', () => {
    document.querySelector(':root').style
        .setProperty('--vh', window.innerHeight / 100 + 'px');
})

