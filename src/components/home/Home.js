import Target from './childrensComp/Target/Target';
import './home.css'

const Home = () => {
    return(
        <>
            {/* <div className="mb-5"> */}
                <div className="contenedor-imagen"></div>
                <main className="contenedor-imagen-main margin-top-4">
                    <header className="masthead d-flex">

                        <div className="container text-center mx-auto">
                            <h1 className="title-h1">Titulo fachero</h1>
                            <h3 className="mb-5">
                                <em>Mensaje fachero</em>
                            </h3>

                            <h3>Puedes ver el catalogo de proyectos en este <a href="/categorias">enlace</a></h3>
                            
                        </div>
                    </header>
                </main>
            {/* </div> */}

            <div className="container-fluid p-5 section-one">
                <div className="row text-center" style={{marginBottom:"2.5rem"}}>
                    <h1 className="title-h1">Algunos de nuestros programadores</h1>
                </div>
                <div className="row">
                    <div class="col-6 col-md-4 d-flex justify-content-center">
                        <Target />
                    </div>
                    <div class="col-6 col-md-4 d-flex justify-content-center">
                        <Target />
                    </div>
                    <div class="col-6 col-md-4 d-flex justify-content-center">
                        <Target />
                    </div>
                </div>
            </div>

        </>
    )

}

export default Home