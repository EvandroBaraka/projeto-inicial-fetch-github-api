import { baseUrl } from '../variables.js';

async function getUser(userName) {
    const resposta = await fetch(`${baseUrl}/${userName}`)
    return await resposta.json()
}

export { getUser }