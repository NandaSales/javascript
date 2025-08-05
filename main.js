// Criando um novo elemento 
let novoElemento = document.createElement('h1');
// Alterando o conteúdo de texto do elemento
novoElemento.innerText = 'Hello, World! English! (Inglês) Ok?!';
// Selecionando o elemento body
let elementoBody = document.body;
// Colocando o novo elemento no body
elementoBody.appendChild(novoElemento);

// Emojis de planetas que serão usados
const planetas = ['🪐', '🌍', '🌑', '🌕', '🛸', '☄️'];

// Função que cria o emoji do planeta na posição do mouse
function criarPlaneta(x, y) {
  const planeta = document.createElement('div');
  planeta.classList.add('planeta');
  planeta.textContent = planetas[Math.floor(Math.random() * planetas.length)];

  // Define posição do planeta
  planeta.style.left = `${x}px`;
  planeta.style.top = `${y}px`;

  // Adiciona na tela
  document.body.appendChild(planeta);

  // Remove depois de 2 segundos
  setTimeout(() => {
    planeta.remove();
  }, 2000);
}

// Evento para seguir o mouse em qualquer lugar da tela
document.addEventListener('mousemove', (event) => {
  criarPlaneta(event.clientX, event.clientY);
});
