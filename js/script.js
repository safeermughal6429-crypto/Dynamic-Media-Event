/*====================================
DYNAMIC MEDIA EVENT
Premium JavaScript
====================================*/

/*==========================
Loader
==========================*/

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    if (loader) {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 500);

    }

});

/*==========================
Sticky Header
==========================*/

const header = document.querySelector(".header");

window.addEventListener("scroll", function () {

    if (window.scrollY > 80) {

        header.classList.add("sticky");

    } else {

        header.classList.remove("sticky");

    }

});

/*==========================
Mobile Menu
==========================*/

const menuBtn = document.querySelector(".menu-btn");

const navbar = document.querySelector(".navbar");

if (menuBtn) {

    menuBtn.addEventListener("click", () => {

        navbar.classList.toggle("active");

        menuBtn.classList.toggle("active");

    });

}
/*==========================
Back To Top Button
==========================*/

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (topBtn) {

        if (window.pageYOffset > 300) {

            topBtn.style.display = "block";

        } else {

            topBtn.style.display = "none";

        }

    }

});

if (topBtn) {

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

/*==========================
Counter Animation
==========================*/

const counters = document.querySelectorAll(".counter-box h2");

const speed = 80;

counters.forEach(counter => {

    const updateCounter = () => {

        const target = +counter.innerText.replace("+", "");

        const count = +counter.getAttribute("data-count") || 0;

        const increment = Math.ceil(target / speed);

        if (count < target) {

            const newCount = Math.min(count + increment, target);

            counter.setAttribute("data-count", newCount);

            counter.innerText = newCount + "+";

            setTimeout(updateCounter, 20);

        }

    };

    updateCounter();

});

/*==========================
Smooth Scroll
==========================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

/*==========================
Image Hover Animation
==========================*/

document.querySelectorAll(".gallery-grid img").forEach(img => {

    img.addEventListener("mouseenter", () => {

        img.style.transform = "scale(1.05)";

    });

    img.addEventListener("mouseleave", () => {

        img.style.transform = "scale(1)";

    });

});

/*==========================
AOS Animation
==========================*/

if (typeof AOS !== "undefined") {

    AOS.init({

        duration: 1000,

        once: true

    });

}