function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// SLIDESHOW
let current = 0;

function showSlides() {
    const slides = document.querySelectorAll(".hero-slide");

    slides.forEach((s, i) => {
        s.classList.remove("active");
        if (i === current) s.classList.add("active");
    });

    current = (current + 1) % slides.length;
}

setInterval(showSlides, 3000);
window.onload = showSlides;
