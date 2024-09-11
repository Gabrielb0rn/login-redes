function irParaCadastro() {
    document.location.href = './cadastro.html'
  }

  function login() {
      const name = document.getElementById('name').value;
      const password = document.getElementById('password').value;

// EXERCICIO verificar se o usuário digitou o nome e a senha antes de buscar o login do localStorage

      const obj = {
          name: name,
          password: password
      };

      const login = JSON.parse(localStorage.getItem('login'));

      if (obj.name === login.name && obj.password === login.password) {

// EXERCICIO redirecionar o usuário para a tela de bem vindo -- 

      document.location.href = 'https://gabrielb0rn.github.io/EasyDesk.io/';
      } else {
        alert('Usuário ou senha inválidos');
      }

  }

  function irParaCadastro() {
    document.location.href = './cadastro.html';
}

function login() {
    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Verifica se os campos estão vazios
    if (!name || !password) {
        errorMessage.style.display = 'block';
        errorMessage.textContent = 'Preencha todos os campos corretamente.';
        return;
    } else {
        errorMessage.style.display = 'none'; // Esconde a mensagem de erro se tudo estiver preenchido
    }

    const obj = {
        name: name,
        password: password
    };

    const login = JSON.parse(localStorage.getItem('login'));

    // Verifica se o login existe no localStorage e se os dados estão corretos
    if (login && obj.name === login.name && obj.password === login.password) {
        document.location.href = 'https://gabrielb0rn.github.io/EasyDesk.io/';
    } else {
        errorMessage.style.display = 'block';
        errorMessage.textContent = 'Usuário ou senha inválidos.';
    }
}
