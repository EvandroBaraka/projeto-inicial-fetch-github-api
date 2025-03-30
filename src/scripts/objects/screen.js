const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML = `<div class="info">
                                        <img src="${user.avatarUrl}" alt="Foto de perfil do usuário"/>
                                        <div class="data">
                                            <h1>${user.name ?? 'Usuário sem nome cadastrado 😢'}</h1>
                                            <p>${user.bio ?? 'Usuário sem bio cadastrada 😢'}</p>
                                            <br/>
                                            <p>👥Seguidores: ${user.followers}<br/>
                                            Seguindo: ${user.following}</p>
                                        </div>
                                     </div>`;
    },
    renderRepositories(user) {
        let repositoriesItens = ''
        user.repositories.forEach(repo => repositoriesItens += `<li><a href="${repo.html_url}" target="_blank">${repo.name}</a></li>`)

        if (user.repositories.length > 0) {
            this.userProfile.innerHTML += `<div class="repositories section">
                                                <h2>Repositórios</h2>
                                                <ul>${repositoriesItens}</ul>
                                            <?div>`
        }
    },
    renderEvents(user) {
        let eventsItens = null

        if (user.events.length > 0) {
            eventsItens = ''
            user.events.forEach(event => {
                if (event.type === 'PushEvent') {
                    event.payload.commits.forEach(commit => eventsItens += `<li><a href='${event.repo.url}' target='_blank'>${event.repo.name} - ${commit.message}</a></li><br/>`)
                }
                if (event.type === 'CreateEvent') {
                    eventsItens += `<li><a href='${event.repo.url}' target='_blank'>${event.repo.name} - “Sem mensagem de commit”.</a></li><br/>`
                }
            })
        }

        this.userProfile.innerHTML += `<div class="events section">
                                                <h2>Eventos</h2>
                                                <ul>${eventsItens ?? 'Sem eventos recentes'}</ul>
                                            <?div>`
    },
    renderNotFound() {
        this.userProfile.innerHTML = '<h3>Usuário não encontrado</h3>'
    }
}

export { screen }