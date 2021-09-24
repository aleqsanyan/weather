import React, {useState} from "react"
import {NavLink} from "react-router-dom"



const Navbar: React.FC = () => {
    //const [toggleState, setToggle] = useState<number>(1)

    return (
        <nav className="nav">
            <div className="item">
                <NavLink to='/user' activeClassName="active" >User</NavLink>
            </div>
            <div className="item">
                <NavLink to='/post' activeClassName="active">Post</NavLink>
            </div>
        </nav>
    )
}

export default Navbar
