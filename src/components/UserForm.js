import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

export default function UserForm() {
    const [state, setState] = useState({
        username: "",
        password: ""
    })
    const [userErr, setuserErr] = useState(false)
    const [passErr, setpassErr] = useState(false)
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setState(prevState => ({
            ...prevState,
            [name]: value
        }));
        let username1 = document.getElementById("username1").value;
        let password1 = document.getElementById("password1").value;
        if (username1.length > 4) {
            console.log("item length is greater than 3");
            setuserErr(true)
        }
        else {
            setuserErr(false)
        }

        if (password1.length > 4) {
            console.log("item length is greater than 3");
            setpassErr(true)
        }
        else {
            setpassErr(false)
        }
    };

    return (
        <div>
            <h1>Registration Form</h1>
            <div>
                <label>Username</label>
                <input type="text"
                    placeholder="Enter Username"
                    name="username"
                    id="username1"
                    className='form-control'
                    onChange={handleInputChange}
                    autoComplete="off"
                />
                <span className='err-col'>{userErr ? "Please enter correct values" : ""}</span>
            </div>
            <div>
                <label>password</label>
                <input type="password"
                    placeholder="Enter password"
                    name="password"
                    id="password1"
                    className='form-control'
                    onChange={handleInputChange}
                    autoComplete="off"
                />
                <span className='err-col'>{passErr ? "Please enter correct values" : ""}</span>
            </div>
            <div>&nbsp;</div>
            <Link
                className='btn btn-primary'
                to={{
                    pathname: "/details",
                    state
                }}
                id="submit"
            >
                Register
            </Link>
        </div>
    )
}
