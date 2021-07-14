import React from 'react';
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/slate/bootstrap.min.css';
import './Login.css'


const Login = () => {


    return (
    <>
    
    <h3 className= "title-h3 d-flex justify-content-center">Estamos en el Login</h3>
    <div className="container d-flex justify-content-center">
    <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
     
      <input type="email" 
                       className="form-control" 
                       id="email" 
                       aria-describedby="emailHelp" 
                       placeholder="Enter email" 
                       
                />
     
      <input type="password" 
                        className="form-control" 
                        id="password" 
                        placeholder="Password" 
                    />
        <div className="container-fluid p-5 section-one ">

        <div className="btn d-flex justify-content-center">
        
            
                <a href="#" className="btn btn-primary">
                    <h3><Link to="/HistorialVendedor">aceptar</Link></h3>
                </a>
           

        </div>
      </div>
      </div>
      </div>
      </>
    );
};



export default Login
