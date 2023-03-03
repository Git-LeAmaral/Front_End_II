// A função window.addEventListener("load", function() {}) é utilizada para que o javascript funcione somente quando a pagina estiver pronta

window.addEventListener("load", function() {

  // document.getElementById("botao-js-esconder").onclick = function() {
  //   document.getElementById("modal").style.display = "none"
  // }

  // document.getElementById("botao-js-exibir").onclick = function() {
  //   document.getElementById("modal").style.display = "block"
  // }


  //===== SELECIONANDO ELEMENTO PELO ID========
  // let btnMudaCor = document.getElementById("botao-muda-cor")

  // btnMudaCor.addEventListener('click', function() {
  //   btnMudaCor.style.background = "blue";
  // })

  //=====SELECIONANDO ELEMENTO POR CLASSE===========
  let btnMudaCor = document.querySelectorAll(".botao-muda-cor")

  //Para selecionar varios elementos vamos usar o for para buscar 
  
  for (let i = 0; i < btnMudaCor.length; i++) {
    btnMudaCor[i].addEventListener('click', function() {
      this.style.background = prompt("Escolha a cor do botão")
      this.style.color = prompt("escolha a cor do Texto")
    })
  }

})
