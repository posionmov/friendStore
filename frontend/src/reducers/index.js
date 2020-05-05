import { combineReducers } from 'redux';

import { loginUser } from './login/index'
import { registration } from './register/index'

// Комбинированный редьюсер для обьединения всех редьюсеров
const rootReducer = combineReducers(
    {
        loginUser,
        registration,
    }
)

export default rootReducer;