let index = 0;
const slides = document.getElementById("slides");
const totalSlides = slides.children.length;
const dotsContainer = document.getElementById("dots");

// Crear puntos dinámicamente
for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    dot.onclick = () => goToSlide(i);
    dotsContainer.appendChild(dot);
}

const dots = document.querySelectorAll(".dot");

function updateCarousel() {
    slides.style.transform = `translateX(-${index * 600}px)`;
    
    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");
}

function moveSlide(step) {
    index = (index + step + totalSlides) % totalSlides;
    updateCarousel();
}

function goToSlide(i) {
    index = i;
    updateCarousel();
}

// Auto-play
setInterval(() => {
    moveSlide(1);
}, 4000);

// Inicializar
updateCarousel();