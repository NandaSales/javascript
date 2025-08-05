const planetas = ['🪐', '🌍', '🌑', '🌕', '🛸', '☄️'];

let ultimaCriacao = 0;
const intervalo = 50; 

function criarPlaneta(x, y) {
  const agora = Date.now();
  if (agora - ultimaCriacao < intervalo) return;
  ultimaCriacao = agora;

  const planeta = document.createElement('div');
  planeta.classList.add('planeta');
  planeta.textContent = planetas[Math.floor(Math.random() * planetas.length)];

  const tamanho = 32; 
  planeta.style.left = (x - tamanho / 2) + 'px';
  planeta.style.top = (y - tamanho / 2) + 'px';

  document.body.appendChild(planeta);

  planeta.addEventListener('animationend', () => {
    planeta.remove();
  });
}

document.addEventListener('mousemove', (e) => {
  criarPlaneta(e.clientX, e.clientY);
});
