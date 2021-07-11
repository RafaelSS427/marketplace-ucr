import './target.css'

const Carousel = () => {
    return(
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://computerhoy.com/noticias/life/9-paginas-webs-descargar-plantillas-gratis-powerpoint-75805" className="d-block w-100" alt="" />
          </div>
          <div className="carousel-item">
            <img src="https://codewebbarcelona.com/wp-content/uploads/2017/09/plantillas-para-paginas-web.jpg" className="d-block w-100" alt="" />
          </div>
          <div className="carousel-item">
            <img src="https://4.bp.blogspot.com/-aRfo5Ayto0k/XJjO8n0Qg0I/AAAAAAAADME/JfyuuOhLGjIgckpNBJf0GoBu82ptefuBACLcBGAs/s1600/templated.jpg" className="d-block w-100" alt="" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    )
}

const Target = () => (
    <div className="localTarget text-center">
        <h3 className="mt-3">Title card</h3>
        <hr />
        <h5>Proyectos</h5>

        <div className="carousel-container">   
            <Carousel />
        </div>
        {/* <img className="localTarget-image mb-3" src="https://i0.wp.com/elfutbolito.mx/wp-content/uploads/2019/04/image-not-found.png?ssl=1" alt="" /> */}

        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit molestias saepe laborum non, sed quas ab atque mollitia dolor earum inventore! Repellat quam ducimus fugiat nam sint debitis similique beatae.</p>

        <div className="localTarget-footer d-flex justify-content-center mb-3">
            <button className="btn btn-outline-primary">Ver más</button>
        </div>
    </div>
)

export default Target