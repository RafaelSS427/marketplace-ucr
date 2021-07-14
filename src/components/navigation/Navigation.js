import { Link } from 'react-router-dom'
import './navigation.css'

const Navigation = () => {
    const pointer = { cursor: 'pointer' }

    return(
        <div className="navbar navbar-expand-lg fixed-top navbar-light-blue bg-light-blue">
            <div className="container">
                <Link to="/" className="navbar-brand">
                    MarketplaceUCR
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-md-auto">
                    <li className="nav-item">
                            <Link to="/catalogo" style={pointer} className="nav-link"><i className="fas fa-stream"></i> Proyectos</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/registro" style={pointer} className="nav-link"><i className="fas fa-user-plus"></i> Sign up</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/login" style={pointer} rel="noopener" className="nav-link"><i className="fas fa-user"></i> Sign in</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )

 }

 export default Navigation