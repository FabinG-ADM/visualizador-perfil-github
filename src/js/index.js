const btnSearch = document.getElementById('btn-search');
const inputSearch = document.getElementById('input-search');
const profileResults = document.querySelector('.profile-results');

async function buscarUsuario() {
    const username = inputSearch.value.trim();
    if (username === '') {
        alert('Por favor, digite um nome de usuário.');
        return;
    }
    
    // Exibe o carregamento simples
    profileResults.innerHTML = '<div class="loader"></div>';
    profileResults.classList.remove('hide');
    
    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        
        if (!response.ok) {
            throw new Error('Usuário não encontrado. Verifique o nome digitado.');
        }
        
        const data = await response.json();
        
        // Exibe as informações do perfil do usuário encontrado
        mostrarUsuario(data);
    } catch (error) {
        // Exibe a mensagem de erro
        profileResults.innerHTML = `<p class="error-message">${error.message}</p>`;
    }
}

function mostrarUsuario(user) {
    profileResults.innerHTML = `
        <div class="profile">
            <img class="profile-avatar" src="${user.avatar_url}" alt="Avatar de ${user.name || user.login}">
            <div class="profile-info">
                <h2>${user.name || user.login}</h2>
                <p>${user.bio || 'Sem biografia disponível.'}</p>
            </div>
        </div>
    `;
}

// Executa a busca ao clicar no botão
btnSearch.addEventListener('click', buscarUsuario);

// Executa a busca ao pressionar a tecla "Enter" no campo de entrada
inputSearch.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        buscarUsuario();
    }
});
