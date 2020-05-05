import * as types from '../../constants/login/ActionTypes';

let user = JSON.parse(localStorage.getItem('user'));

const initialState = user ? {logged: true, user} : {};

// Редьюсер авторизации
export function loginUser(state = initialState, action) {
    switch(action.types) {

        // Действие авторизации
        case types.LOGIN_REQUEST:
            return {
                logged: true,
                user: action.user
            };
        
        // Действие успешной авторизации
        case types.LOGIN_SUCCESS:
            return {
                logged: true,
                user: action.user
            };
        
        // Действие ошибки авторизации
        case types.LOGIN_FAILURE:
            return {};

        // Действие разлогинивания
        case types.LOGOUT_REQUEST:
            return {};

        // Дефолтное действие
        default:
            return state;
    }
}