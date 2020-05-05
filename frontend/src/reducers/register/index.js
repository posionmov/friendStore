import * as type from '../../constants/register/ActionTypes';

// Редьюсер регистрации
export function registration(state = {}, action) {
    switch (action.type) {

        // Действие регистрации
        case type.REGISTER_REQUEST:
            return {
                registration: true
            }

        // Действие успешной регистрации
        case type.REGISTER_SUCCESS:
            return {};
            
        // Действие ошибки регистрации
        case type.REGISTER_FAILURE:
            return {};

        // Дефолтное действие
        default:
            return {};
    }
}