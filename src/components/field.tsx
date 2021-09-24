import React from 'react'

type PropsType = {
    label: any
    type: string
}

type Ref = HTMLInputElement

const Field = React.forwardRef<Ref, PropsType>(({label, type}, ref) => {
    return (
        <div>
            <label className="label" >{label}</label>
            <input ref={ref} type={type} className="input"/>
        </div>
    )
})

export default Field