import Carousel from '../home/childrensComp/Carousel'
import './catalogo.css'

const Publicacion = ({id}) => {
    return(
        <div className="w-100 border border-primary p-4 contenedor-publicacion mt-4">
            <div className="header-publicación d-flex justify-content-between">
                <h4>Title</h4>
                <h4>13/07/2021</h4>
            </div>
            <hr />
            <div className="desc-publicacion">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio qui, autem aliquam magni est obcaecati aliquid debitis facilis tenetur cupiditate ex sint aut pariatur. A asperiores repellat cumque quis mollitia.
                </p>
            </div>
            <hr />
            <div>
                <h5>Imagenes del proyecto</h5>
                <Carousel id={id} />
            </div>
            <hr />
            <div className="d-flex justify-content-between">
                <div>
                    <h6>Categorias:</h6>
                    <span className="border border-primary p-1">Diseño</span>
                    <span className="border border-primary p-1 ms-1">Multimedia</span>
                </div>
                <div>
                    <h6>Precio:</h6>
                    <p>$100</p>
                </div>
                <div>
                    <button className="btn btn-primary">Ver más</button>
                </div>
            </div>
        </div>
    )
}

const Catalogo = () => {
    return(
        <div className="catalogo-container">
            <div className="container p-4">
                <div className="row">
                    <div className="col-6 col-md-4 p-4 catalogo-container-style filtro">
                        <h3>Filtrado de busqueda</h3>
                        <hr />
                        <div>
                            <h5>Categorias de proyectos</h5>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" defaultValue id="input1" defaultChecked />
                                <label className="form-check-label" htmlFor="input1">
                                Programación y tecnología
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" defaultValue id="input2" />
                                <label className="form-check-label" htmlFor="input2">
                                Diseño
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" defaultValue id="input3" />
                                <label className="form-check-label" htmlFor="input3">
                                Multimedia
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" defaultValue id="input4" />
                                <label className="form-check-label" htmlFor="input4">
                                Marketing digital
                                </label>
                            </div>
                        </div>
                        
                        <hr />

                        <h5>Habilidades</h5>
                        <div>
                            <input placeholder="Seleccionar habilidades" list="habList" className="form-control" />

                            <datalist id="habList">
                                <option value="Diseño gráfico" />
                                <option value="Java" />
                                <option value="MySQL" />
                                <option value="php" />
                            </datalist>
                        </div>
                        <hr />
                        <div>
                            <h5>Fecha publicación</h5>
                            <select className="form-select" aria-label="Default select example">
                                <option selected>Hace 3 días</option>
                                <option value={1}>Hace 1 semana</option>
                                <option value={2}>hace 2 semanas</option>
                                <option value={3}>Hace 1 mes</option>
                            </select>
                        </div>
                        <hr />
                        <div>
                            <h5>Idiomas</h5>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" defaultValue id="input1" />
                                <label className="form-check-label" htmlFor="input1">
                                Inglés
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" defaultValue id="input2" />
                                <label className="form-check-label" htmlFor="input2">
                                Español
                                </label>
                            </div>

                            <hr />
                            <div>
                                <h5>Ubicación del cliente</h5>
                                <input placeholder="Selecciona las ubicaciones de interés" list="ubcList" className="form-control" />

                                <datalist id="ubcList">
                                    <option value="Limón" />
                                    <option value="Cartago" />
                                    <option value="San José" />
                                    <option value="Heredia" />
                                    <option value="Puntarenas" />
                                    <option value="Guanacaste" />
                                    <option value="Alajuela" />
                                </datalist>
                            </div>
                            <hr />
                            <div>
                                <button className="btn btn-primary w-100">Guardar filtrado</button>
                            </div>
                        </div>

                    </div>
                    <div className="col-6 col-md-7 ms-5 p-4 catalogo-container-style">
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Buscar..." aria-describedby="button-addon2" />
                            <button className="btn btn-primary" type="button" id="button-addon2"><i className="fas fa-search"></i></button>
                        </div>
                        <hr />
                        <div className="contenedor-publicaciones">
                            <Publicacion id="carousel-publicacion1" />
                            <Publicacion id="carousel-publicacion2" />
                            <Publicacion id="carousel-publicacion3" />
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    )

}

export default Catalogo