const textArea = document.getElementById('text-area');
const words = textArea.children;
const slider = document.getElementById('slider');
const slides = document.querySelectorAll('.slide');
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');
let currentSlide = 0;

slides[currentSlide].style.display = 'block';
updateArrowDisabledState();
updateCurrentWord();

leftArrow.addEventListener('click', function(event) {
  event.preventDefault();
  if (currentSlide === 0) {
    return;
  }
  // Slide images back
  slides[currentSlide].style.display = 'none';
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  slides[currentSlide].style.display = 'block';
  updateArrowDisabledState();
  updateCurrentWord();

  // Update current dot
  const currentDot = document.querySelector('.dot.current');
  currentDot.classList.remove('current');
  currentDot.previousElementSibling.classList.add('current');
});

rightArrow.addEventListener('click', function(event) {
  event.preventDefault();
  if (currentSlide === slides.length - 1) {
    return;
  }
  // Slide images forward
  slides[currentSlide].style.display = 'none';
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].style.display = 'block';
  updateArrowDisabledState();
  updateCurrentWord();

  // Update current dot
  const currentDot = document.querySelector('.dot.current');
  currentDot.classList.remove('current');
  currentDot.nextElementSibling.classList.add('current');
});

function updateArrowDisabledState() {
  leftArrow.disabled = currentSlide === 0;
  rightArrow.disabled = currentSlide === slides.length - 1;
}

function updateCurrentWord() {
  // Remove current class from all words
  for (const word of words) {
    word.classList.remove('current');
  }

  // Add current class to current word
words[currentSlide].classList.add('current');
}
