import React from 'react'
import axios from 'axios';

export default function Login() {
    const hello = () => {
        axios.post('https://kakulengagefaceauthenticatorv1.azurewebsites.net//api/auth/signin', 'hello')
    }
    return (
        <>
            <div>
                <button onClick={hello}>Hello kakul</button>
            </div>

        </>
    )
}
