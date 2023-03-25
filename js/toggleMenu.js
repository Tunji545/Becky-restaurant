function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle('open');
}

const x = document.querySelector('#hamburgerMenu');
x.addEventListener('click', toggleMenu)
