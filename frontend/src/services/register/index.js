import { defaultServices } from '../defaultService';

export const registrationService = {
    registration
}

function registration(user) {
    const requestParams = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch('/user/register', requestParams)
        .then(defaultServices.processResponse)
}

