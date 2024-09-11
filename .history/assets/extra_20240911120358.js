window.onload = function() {
    // Busca as informações do localStorage
    const loginData = JSON.parse(localStorage.getItem('login'));

    // Verifica se o login existe
    if (loginData && loginData.name) {
        // Atualiza o conteúdo do parágrafo com o nome do usuário
        document.getElementById('user-info').innerHTML = `<b>Usuário:</b> ${loginData.name}`;
    } else {
        document.getElementById('user-info').innerHTML = `<b>Nenhum usuário logado.</b>`;
    }
}
