const screen = {
    userProfile: document.querySelector('.profile-results'),
    
    renderUser(user) {
        this.userProfile.innerHTML = `
            <div class="profile">
                <img class="profile-avatar" src="${user.avatar_url}" alt="Avatar de ${user.name || user.login}">
                <div class="profile-info">
                    <h2>${user.name || user.login}</h2>
                    <p>${user.bio || 'Sem biografia disponível.'}</p>
                </div>
            </div>

            <div class="profile-counters">
                <div class="followers">
                    <h4>👥Seguidores</h4>
                    <span>${user.followers}</span>
                </div>
                <div class="following">
                    <h4>👥Seguindo</h4>
                    <span>${user.following}</span>
                </div>
            </div>
        `;
    },
    
    renderError(message) {
        this.userProfile.innerHTML = `<p class="error-message">${message}</p>`;
    },
    
    renderLoader() {
        this.userProfile.innerHTML = '<div class="loader"></div>';
        this.userProfile.classList.remove('hide');
    }
};

export { screen };
