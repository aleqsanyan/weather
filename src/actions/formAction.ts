import {ADD_NEW_LOGIN, IS_AUTH, LOG_OUT} from "../constants"
import axios from "axios"
import {Dispatch} from "react"
import { Actions } from "../reducers/formReducers"
import {inflate} from "zlib";

type LogOutActionType = {
    type: typeof LOG_OUT
}

export interface DataInterface {
    username: string
    password: string
}

export const logOut = (): LogOutActionType => ({type: LOG_OUT})

export const isAutoDate = (data: DataInterface) => (dispatch: Dispatch<Actions>) => {
    axios.get('https://asdsystems.free.beeceptor.com/auth')
        .then( res => {
             if(res.status === 200) {
                 dispatch({
                     type: IS_AUTH,
                     payload: true
                 })
                 dispatch({
                     type: ADD_NEW_LOGIN,
                     payload: data
                 })
             }
        })
        .catch( err => {
            console.log("error", err)
        })
}



