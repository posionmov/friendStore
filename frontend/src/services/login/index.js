import { defaultServices } from '../defaultService';

export const loginService = {
    login,
    logout
}

// Логин пользователя
function login(username, password) {

    // дефолтные значения запроса (метод, хедеры, тело)
    const requestParam = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    }

    // Делает запрос и при успешном ответе сохраняет пользователя в локальное хранилище
    return fetch('/users/authenticate', requestParam)
        .then(defaultServices.processResponse)
        .then(
            user => {
                        localStorage.setItem('user', JSON.stringify(user));
                        return user;
                    }
        );
}

// Удаление пользователя из локального хранилища
function logout() {
    localStorage.removeItem('user');
}