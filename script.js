// Tambahkan efek paralaks pada header
window.addEventListener('scroll', function() {
    const parallax = document.querySelector('.parallax');
    let scrollPosition = window.pageYOffset;

    parallax.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
});

// Tambahkan animasi scroll smooth untuk setiap tautan navigasi
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Tambahkan efek slider untuk menu
let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.querySelectorAll('.menu-item');
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 3000); // Ubah gambar setiap 3 detik
}

// Tambahkan validasi formulir kontak
const contactForm = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const submitButton = document.getElementById('submit-button');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    if (nameInput.value === '' || emailInput.value === '' || messageInput.value === '') {
        alert('Harap lengkapi semua kolom!');
    } else {
        // Kirim formulir
        alert('Formulir berhasil dikirim!');
        contactForm.reset();
    }
});

// Tambahkan animasi untuk masing-masing bagian saat gulir ke bawah
const sections = document.querySelectorAll('section');

const options = {
    threshold: 0.5
};

const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});

// Tambahkan tombol "Scroll to Top"
const scrollToTopButton = document.getElementById('scroll-to-top');

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        scrollToTopButton.classList.add('show');
    } else {
        scrollToTopButton.classList.remove('show');
    }
});

scrollToTopButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
