import React from 'react';
import './Card.css';
import 'bootswatch/dist/slate/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Card = ({title,imageSource,subtitle,fecha,buton}) =>{
    
return (
<div className= 'card-container'>
    
            <div className="image-container d-flex justify-content-center">         
                <img src={imageSource} alt=""/>
            </div>
             <div className='card-content '>
                <div className="card-title">
                    <h3>{title}</h3>
                </div>

            	<div className="card-body">
               		<p className="card-text text">{subtitle}</p>
                    <p className="card-text text">{fecha} </p>
            	</div>
            	<div className="btn d-flex justify-content-center">
                	<button> 
                    	<a href="#" className="btn btn-primary">{buton}</a>
                	</button>
            	</div>
             </div>
</div>
        )
    }
    export default Card