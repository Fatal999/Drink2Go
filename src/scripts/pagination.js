const paginationList = document.querySelector('.catalog__pagination-list');
const paginationButton = paginationList.querySelectorAll('button');
const paginationNext = document.querySelector('.catalog__pagination-arrow--next');
const paginationPrev = document.querySelector('.catalog__pagination-arrow--prev');
let paginationIndex = 1;

function pressPaginationButton(evt) {
  const targetButton = evt.target;

  paginationButton.forEach((button) => {
    button.classList.remove('catalog__pagination-button--active');
  });

  targetButton.classList.add('catalog__pagination-button--active');

  if (Number(targetButton.textContent) === 1) {
    paginationPrev.style.zIndex = '-1';
  } else {
    paginationPrev.style.zIndex = '1';
  }

  if (Number(targetButton.textContent) === 3) {
    paginationNext.style.zIndex = '-1';
  } else {
    paginationNext.style.zIndex = '1';
  }

  paginationIndex = Number(targetButton.textContent) - 1;
}

paginationButton.forEach((button) => {
  button.addEventListener('click', pressPaginationButton);
});

function prevPaginationSlide() {
  paginationButton.forEach((button) => {
    button.classList.remove('catalog__pagination-button--active');
  });

  paginationIndex--;
  paginationButton[paginationIndex].classList.add('catalog__pagination-button--active');

  if (Number(paginationButton[paginationIndex].textContent) === 1) {
    paginationPrev.style.zIndex = '-1';
  } else {
    paginationPrev.style.zIndex = '1';
  }

  if (Number(paginationButton[paginationIndex].textContent) === 3) {
    paginationNext.style.zIndex = '-1';
  } else {
    paginationNext.style.zIndex = '1';
  }
}

paginationPrev.addEventListener('click', prevPaginationSlide);

function nextPaginationSlide() {
  paginationButton.forEach((button) => {
    button.classList.remove('catalog__pagination-button--active');
  });

  paginationIndex++;
  paginationButton[paginationIndex].classList.add('catalog__pagination-button--active');

  if (Number(paginationButton[paginationIndex].textContent) === 1) {
    paginationPrev.style.zIndex = '-1';
  } else {
    paginationPrev.style.zIndex = '1';
  }

  if (Number(paginationButton[paginationIndex].textContent) === 3) {
    paginationNext.style.zIndex = '-1';
  } else {
    paginationNext.style.zIndex = '1';
  }
}

paginationNext.addEventListener('click', nextPaginationSlide);
