function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: "smooth" });
    }
}

function openModal(title, price, desc) {
    document.getElementById("modalTitle").textContent = title;
    document.getElementById("modalPrice").textContent = price;
    document.getElementById("modalDesc").textContent = desc;
    document.getElementById("serviceModal").style.display = "block";
    document.body.style.overflow = "hidden";
}

function closeModal(event) {
    document.getElementById("serviceModal").style.display = "none";
    document.body.style.overflow = "";
}

function bookService(event) {
    event.stopPropagation();
    alert('Service booked successfully! We will contact you within 24 hours to confirm.');
    closeModal();
}

// HERO SLIDESHOW FUNCTIONALITY
function initHeroSlideshow() {
    const slides = document.querySelectorAll('.hero-slide');
    let currentSlide = 0;
    
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }
    
    // Start slideshow
    showSlide(currentSlide);
    setInterval(nextSlide, 3000); // Change slide every 3 seconds
}

// Initialize slideshow when page loads
document.addEventListener('DOMContentLoaded', function() {
    initHeroSlideshow();
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});
