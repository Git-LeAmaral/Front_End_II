let contentRef = document.querySelector('#content');
// contentRef mostra que o documento é uma refencia do html não comun

// let texto = document.createTextNode('Texto criado pelo JavaScript.')
// O createTextNode() ira criar um texto dentro da div, porém só é recomendando para um texto pequeno em alguma parte do código

// contentRef.appendChild(texto)
// appdenChild() é uma função que adiciona um novo filho no elemento (contentRef).


// Aqui criamos um array de objetos para o javaScript criar os objetos dentro do elemento (contentRef) de uma forma dinamica
const noticias = [
  {
    titulo: 'Esse é o primeiro post',
    descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, maxime!',
    url: '#'
  },
  {
    titulo: 'Esse é o segundo post',
    descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, maxime!',
    url: '#'
  },
  {
    titulo: 'Esse é o terceiro post',
    descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, maxime!',
    url: '#'
  }
]


for(let noticia of noticias) {

  contentRef.innerHTML += `
     <article>
        <h1>${noticia.titulo}</h1>
        <p>${noticia.descricao}</p>
        <a href="${noticia.url}">Assece a notícia</a>
    </article>
  
  `
  
}