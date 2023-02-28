function verificarGanhador(usuario, oponente) {

  if(usuario === 1 && oponente === 2){

    console.log('Voce perdeu!');

  }

}

function comecarJogo() {

  let jogadaUsusario = Number(prompt('O que voce deseja jogar? 1 = pedra, 2 = papel, 3 = tesoura'));

  let jogadaComputador = Math.floor(Math.random() * 3) + 1;

  console.log(jogadaUsusario);
  console.log(jogadaComputador);

  verificarGanhador(jogadaUsusario, jogadaComputador);
} 

function perguntarDesejaJogar() {

  let usuarioDesejaJogar = confirm('Você gostaria de jogar?');


  if (usuarioDesejaJogar === true) {

    comecarJogo();

  } else {

    alert('Obrigado por visitar a pagina');

  }

}

perguntarDesejaJogar();



