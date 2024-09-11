window.onload = function() {
    const loginData = JSON.parse(localStorage.getItem('login'));
    
    if (loginData && loginData.name) {
        const userInfo = document.createElement('p');
        userInfo.innerHTML = `<b>Bem-vindo:</b> ${loginData.name}`;
        
        // Adiciona o elemento <p> ao container
        document.querySelector('.containter-betwen').appendChild(userInfo);
    } else {
        const userInfo = document.createElement('p');
        userInfo.innerHTML = `<b>Usuário não logado.</b>`;
        document.querySelector('.containter-betwen').appendChild(userInfo);
    }
}
