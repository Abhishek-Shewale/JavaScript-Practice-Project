// script.js

const slides = document.querySelectorAll(".slide");
let counter = 0;

function updateSlidePosition() {
  slides.forEach((slide, index) => {
    slide.style.left = `${(index - counter) * 100}%`;
  });
}

function goPrev() {
  if (counter > 0) {
    counter--;
    updateSlidePosition();
  }
}

function goNext() {
  if (counter < slides.length - 1) {
    counter++;
    updateSlidePosition();
  }
}

// Initial update to set the correct slide positions
updateSlidePosition();
