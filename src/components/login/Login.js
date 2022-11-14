import React from 'react';
import axios from 'axios';
import swAlert from '@sweetalert/with-react';
import { useNavigate,Navigate } from 'react-router-dom';


function Login (){
    const navigate = useNavigate();

    const submitHandler = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        const regexEmail = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@(([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if(email === " " || password === ""){
            swAlert(<h2>los campos no pueden estar vacios</h2>)
            return
        }
        if(email !== "" && !regexEmail.test(email)){
            swAlert(<h2>debes escribir una direccion de correo electronica valida"</h2>)
            return
        }
        if(email !== 'challenge@alkemy.org' || password !== 'react'){
            swAlert(<h2>credenciales invalidas</h2>)
            return
        }
        
        axios
            .post('http://challenge-react.alkemy.org',{ email ,password})
            .then(res => {
                swAlert(<h2>Ha ingresado correctamente</h2>)
                const tokenRecibido = res.data.token
                sessionStorage.setItem('token',tokenRecibido)
                navigate('/listado')
            })
    }
        let token = sessionStorage.getItem('token')
    return(
        <>
        {token && <Navigate to='/listado'/>}
        <div>
         <h2>formulario de login</h2>
        <form onSubmit={submitHandler} >
            <label>
            <span>
                correo electronico
            </span> <br/>
            <input type="text" name="email" /><br/>
            </label>
            <label>
                <span>
                    Contraseña
                </span><br/>
            <input type="password" name="password" /><br/>
            </label>
            <br/>
            <button type="submit">Ingresar</button>
            
        </form>
        </div>
        </>
    )
}

export default Login;