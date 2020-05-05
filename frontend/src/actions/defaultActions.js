import * as registerTypes from '../constants/register/ActionTypes'

import * as loginTypes from '../constants/login/ActionTypes';

export const defaultRegistrationActions = {
    registrationRequest,
    registrationFailure,
    registrationSuccess
}

export const defaultLoginActions = {
    loginRequest,
    loginSuccess,
    loginFailure,
    logout
}

function registrationRequest(user) {
    return { 
        type: registerTypes.REGISTER_REQUEST,
        user 
    }
}

function registrationFailure(error) {
    return {
        type: registerTypes.REGISTER_FAILURE,
        error
    }
}

function registrationSuccess(user) {
    return {
        type: registerTypes.REGISTER_SUCCESS,
        user
    }
}

function loginRequest(user) { 
    return { 
        type: loginTypes.LOGIN_REQUEST, 
        user 
    };
}

function loginSuccess(user) { 
    return { 
        type: loginTypes.LOGIN_SUCCESS, 
        user 
    };
}

function loginFailure(error) { 
    return { 
        type: loginTypes.LOGIN_FAILURE, 
        error 
    };
}

function logout() {
    return { 
        type: loginTypes.LOGOUT_REQUEST 
    };
}