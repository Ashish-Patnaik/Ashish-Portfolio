
let currentSlide = 0;
const slidesToShow = 3; // Number of cards to show at once

function moveSlide(direction) {
  const slides = document.querySelectorAll('.deal-item');
  const totalSlides = slides.length;
  const carouselInner = document.querySelector('.carousel-inner');
  
  // Update currentSlide with boundary checks
  currentSlide += direction;
  
  // Handle infinite loop with smoother transitions
  if (currentSlide > totalSlides - slidesToShow) {
    currentSlide = 0;
    carouselInner.style.transition = 'transform 0.5s ease';
    carouselInner.style.transform = 'translateX(0)';
  } else if (currentSlide < 0) {
    currentSlide = totalSlides - slidesToShow;
    carouselInner.style.transition = 'transform 0.5s ease';
    carouselInner.style.transform = `translateX(-${(totalSlides - slidesToShow) * (100 / slidesToShow)}%)`;
  }

  // Calculate the translation percentage ensuring the last card is fully visible
  const translateX = Math.min(
    currentSlide * (100 / slidesToShow),
    (totalSlides - slidesToShow) * (100 / slidesToShow)
  );

  // Apply the transform with smooth transition
  carouselInner.style.transition = 'transform 0.5s ease';
  carouselInner.style.transform = `translateX(-${translateX}%)`;

  // Remove highlight class from all cards
  slides.forEach(slide => slide.classList.remove('highlight'));

  // Calculate the index of the center card
  const centerCardIndex = Math.min(
    currentSlide + Math.floor(slidesToShow / 2),
    totalSlides - 1
  );
  
  // Add highlight class to the center card
  if (centerCardIndex >= 0 && centerCardIndex < totalSlides) {
    slides[centerCardIndex].classList.add('highlight');
  }
}

// Initial setup
document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.deal-item');
  const carouselInner = document.querySelector('.carousel-inner');
  
  // Set initial transition
  carouselInner.style.transition = 'transform 0.5s ease';
  
  // Set up the initial highlight
  slides[Math.floor(slidesToShow / 2)].classList.add('highlight');
  
  // Set proper width for the carousel inner and slides
  carouselInner.style.width = `${(100 * slides.length / slidesToShow)}%`;
  slides.forEach(slide => {
    slide.style.width = `${100 / slides.length}%`;
  });
});