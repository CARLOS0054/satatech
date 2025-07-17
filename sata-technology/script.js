function abrirContato() {
  document.getElementById('contato').scrollIntoView({ behavior: 'smooth' });
  
}
function mostrarTexto(mensagem) {
  const container = document.getElementById('texto-dinamico');
  container.innerHTML = mensagem; // Agora aceita <p>, <br>, etc.
  container.classList.add('show'); // Classe para estilização
}

