import React, { useState } from 'react'
import Button from './Button';
import Input from './input/Input'
import { Link } from "react-router-dom";
import './css/register.css'
export default function Register() {
    const [register_field] = useState([
        { name: 'name', type: 'text', placeholder: 'Enter the name', },
        { name: 'email', type: 'email', placeholder: 'Enter the Email', },
        { name: 'password', type: 'password', placeholder: 'Enter the password', },
    ]);
    const [success, setData] = useState({status:false,data:''});
    const [error, SetError] = useState([{
        name: '', email: '', passwrod: ''
    }]);
    const errorRemove = (event) => {
        const event_name = event.target.name;
        SetError(prevState => [{ ...prevState[0], [event_name]: "" }])
    }
    const closeAlert=()=>{
        setData({status:false})
    }
    const submitHandler = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const inputData = {
            name: formData.get('name'),
            email: formData.get('email'),
            password: formData.get('password'),
        };
        if (inputData.name.length === 0) {
            SetError(prevState => [{ ...prevState[0], name: "* Name field cannot be empty" }])
        }
        if (!inputData.email) {
            SetError(prevState => [{ ...prevState[0], email: "* Email field cannot be empty" }])
        } else if (!/\S+@\S+\.\S+/.test(inputData.email)) {
            SetError(prevState => [{ ...prevState[0], email: "* Invalid email address" }])
        }

        if (inputData.password.length === 0) {
            SetError(prevState => [{ ...prevState[0], password: "* Password field cannot be empty" }])
        }
        if (inputData.name.length !== 0 && inputData.email.length !== 0 && inputData.password.length !== 0 && /\S+@\S+\.\S+/.test(inputData.email)) {
            fetch(process.env.REACT_APP_API_URL + 'register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(inputData),
            })
                .then(response => response.json())
                .then(data => {
                    if (data.error === true) {
                        setData({status:true ,data:'Something is wrong please try again'});
                    } else {
                        setData({status:true,data:'Registration Successs Please Login'});
                        event.target.reset();
                    }
                }).catch(error => {
                    setData({status:true,data:'Please Check error Handling'});
                })
        }
    }
    return (
        <div className='body-form'>
            <div className=''>
                {success.status===true && <div class="alert-success" role="alert">
                    <strong>{success.data}</strong>
                    <button onClick={closeAlert} type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">X</button>
                </div>
                }
            </div>
            <div className='card-form'>
                <div className='header-card'>
                    <h3>Registeration Form</h3>
                </div>
                <div className='body-card'>
                    <form onSubmit={submitHandler}>
                        {
                            register_field.map((item, index) => {
                                return <Input key={index} errorRemove={errorRemove} error={error} name={item.name} type={item.type} placeholder={item.placeholder} />
                            })
                        }
                        <div className='register-button'>
                            <Button btn_text={'Submit'} />
                            <Link to={'/login'} >Login</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div >
    )
}
