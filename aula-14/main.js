const cepInputRef = document.querySelector('#cep')
const cityInputRef = document.querySelector('#city')
const neighborhoodInputRef = document.querySelector('#neighborhood')

function fillFormWithAddress(address) {

    console.log(address);
    cityInputRef.value = address.localidade
    neighborhoodInputRef.value = address.bairro

}

function searchAddress() {

  const cep = cepInputRef.value

  if (cepInputRef.value.length > 7) {

    fetch(`https://viacep.com.br/ws/${cep}/json/`).then(
        response => {
          response.json().then(
            data => {

              if (data.erro === undefined) {

                fillFormWithAddress(data);

              } else {
                
                alert('O cep informado não existe!')
                cepInputRef.value = ''

              }
            }
          )
        }
    )

  }


}


cepInputRef.addEventListener('keyup', searchAddress)

var userData = {
  firstName: 'leandro',
  lastName: 'amaral',
  email: 'leandro@hotmail',
  password: '1234'
}

const requestHeaders = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}

var requestConfig = {

    method: 'POST',
    headers: requestHeaders,
    body: JSON.stringify(userData)

}


fetch('https://todo-api.ctd.academy/v1/users', requestConfig).then(
  response => {
      if(response.ok) {
       
        alert('Você foi cadastrado com sucesso')

        window.location.href = '/aula-14/login.html' 

      } else {

        alert('O usuário ja foi cadastrado')

      }
  }
)