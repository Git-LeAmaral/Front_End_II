var userWanttoPlay = confirm("Você gostaria de jogar???");

function comecarJogo() {
  let pontosUsuario = 0;
  let pontosScript = 0;
  
  do {
    let jogadaUsuario = Number(
      prompt("O que você deseja jogar? 1 = pedra, 2 = papel, 3 = tesoura")
    );
    let jogadaScript = Math.floor(Math.random() * 3) + 1;

    console.log(
      "Jogada usuário: " + jogadaUsuario + " e jogada Script: " + jogadaScript
    );

    if (jogadaUsuario === 1 && jogadaScript === 2) {
      console.log("Você perdeu!");
      pontosScript++;
    } else if (jogadaUsuario === 1 && jogadaScript === 3) {
      console.log("Você venceu");
      pontosUsuario++;
    } else if (jogadaUsuario === 2 && jogadaScript === 1) {
      console.log("Você venceu");
      pontosUsuario++;
    } else if (jogadaUsuario === 2 && jogadaScript === 3) {
      console.log("Você perdeu");
      pontosScript++;
    } else if (jogadaUsuario === 3 && jogadaScript === 1) {
      console.log("Você perdeu");
      pontosScript++;
    } else if (jogadaUsuario === 3 && jogadaScript === 2) {
      console.log("Você venceu");
      pontosUsuario++;
    } else {
      console.log("Empate no Jokenpo!");
    }
  } while (pontosScript < 2 && pontosUsuario < 2);

  if (pontosUsuario === 2) {
    alert("Você foi o grande campeão!");
  } else if (pontosScript === 2) {
    alert("Você perdeu para o BOT!");

  }
  userWanttoPlay = confirm("Você gostaria de jogar novamente???");
  validarInicio();
}

function validarInicio() {
  if (userWanttoPlay === true) {
    comecarJogo();
  } else {
    alert("Obrigado por visitar a página");
  }
}

validarInicio();