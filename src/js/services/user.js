import { baseUrl } from '../variables.js';

async function getUser(username) {
    const response = await fetch(`${baseUrl}/${username}`);
    if (!response.ok) {
        throw new Error('Usuário não encontrado. Verifique o nome digitado.');
    }
    return await response.json();
}

export { getUser };
