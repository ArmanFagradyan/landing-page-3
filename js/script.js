const slider = document.getElementById('slider');
const slides = document.querySelectorAll('.slide');
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');
let currentSlide = 0;

slides[currentSlide].style.display = 'block';
updateArrowDisabledState();

leftArrow.addEventListener('click', function() {
  // Slide images back
    slides[currentSlide].style.display = 'none';
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    slides[currentSlide].style.display = 'block';
    updateArrowDisabledState();

  // Update current dot
    const currentDot = document.querySelector('.dot.current');
    currentDot.classList.remove('current');
    currentDot.previousElementSibling.classList.add('current');
});

rightArrow.addEventListener('click', function() {
  // Slide images forward
    slides[currentSlide].style.display = 'none';
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].style.display = 'block';
    updateArrowDisabledState();

  // Update current dot
    const currentDot = document.querySelector('.dot.current');
    currentDot.classList.remove('current');
    currentDot.nextElementSibling.classList.add('current');
});

function updateArrowDisabledState() {
    leftArrow.disabled = currentSlide === 0;
    rightArrow.disabled = currentSlide === slides.length - 1;
}
