// Criando um novo elemento 
let novoElemento = document.createElement('h1');
// Alterando o conteúdo de texto do elemento
novoElemento.innerText = 'Hello, World! English! (Inglês) Ok?!';
// Selecionando o elemento body
let elementoBody = document.body;
// Colocando o novo elemento no body
elementoBody.appendChild(novoElemento);

const titulo = document.getElementById('titulo');

// Quando o mouse entra
titulo.addEventListener('mouseover', () => {
  titulo.textContent = 'My Planets';
});

// Quando o mouse sai
titulo.addEventListener('mouseout', () => {
  titulo.textContent = 'Hello, World!';
});
