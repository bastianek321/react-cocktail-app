import React, { useRef, useState } from "react"
import credentials from "../data/adminCredentials.json"

export default function AdminLogin() {
    let [error, setError] = useState()
    let login = useRef()
    let password = useRef()

    const validate = e => {
        e.preventDefault()
        setError('')
        if (login.current.value !== credentials.login || password.current.value !== credentials.password) {
            setError("Wrong login or password!")
        } else {
            setError("Successfully logged in")
            localStorage.setItem('admin', 'true')
        }
    }

    return (
        <div className="row">
            <div className="col">
                <h3>{error}</h3>
                <form onSubmit={validate}>
                    <input type="text" ref={login} required placeholder="Login..." />
                    <input type="password" ref={password} required placeholder="Password..." /><br />
                    <input type="submit" className="btn btn-primary" value="Log in"></input>
                </form>
            </div>
        </div>
    )
}