import React from 'react';
import { Link } from 'react-router-dom'

const Registro = () => {

    return(
<>
      <div className="container mt-lg-5">
          <div className="row d-flex justify-content-center">
            <div className="col-4 col-md-4">
              <div className="card">
                <div className="card-header text-center">
                  <h4>Registro</h4>
                </div>
                <div className="card-body">
                <div className="mb-3">
                      <input type="nombre" className="form-control"  placeholder="Ingrese Nombre Completo" />  
                  </div>
                  <div className="mb-3">
                      <input type="nombreEmp" className="form-control"  placeholder="Ingrese Nombre de su Empresa" />  
                  </div>
                  <div className="mb-3">
                      <input type="telefono" className="form-control"  placeholder="Ingrese Telefono" />  
                  </div>

                  <div className="mb-3">
                      <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Ingrese su correo electronico" />  
                  </div>
                    
                  <div className="mb-3">
                    <input type="password" className="form-control" id="password" placeholder="Ingrese su Contraseña" />
                  </div>
                        
                  <Link to="/HistorialVendedor" className="btn btn-primary w-100">Registrarse</Link>  
                </div>
              </div>
            </div>
          </div>
      </div>
      </>
    )

}

export default Registro
