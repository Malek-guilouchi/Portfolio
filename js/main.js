document.addEventListener("DOMContentLoaded", function () {
    let button = document.querySelector("button");

    button.addEventListener("click", function () {
        document.body.style.background = getRandomColor();
    });

    function getRandomColor() {
        let letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
let menuToggle = document.querySelector(".menu-toggle");
let navMenu = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", function () {
    if (navMenu.style.display === "block") {
        navMenu.style.display = "none";
    } else {
        navMenu.style.display = "block";
    }
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        let target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({
            behavior: "smooth"
        });
    });
});
let text = "Salut, je suis [Ton Nom]";  
let i = 0;  
function typeWriter() {  
    if (i < text.length) {  
        document.querySelector(".hero h2").innerHTML += text.charAt(i);  
        i++;  
        setTimeout(typeWriter, 100);  
    }  
}  
window.onload = typeWriter;  
let toggleButton = document.getElementById("dark-mode-toggle");
toggleButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});


let elements = document.querySelectorAll(".hidden");

function checkScroll() {
    elements.forEach((el) => {
        let rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.classList.add("show");
        }
    });
}

window.addEventListener("scroll", checkScroll);
checkScroll();
