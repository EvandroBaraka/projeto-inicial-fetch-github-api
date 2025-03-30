import { getUser } from './services/user.js';
import { getRepositories } from './services/repositories.js';
import { getEvents } from './services/events.js';

import { user } from './objects/user.js'
import { screen } from './objects/screen.js'


const inputSearch = document.getElementById('input-search')


async function getUserData(userName) {
    const userResponse = await getUser(userName)
    const repositoriesResponse = await getRepositories(userName)
    const eventsResponse = await getEvents(userName)
    
    console.log(eventsResponse)

    if(userResponse.message === 'Not Found'){
        screen.renderNotFound()
        return
    }

    user.setInfo(userResponse)
    user.setRepositories(repositoriesResponse)
    user.setEvents(eventsResponse)

    screen.renderUser(user)
    screen.renderRepositories(user)
    screen.renderEvents(user)
}

function validateEmptyInput() {
    if (inputSearch.value === '') {
        alert('Digite um nome de usuário do GitHub')
        return true
    }
}


document.getElementById('btn-search').addEventListener('click', () => {
    if(validateEmptyInput()) return
    getUserData(inputSearch.value)
})

inputSearch.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        if (validateEmptyInput()) return
        getUserData(inputSearch.value)
    }
})