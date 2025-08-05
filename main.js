// Criando um novo elemento 
let novoElemento = document.createElement('h1');
// Alterando o conteúdo de texto do elemento
novoElemento.innerText = 'Hello, World! English! (Inglês) Ok?!';
// Selecionando o elemento body
let elementoBody = document.body;
// Colocando o novo elemento no body
elementoBody.appendChild(novoElemento);

const titulo = document.getElementById('titulo');

function criarPlaneta() {
  const planetas = ['🪐', '🌍', '🌑', '🌕', '🛸', '☄️'];
  const planeta = document.createElement('div');
  planeta.classList.add('planeta');
  planeta.textContent = planetas[Math.floor(Math.random() * planetas.length)];

  // posição aleatória na horizontal
  planeta.style.left = Math.random() * window.innerWidth + 'px';
  planeta.style.top = window.innerHeight + 'px';

  document.body.appendChild(planeta);

  // remover o planeta após a animação
  setTimeout(() => {
    planeta.remove();
  }, 4000);
}

// Quando o mouse entra no texto
titulo.addEventListener('mouseenter', () => {
  titulo.planetaInterval = setInterval(criarPlaneta, 300);
});

// Quando o mouse sai do texto
titulo.addEventListener('mouseleave', () => {
  clearInterval(titulo.planetaInterval);
});
