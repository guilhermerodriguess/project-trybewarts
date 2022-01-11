let button = document.getElementById('botao');
let email = document.getElementById('input-email');
let senha = document.getElementById('input-senha');

button.addEventListener('click', login);

function login(){
  if (email.value == "tryber@teste.com" && senha.value == "123456"){
    window.alert('Olá, Tryber!')
  } else {
    window.alert("Email ou senha inválidos.")
  }
}
