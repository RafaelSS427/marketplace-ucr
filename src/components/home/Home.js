import { Link } from 'react-router-dom'
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
                            <h1 className="title-h1">Titulo</h1>
                            <h3 className="mb-5">
                                <em>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea obcaecati eaque quaerat reprehenderit atque veritatis </em>
                            </h3>

                            <h3>Puedes ver el catalogo de proyectos en este <Link to="/catalogo">enlace</Link></h3>
                            
                        </div>
                    </header>
                </main>
            {/* </div> */}

            <div className="container-fluid p-5 section-one">
                <div className="row text-center" style={{marginBottom:"3rem"}}>
                    <h1 className="title-h1">¿Quienes somos?</h1>
                </div>
                <div className="row">
                    <div className="col-6 col-md-4 d-flex flex-column align-items-center justify-content-center">
                        <div className="style-container div-descp p-4 text-center d-flex flex-column justify-content-center">
                            <h3 className="mb-3">¿Qué hacemos?</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam autem quis obcaecati praesentium est dolorem modi ipsa iste. Rerum dolor sint blanditiis vero laudantium aperiam itaque eos explicabo quos ipsam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo dolores ullam fugit perferendis. In saepe id architecto tenetur aliquid suscipit voluptas optio expedita, ducimus, corrupti est error nam dolorem maxime.</p>
                        </div>
                    </div>
                    <div className="col-6 col-md-8 d-flex justify-content-center">
                            <img className="style-container" style={{width:'100%', height:'100%'}} src="https://www.juancmejia.com/wp-content/uploads/2012/04/Plantilla-wordpress-Nova.jpg" alt="" />
                    </div>
                </div>
            </div>

            <div className="container-fluid p-5 section-two">
                <div className="row text-center" style={{marginBottom:"3rem"}}>
                    <h1 className="title-h1">Programadores</h1>
                </div>
                <div className="row">
                    <div className="col-6 col-md-4 d-flex justify-content-center">
                        <Target id="carousel1" />
                    </div>
                    <div className="col-6 col-md-4 d-flex justify-content-center">
                        <Target id="carousel2" />
                    </div>
                    <div className="col-6 col-md-4 d-flex justify-content-center">
                        <Target id="carousel3" />
                    </div>
                </div>
            </div>

            <footer className="bg-dark text-center p-4">
                <p className="h3">MarketplaceUCR &copy;</p>
            </footer>

        </>
    )

}

export default Home