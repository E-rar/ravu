import React from 'react';
import EmailLogin from '../Auth/LoginEmail/LoginEmail'
import BaseModal from "../../components/layout/Modal/Modal"
import Button from 'react-bootstrap/Button';
import {useAuth} from '../../contexts/AuthContext'

const Login = () => {
    const {signInWithGoogle,currentUser } = useAuth()

    return (
        <div >
            <h1 className="text-center">Welcome to Ravu! 2</h1>
            <div className="container d-flex justify-content-around">

                <BaseModal title="Login with Email" content={<EmailLogin />} />
                <Button onClick={() => 
                            signInWithGoogle()
                            .then(user => console.log(user))
                            .catch(error => console.log(error))
                            }>
                            Google
                </Button>

            </div>
        </div>
    );
}

export default Login;