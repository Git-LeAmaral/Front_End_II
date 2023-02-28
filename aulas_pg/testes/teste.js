var nome = prompt("Insira seu nome");
var texto = document.createTextNode("Olá " + nome);
console.log(texto);
var p = document.createElement("p");
p.appendChild(texto);
document.body.appendChild(p);