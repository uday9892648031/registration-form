import React from 'react'
import { NavLink } from 'react-router-dom'

const Details = props => {
    const { username,password} = (props.location.state)
    console.log(props.location.state)
    return (
        <div>
            <NavLink to="/" className="btn btn-primary">
                Go back
            </NavLink>
            <div>
                <strong>Username:</strong>{username}
            </div>
            <div>
                <strong>Password:</strong>{password}
            </div>
        </div>
    )
}

export default Details;
