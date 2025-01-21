let currentSlide = 1;
const totalSlides = 3;

function showSlide(slideNumber) {
  // Hide all slides
  for (let i = 1; i <= totalSlides; i++) {
    const slide = document.getElementById(`slide${i}`);
    slide.classList.add("opacity-0");
  }

  // Show the selected slide
  const slideToShow = document.getElementById(`slide${slideNumber}`);
  slideToShow.classList.remove("opacity-0");

  currentSlide = slideNumber;
}

function nextSlide() {
  let nextSlideNumber = currentSlide + 1;
  if (nextSlideNumber > totalSlides) nextSlideNumber = 1;
  showSlide(nextSlideNumber);
}

function prevSlide() {
  let prevSlideNumber = currentSlide - 1;
  if (prevSlideNumber < 1) prevSlideNumber = totalSlides;
  showSlide(prevSlideNumber);
}

// Auto-advance slides every 5 seconds
setInterval(nextSlide, 5000);

// Add touch support for mobile devices
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener(
  "touchstart",
  (e) => {
    touchStartX = e.changedTouches[0].screenX;
  },
  false
);

document.addEventListener(
  "touchend",
  (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  },
  false
);

function handleSwipe() {
  const swipeThreshold = 50;
  if (touchEndX < touchStartX - swipeThreshold) {
    nextSlide();
  }
  if (touchEndX > touchStartX + swipeThreshold) {
    prevSlide();
  }
}