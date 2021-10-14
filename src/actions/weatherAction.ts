import axios, {AxiosResponse, AxiosPromise} from "axios";
import {GET_POST_DATA, UPDATE_NAME, EDIT_NAME, DELETE_POST} from "../constants";
import {Dispatch} from "react";
import {Actions} from "../reducers/formReducers";

export type  GetPostDataType = {
    type: typeof GET_POST_DATA
    payload?: any
}

export interface ObjectType {
    id: number
    title?: string | boolean | number
    isHidden?: boolean
}

export type UpdateNameType = {
    type: typeof UPDATE_NAME
    payload: ObjectType
}

export type EditNameType = {
    type: typeof EDIT_NAME
    payload: ObjectType
}

export type DeletePostType = {
    type: typeof DELETE_POST
    payload: number
}


export const setUrlToApp = (name) => (dispatch: Dispatch<GetPostDataType>) => {
    debugger
    axios.get('https://api.openweathermap.org/data/2.5/weather?q=' + name + '&appid=32427e330d8e8c56686efa7b0de589cf')
        .then(res => {
            dispatch({
                type: GET_POST_DATA,
                payload: res
            })
        })
}


export const updateName = (data: ObjectType):UpdateNameType => ({type: UPDATE_NAME, payload: data})
export const editName = (data: ObjectType): EditNameType => ({type: EDIT_NAME, payload: data})
export const deletePost = (id: number): DeletePostType => ({type: DELETE_POST, payload: id})