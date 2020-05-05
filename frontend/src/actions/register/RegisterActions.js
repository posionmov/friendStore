import * as types from '../../constants/register/ActionTypes'
import { defaultRegistrationActions } from '../defaultActions'
import { registrationService } from '../../services/register/index'

import { history } from '../../utils/history/index'

export const registerActions = {
    registration
}

function registration(user) {
    return dispatch => {
        dispatch(defaultRegistrationActions.registrationRequest(user));

        registrationService.registration(user)
            .then(
                user => {
                    dispatch(defaultRegistrationActions.registrationSuccess(user));
                    history.push('/login');
                    // todo alert
                },
                error => {
                    dispatch(defaultRegistrationActions.registrationFailure(error));
                    // todo alert
                }
            )
    }
}