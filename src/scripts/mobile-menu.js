const menuButton = document.querySelector('.header__button');
const mainMenu = document.querySelector('.header__list');

function switchMenu() {
  mainMenu.classList.toggle('header__list--open');
  menuButton.classList.toggle('header__button--open');
}

menuButton.addEventListener('click', switchMenu);
