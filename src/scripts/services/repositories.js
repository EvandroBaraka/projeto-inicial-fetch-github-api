import { baseUrl, quantityPerPage } from '../variables.js';

async function getRepositories(userName) {
    const resposta = await fetch(`${baseUrl}/${userName}/repos?per_page=${quantityPerPage}`)
    return await resposta.json()
}

export { getRepositories }