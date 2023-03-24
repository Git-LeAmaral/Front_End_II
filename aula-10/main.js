const inputEmailRef = document.querySelector('#userEmail') // pegando os elementos do controlador userEmail
const inputPasswordRef = document.querySelector('#userPassword') // pegando os elementos do controlador userPassword
const loginButtonRef = document.querySelector('#loginButton') // pegando os elementos do button

var formErrors = {
  userEmail: true, // quando campo for verdadeiro quer dizer que o input esta com erro caso contrario esta ok para ser validado
  userPassword: true
}

function checkFormValidity() {

  const formErrorsArray = Object.values(formErrors)
  const formValidity = formErrorsArray.every(item => item === false)

  console.log(formErrors);
  console.log(formValidity);

  loginButtonRef.disabled = !formValidity

}

function validateInput(inputRef) {
  // console.log(inputEmailRef.value); // verificando ação do usuario com input

  // if(inputEmailRef.value !== '') {

  //     console.log('passou na validação');

  // } else {

  //     console.log('reprovou na validação');

  // }

  const inputValid = inputRef.checkValidity()

  // console.log(inputEmailRef.checkValidid()); //CheckValidit faz a checagem do email e retorna se é verdadeiro ou falso

  if (inputValid) {

    inputRef.parentElement.classList.remove('error')

  } else {

    inputRef.parentElement.classList.add('error')

  }

  formErrors[inputRef.id] = !inputValid

  checkFormValidity()

  // console.log(formErrors);

}

function login(event) {
  event.preventDefault()
}

inputEmailRef.addEventListener('keyup', () => validateInput(inputEmailRef))
inputPasswordRef.addEventListener('keyup', () => validateInput(inputPasswordRef))
loginButtonRef.addEventListener('click', (event) => login(event))
