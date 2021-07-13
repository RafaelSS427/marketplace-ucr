const Carousel = ({id}) => {
    return(
        <div id={id} className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://venngage-wordpress.s3.amazonaws.com/uploads/2019/06/project-management-plan-template-2.png" className="d-block w-100" height="300" alt="" />
          </div>
          <div className="carousel-item">
            <img src="https://codewebbarcelona.com/wp-content/uploads/2017/09/plantillas-para-paginas-web.jpg" className="d-block w-100" height="300" alt="" />
          </div>
          <div className="carousel-item">
            <img src="https://img.freepik.com/psd-gratis/plantilla-presentacion-proyectos-negocios-corporativos_150101-30.jpg?size=626&ext=jpg" className="d-block w-100" height="300" alt="" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target={'#' + id} data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target={'#' + id} data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    )
}

export default Carousel