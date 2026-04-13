const API = 'http://localhost:3000/usuarios';

async function carregar() {
  const res = await fetch(API);
  const data = await res.json();

  const lista = document.getElementById('lista');
  lista.innerHTML = '';

  data.forEach(u => {
    const li = document.createElement('li');
    li.innerHTML = `
      ${u.nome} (${u.usuario})
      <button onclick="del(${u.id})">X</button>
    `;
    lista.appendChild(li);
  });
}

async function criar() {
  const nome = document.getElementById('nome').value;
  const usuario = document.getElementById('usuario').value;
  const senha = document.getElementById('senha').value;

  await fetch(API, {
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify({ nome, usuario, senha })
  });

  carregar();
}

async function del(id) {
  await fetch(API + '/' + id, { method: 'DELETE' });
  carregar();
}

carregar();