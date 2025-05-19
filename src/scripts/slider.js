const rangeElement = document.getElementById('range');
const valueElementOne = document.querySelector('.catalog__range-value--one');
const valueElementTwo = document.querySelector('.catalog__range-value--two');

noUiSlider.create(rangeElement, {
  start: [0, 900],
  step: 1,
  connect: true,
  range: {
    min: 0,
    max: 1000,
  },
});

rangeElement.noUiSlider.on('update', () => {
  const valueArray = rangeElement.noUiSlider.get();
  valueElementOne.value = Math.round(valueArray[0]);
  valueElementTwo.value = Math.round(valueArray[1]);

  const numbValueElementOne = Number(valueElementOne.value);
  const numbValueElementTwo = Number(valueElementTwo.value);

  if (numbValueElementOne === 0) {
    valueElementOne.style.color = '#bdbdbd';
  } else {
    valueElementOne.style.color = '#333333';
  }

  if (numbValueElementTwo === 0) {
    valueElementTwo.style.color = '#bdbdbd';
  } else {
    valueElementTwo.style.color = '#333333';
  }
});
