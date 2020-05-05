
export const defaultServices = {
    processResponse
}

// Обработка ответа
function processResponse(response) {
    return response.text()
        .then(
            text => {
                const data = text && JSON.parse(text);
                if (!response.ok) {
                    if (response.status == 401) {
                        logout();
                        window.location.reload(true);
                    }

                    const error = (data && data.message) || response.statusText;
                    return Promise.reject(error);
                }
                return data;
            }
        )
}

// Удаление пользователя из локального хранилища
function logout() {
    localStorage.removeItem('user');
}