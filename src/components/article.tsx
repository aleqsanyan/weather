import React, {Fragment, useEffect, useState, useRef} from "react"

import {useDispatch, useSelector} from "react-redux"
import {addNewUser} from "../actions/userAction"
import {RootState} from "../reducers"
import {UsersType} from "../reducers/userReducers"
/*import {getUserData} from "../actions/userAction";*/
const Articale: React.FC = () => {
    return (
        <div className='article'>
            <div className='article-picture'>
                <div className='picture'>
                </div>
                <div className='text'>
                    <h2> A Bitcoin miner is buying power plants to mine crypto now</h2>
                    
                </div>
            </div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default Articale

