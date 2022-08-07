const navigationToggle = document.querySelector('.nav-toggle');
const navigation = document.querySelector('.nav__list');

navigationToggle.addEventListener('click', () => {
  navigation.classList.toggle('nav__list--visible');
});