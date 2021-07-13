import Carousel from '../Carousel'
import './target.css'

const Target = ({id}) => (
    <div className="localTarget text-center">
        <h3 className="mt-3">Title card</h3>
        <hr />
        <h5>Proyectos</h5>

        <div className="carousel-container mb-3">   
            <Carousel id={id}/>
        </div>
        {/* <img className="localTarget-image mb-3" src="https://i0.wp.com/elfutbolito.mx/wp-content/uploads/2019/04/image-not-found.png?ssl=1" alt="" /> */}

        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit molestias saepe laborum non, sed quas ab atque mollitia dolor earum inventore! Repellat quam ducimus fugiat nam sint debitis similique beatae.</p>

        <div className="localTarget-footer d-flex justify-content-center mb-3">
            <button className="btn btn-outline-primary">Ver más</button>
        </div>
    </div>
)

export default Target