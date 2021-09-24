import React, {useEffect, useRef, useState} from "react"
import Field from "./field"
import {useDispatch} from "react-redux"
import {DataInterface, isAutoDate} from "../actions/formAction"


const Form: React.FC = () => {
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const dispatch = useDispatch()

    const handleSubmit = (e): void => {
        e.preventDefault();
        if (usernameRef.current !== null && passwordRef.current !== null) {
            const data: DataInterface = {
                username: usernameRef.current?.value,
                password: passwordRef.current?.value
            };
            dispatch(isAutoDate(data));
        }

    };
    return (
        <form className="form" onSubmit={handleSubmit}>
            <Field ref={usernameRef} label="Username:" type="text"/>
            <Field ref={passwordRef} label="Password:" type="password"/>
            <div>
                <button className="button" type="submit">Submit</button>
            </div>
        </form>
    )
}
export default Form