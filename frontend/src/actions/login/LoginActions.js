import { loginService } from '../../services/login/index'
import { defaultLoginActions } from '../defaultActions'

import { history } from '../../utils/history/index'

export const loginActions = {
    loginUser,
    logoutUser
}

// Действие авторизации пользователя
function loginUser(username, password) {
    return dispatch => {
        dispatch(defaultLoginActions.loginRequest({ username }))

        loginService.login(username, password)
                .then(
                    user => { 
                        dispatch(defaultLoginActions.loginSuccess(user));
                        history.push('/')
                    },
                    error => {
                        dispatch(defaultLoginActions.loginFailure(error));
                    }
                )
    }
}

function logoutUser() {
    loginService.logout();
    return defaultLoginActions.logout();
}