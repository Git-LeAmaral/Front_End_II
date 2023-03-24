// window.addEventListener()

// const testeButtonRef = document.querySelector('#testeButton')

// function clickBotao() {
//   console.log('O botão foi clickado');
// }

// testeButtonRef.addEventListener('click', clickBotao)

// function exibirMensagem(mensagem) {
//   console.log(`Essa é sua mensagem: ${mensagem}`);
// }

// testeButtonRef.addEventListener('click', () => exibirMensagem('Bem Vindo'))

//====================================================

const userEmailRef = document.querySelector('#userEmail')
const userPasswordRef = document.querySelector('#userPassword')

var userData = {
  email: '',
  password: ''
}

function validarSenha(event) {

  userData.password = senha

}

function validarEmail(email) {

  userData.email = email

  console.log(userData); //ou 
  // console.log(userEmailRef.value); 

  // console.log(event.target.value);
}

userEmailRef.addEventListener('keyup', (event) => validarEmail(event.target.value))
userPasswordRef.addEventListener('keyup', (event) => validarSenha(event.target.value))

