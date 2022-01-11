let button = document.getElementById('botao');
let email = document.getElementById('input-email');
let senha = document.getElementById('input-senha');
let check = document.getElementById('agreement');

document.getElementById('submit-btn').disabled = true

button.addEventListener('click', login);

function login(){
  if (email.value == "tryber@teste.com" && senha.value == "123456"){
    window.alert('Olá, Tryber!')
  } else {
    window.alert("Email ou senha inválidos.")
  }
}

// check.addEventListener('click', login2);

// function login2(){
//   if ()
// }

