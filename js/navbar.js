
const navItems = document.querySelector("#navbar-items");
const burguer = document.querySelector(".navbar-responsive");
const line1 = document.querySelector("#line1");
const line2 = document.querySelector("#line2");
const line3 = document.querySelector("#line3");

let stts = false;

click = () => {
    if(!stts) {
        navItems.style.transform = "translateX(0)";
        stts = true;
        line1.style.transform = "rotate(-45deg) translate(-8px, 8px)";
        line2.style.opacity = "0";
        line3.style.transform = "rotate(45deg) translate(-5px, -7px)";
    }
    else {
        navItems.style.transform = "translateX(100%)";
        stts = false;
        line1.style.transform = "rotate(0deg) translate(0, 0)";
        line2.style.opacity = "100%";
        line3.style.transform = "rotate(0deg) translate(0, 0)";
        
    }
};

burguer.addEventListener('click', click);




