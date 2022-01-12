const button = document.getElementById('botao');
const email = document.getElementById('email');
const senha = document.getElementById('input-senha');
const check = document.getElementById('agreement');

const desativa = document.getElementById('submit-btn');
desativa.disabled = true;

function login() {
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
}
button.addEventListener('click', login);

function checked() {
  if (check.checked === true) {
    desativa.disabled = false;
  } else if (check.checked === false) {
    desativa.disabled = true;
  }
}
check.addEventListener('click', checked);
