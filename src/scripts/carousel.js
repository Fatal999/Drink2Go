const leftButton = document.querySelector('.hero__arrow--left');
const rightButton = document.querySelector('.hero__arrow--right');
const sliders = document.querySelectorAll('.hero__slider-item');
const slideButtons = document.querySelectorAll('.hero__slider-button');
const heroWrapp = document.querySelector('.hero');

let sliderIndex = 0;
sliders[sliderIndex].style.display = 'flex';

function showSlide() {
  sliders.forEach((slider) => {
    slider.style.display = 'none';
  });

  slideButtons.forEach((button) => {
    button.classList.remove('hero__slider-button--active');
  });
  sliders[sliderIndex].style.display = 'flex';
  document.getElementById(`${sliderIndex}`).classList.add('hero__slider-button--active');

  if (sliderIndex === 0) {
    heroWrapp.style.background = '#f3ebe1';
  } else if (sliderIndex === 1) {
    heroWrapp.style.background = '#eae6fc';
  } else if (sliderIndex === 2) {
    heroWrapp.style.background = '#f8f8f8';
  }
}

function nextSlide() {
  if (sliderIndex < sliders.length - 1) {
    sliderIndex++;
    showSlide();
  } else {
    sliderIndex = 0;
    showSlide();
  }
}

rightButton.addEventListener('click', nextSlide);

function prevSlide() {
  if (sliderIndex > 0) {
    sliderIndex--;
    showSlide();
  } else {
    sliderIndex = 2;
    showSlide();
  }
}

leftButton.addEventListener('click', prevSlide);

function altShowSlide(evt) {
  const slideTarget = evt.target;

  sliders.forEach((slider) => {
    slider.style.display = 'none';
  });

  slideButtons.forEach((button) => {
    button.classList.remove('hero__slider-button--active');
  });

  sliders[slideTarget.id].style.display = 'flex';
  document.getElementById(`${slideTarget.id}`).classList.add('hero__slider-button--active');
}

slideButtons.forEach((button) => {
  button.addEventListener('click', altShowSlide);
});
