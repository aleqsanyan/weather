import {ADD_NEW_USER, GET_USER_DATA} from "../constants";
//import axios from "axios";
import { UsersType } from "../reducers/userReducers";

 export type AddNewUserType = {
     type: typeof ADD_NEW_USER,
     payload: UsersType
 }


export const addNewUser = (data: UsersType): AddNewUserType => ({type: ADD_NEW_USER, payload: data})

/*export const getUserData = () => (dispatch) => {
    axios.get('https://asdsystems.free.beeceptor.com/user')
        .then( res => {
            debugger
            dispatch({
                type: GET_USER_DATA,
                payload: res.datab

            })
        })
        .catch( err => {
            console.log("error", err)
        })
}*/
