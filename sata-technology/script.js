function abrirContato() {
  document.getElementById('contato').scrollIntoView({ behavior: 'smooth' });
  
}
function mostrarTexto(mensagem) {
  const container = document.getElementById('texto-dinamico');
  container.innerHTML = mensagem; // Agora aceita <p>, <br>, etc.
  container.classList.add('show'); // Classe para estilização
}
fetch("/.netlify/functions/consulta")
  .then(res => res.json())
  .then(data => {
    console.log(data);
    document.getElementById("dados").innerText = JSON.stringify(data, null, 2);
  });

