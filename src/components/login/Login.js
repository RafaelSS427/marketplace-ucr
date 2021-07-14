import React from 'react';
import { Link } from 'react-router-dom'
import './Login.css'


const Login = () => {

    return (
    <>
      <div className="container mt-lg-5">
          <div className="row d-flex justify-content-center">
            <div className="col-4 col-md-4">
              <div className="card">
                <div className="card-header text-center">
                  <h4>Login</h4>
                </div>
                <div className="card-body">
                  <div className="mb-3">
                      <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" />  
                  </div>
                    
                  <div className="mb-3">
                    <input type="password" className="form-control" id="password" placeholder="Password" />
                  </div>
                        
                  <Link to="/HistorialVendedor" className="btn btn-primary w-100">Aceptar</Link>  
                </div>
              </div>
            </div>
          </div>
      </div>
      </>
    );
};



export default Login
