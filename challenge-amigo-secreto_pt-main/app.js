//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
var nome = [];

function adicionarAmigo() {
    var amigo = document.getElementById('amigo').value.trim();
if(amigo == ''){
    alert('Por favor, insira um nome válido');
}
else
  nome.push(amigo);
  const li = document.createElement('li');
  li.textContent = amigo;
  const listaAmigos = document.getElementById('listaAmigos');
  listaAmigos.appendChild(li);
}
function sortearAmigo() {
    var sorteado = Math.floor(Math.random() * nome.length);
    document.getElementById('resultado').innerText = "O nome sorteado é: " + nome[sorteado];
}