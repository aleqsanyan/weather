import React from "react"
import {useDispatch} from "react-redux"

import {logOut} from "../actions/formAction"

const Header: React.FC = () => {
    const dispatch = useDispatch()

    const  handelClick = (): void => {
        dispatch(logOut())
    }
    return (
        <div className="header" onClick={handelClick}>
           Log Out
        </div>
    )
}

export default Header