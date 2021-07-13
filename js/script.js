//local stogare
let button = document.querySelector('#send');
let email = document.querySelector('#form');

button.addEventListener('click', () => {
  localStorage.setItem('email', email.value)
})


// banner
