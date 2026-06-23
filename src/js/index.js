import { getUser } from './services/user.js';
import { screen } from './objects/screen.js';

const btnSearch = document.getElementById('btn-search');
const inputSearch = document.getElementById('input-search');

async function buscarUsuario() {
    const username = inputSearch.value.trim();
    if (username === '') {
        alert('Por favor, digite um nome de usuário.');
        return;
    }
    
    screen.renderLoader();
    
    try {
        const userData = await getUser(username);
        screen.renderUser(userData);
    } catch (error) {
        screen.renderError(error.message);
    }
}

// Executa a busca ao clicar no botão
btnSearch.addEventListener('click', buscarUsuario);

// Executa a busca ao pressionar a tecla "Enter" no campo de entrada
inputSearch.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        buscarUsuario();
    }
});
