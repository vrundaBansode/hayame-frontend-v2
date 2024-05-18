import React, { useState, useEffect } from 'react';
import "./forgotPassword.css";
import Navbar from '../../components/Navbar/Navbar';

const ForgotPassword = () => {
    const [Inputs, setInputs] = useState();

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs((values) => ({ ...values, [name]: value }));
    };


    const handelForgotPassword = async (e) => {
        e.preventDefault();

        let response = await fetch('http://127.0.0.1:8000/api/forgot-password/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'email': Inputs.email
            })
        })
        let data = await response.json()

        alert(data.response);
    }


    return (
        <div className="row m-0 justify-content-center align-items-center forgot-password-row">
            <Navbar />
            <div className="col-11 col-sm-11 col-md-6 col-lg-4 forgot-password-card">
                <div className="forgot-password-header">
                    <h3 className="forgot-password-h3">Forgot Password</h3>
                </div>
                <div className="forgot-password-form">
                    <form onSubmit={handelForgotPassword}>
                        <div class="mb-4 p-0">
                            <label for="email" className="mb-2">Enter your registered email</label>
                            <input type="email" class="input-field" placeholder="Email" name="email" onChange={handleChange} required />
                        </div>
                        <div class="mb-4 p-0">
                            <button className="forgot-password-form-btn">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword