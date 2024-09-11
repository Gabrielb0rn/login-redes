    function irParaLogin() {
        document.location.href = './login.html';
    }
    
    function cadastrar() {
        const name = document.getElementById('name').value;
        const password = document.getElementById('password').value;
    
        // Verificação se o nome e a senha foram preenchidos
        if (!name || !password) {
            alert('Por favor, preencha tanto o nome quanto a senha.');
            return;
        }
    
        // Função para verificar se a senha contém tanto letras quanto números
        if (!validarSenha(password)) {
            alert('A senha deve conter pelo menos uma letra e um número.');
            return;
        }
    
        const obj = {
            name: name,
            password: password
        };
    
        localStorage.setItem('login', JSON.stringify(obj));
    
        alert('Usuário cadastrado com sucesso!');
        document.getElementById('name').value = '';
        document.getElementById('password').value = '';
    }
    
    // Função para verificar se a senha contém letras e números
    function validarSenha(senha) {
        const contemLetra = /[a-zA-Z]/.test(senha);
        const contemNumero = /[0-9]/.test(senha);
        return contemLetra && contemNumero;
    }
    