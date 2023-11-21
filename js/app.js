document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");
    const container = document.querySelector(".container");
    const nav = document.querySelector(".nav");
    const navDropdown = document.querySelector(".nav-dropdown");

    if (document.getElementById("hamburger-menu")) {
        const hamburgerMenu = document.getElementById("hamburger-menu");

        hamburgerMenu.addEventListener("click", function () {
            document.body.classList.toggle("nav-open");
            navDropdown.classList.toggle("show");
        });
    }

    window.addEventListener("scroll", function () {
        if (window.scrollY > 160) {
            header.classList.add("scrolled");
            container.classList.add("scrolled");
            nav.classList.add("scrolled");
            if (navDropdown) {
                navDropdown.classList.add("scrolled");
            }
        } else {
            header.classList.remove("scrolled");
            container.classList.remove("scrolled");
            nav.classList.remove("scrolled");
            if (navDropdown) {
                navDropdown.classList.remove("scrolled");
                document.body.classList.remove("nav-open");
            }
        }
    });

    window.addEventListener("resize", function () {
        if (window.innerWidth > 768) {
            document.body.classList.remove("nav-open");
            if (navDropdown) {
                navDropdown.classList.remove("show");
            }
        }
    });
});
