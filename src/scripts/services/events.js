import { baseUrl, quantityPerPage } from '../variables.js';

async function getEvents(userName) {
    const resposta = await fetch(`${baseUrl}/${userName}/events?per_page=${quantityPerPage}`)
    return await resposta.json()
}

export { getEvents }