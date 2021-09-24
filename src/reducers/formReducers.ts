import { DataInterface } from '../actions/formAction'
import {
    ADD_NEW_LOGIN,
    IS_AUTH, LOG_OUT,
} from '../constants'

export type Actions = {
    type: typeof IS_AUTH | typeof LOG_OUT | typeof ADD_NEW_LOGIN
    payload?: DataInterface | boolean
}
export type InitialStateType = {
    isExistUser: Array<string | number>,
    isExist: boolean
}



const ACTION_HANDLERS = {
    [IS_AUTH]: (state: InitialStateType , action: Actions) => {
        return {
            ...state,
            isExist: action.payload,
        }
    },
    [LOG_OUT]: (state: InitialStateType) => {
        return {
            ...state,
            isExist: false,
        }
    },
    [ADD_NEW_LOGIN]: (state: InitialStateType, action) => {
        return {
            ...state,
            isExistUser: state.isExistUser.push(action.payload),
        }
    }
}


const initialState: InitialStateType = {
    isExistUser: [],
    isExist: false
}


const formReducer = (state = initialState, action: Actions)  => {
    const handler = ACTION_HANDLERS[action.type]
    return handler ? handler(state, action) : state
}

export default formReducer