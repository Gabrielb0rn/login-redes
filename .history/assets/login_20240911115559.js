function irParaCadastro() {
    document.location.href = './cadastro.html'
  }

  function login() {
      const name = document.getElementById('name').value;
      const password = document.getElementById('password').value;



      const obj = {
          name: name,
          password: password
      };

      const login = JSON.parse(localStorage.getItem('login'));

      if (obj.name === login.name && obj.password === login.password) {



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

    // EXERCICIO redirecionar o usuário para a tela de bem vindo -- 
    if (login && obj.name === login.name && obj.password === login.password) {
        document.location.href = 'https://gabrielb0rn.github.io/EasyDesk.io/';
    } else {
        errorMessage.style.display = 'block';
        errorMessage.textContent = 'Usuário ou senha inválidos.';
    }
}
