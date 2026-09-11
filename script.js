// Mobile navigation
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");

navToggle?.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.classList.toggle("active", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("menu-open", isOpen);
});

navItems.forEach((item) => {
    item.addEventListener("click", () => {
        navLinks.classList.remove("open");
        navToggle?.classList.remove("active");
        navToggle?.setAttribute("aria-expanded", "false");
        document.body.classList.remove("menu-open");
    });
});

// Reveal-on-scroll animation
const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
    }
);

revealElements.forEach((element) => revealObserver.observe(element));

// Automatically update footer year
const year = document.querySelector("#year");
if (year) {
    year.textContent = new Date().getFullYear();
}

// Add subtle shadow to sticky navigation after scrolling
const header = document.querySelector(".site-header");

window.addEventListener("scroll", () => {
    if (!header) return;

    if (window.scrollY > 20) {
        header.style.boxShadow = "0 8px 30px rgba(15, 44, 68, 0.06)";
    } else {
        header.style.boxShadow = "none";
    }
});





/* ================================
   PROJECT IMAGE SLIDER
================================ */

const sliders = document.querySelectorAll(".project-slider");

sliders.forEach((slider) => {

    const slides = slider.querySelector(".slides");
    const images = slider.querySelectorAll(".slides img");

    const prevBtn = slider.querySelector(".prev");
    const nextBtn = slider.querySelector(".next");

    const dotsContainer = slider.querySelector(".slider-dots");

    let currentSlide = 0;


    // Create dots automatically
    images.forEach((image, index) => {

        const dot = document.createElement("button");

        dot.classList.add("slider-dot");

        if (index === 0) {
            dot.classList.add("active");
        }

        dot.addEventListener("click", () => {
            currentSlide = index;
            updateSlider();
        });

        dotsContainer.appendChild(dot);
    });


    const dots = dotsContainer.querySelectorAll(".slider-dot");


    function updateSlider() {

        slides.style.transform =
            `translateX(-${currentSlide * 100}%)`;

        dots.forEach((dot, index) => {

            dot.classList.toggle(
                "active",
                index === currentSlide
            );

        });
    }


    // NEXT
    nextBtn.addEventListener("click", () => {

        currentSlide++;

        if (currentSlide >= images.length) {
            currentSlide = 0;
        }

        updateSlider();
    });


    // PREVIOUS
    prevBtn.addEventListener("click", () => {

        currentSlide--;

        if (currentSlide < 0) {
            currentSlide = images.length - 1;
        }

        updateSlider();
    });

});


//beyond classroom
document.querySelectorAll(".activity-gallery").forEach(gallery => {

    const images = gallery.querySelector(".activity-images");
    const prev = gallery.querySelector(".prev");
    const next = gallery.querySelector(".next");

    next.addEventListener("click", () => {
        images.scrollBy({
            left: 270,
            behavior: "smooth"
        });
    });

    prev.addEventListener("click", () => {
        images.scrollBy({
            left: -270,
            behavior: "smooth"
        });
    });

});