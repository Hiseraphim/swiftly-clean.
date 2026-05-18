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
document.getElementById("bookingForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const service = document.getElementById("modalTitle").textContent;
    const name = document.getElementById("customerName").value;
    const phone = document.getElementById("customerPhone").value;
    const date = document.getElementById("bookingDate").value;
    const time = document.getElementById("bookingTime").value;

    alert(
        `Booking Confirmed!\n\n` +
        `Service: ${service}\n` +
        `Name: ${name}\n` +
        `Phone: ${phone}\n` +
        `Date: ${date}\n` +
        `Time: ${time}`
    );

    document.getElementById("bookingForm").reset();
    closeModal();
}); 
// OPEN MODAL
function openBookingModal() {
    document.getElementById("bookingModal").style.display = "flex";
}

// CLOSE MODAL
function closeBookingModal(event) {
    if (!event || event.target.id === "bookingModal") {
        document.getElementById("bookingModal").style.display = "none";
    }
}

// BOOKING SYSTEM
document.getElementById("bookingForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("customerName").value;
    const phone = document.getElementById("customerPhone").value;
    const country = document.getElementById("customerCountry").value;
    const region = document.getElementById("customerRegion").value;
    const address = document.getElementById("customerAddress").value;
    const service = document.getElementById("customerService").value;
    const date = document.getElementById("bookingDate").value;
    const time = document.getElementById("bookingTime").value;

    const bookingKey = `${date}-${time}`;

    let bookings = JSON.parse(localStorage.getItem("bookings")) || {};

    // CHECK IF SLOT IS TAKEN
    if (bookings[bookingKey]) {
        alert("❌ This schedule is already booked. Choose another time.");
        return;
    }

    // SAVE BOOKING
    bookings[bookingKey] = {
        name,
        phone,
        country,
        region,
        address,
        service,
        date,
        time
    };

    localStorage.setItem("bookings", JSON.stringify(bookings));

    alert(
        "✅ Booking Confirmed!\n\n" +
        "Service: " + service + "\n" +
        "Date: " + date + "\n" +
        "Time: " + time
    );

    document.getElementById("bookingForm").reset();
    document.getElementById("bookingModal").style.display = "none";
});
function openBookingModal() {
    document.getElementById("bookingModal").style.display = "flex";
}
