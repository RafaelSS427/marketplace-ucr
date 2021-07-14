import React from 'react'
import Card from './Cards/Card'
import  image1 from './img/agregar_proyecto_1.jpg'
import image2 from './img/historial_proyecto1.jpg'
import image3 from './img/historial_proyecto2.jpg'
import image4 from './img/historial_proyecto3.jpg'
import './HistorialVendedor.css'

const cards = [
    {
        id: 1,
        title: 'Agregar Proyecto',
        subtitle: 'presione para agregar un proyecto',
        btn: 'confirmar',
        image: image1,
         
    },
    {
        id: 2,
        title: 'Nombre del Proyecto 1',
        subtitle: 'Descripción del proyecto 1',
        subheader:'Septiembre 14, 2021',
        btn: 'ver Plantilla',
        image: image2,
    },
    {
        id: 3,
        title: 'Nombre del Proyecto 2',
        subtitle: 'Descripción del proyecto 2',
        subheader:'Agosto 10, 2021',
        btn: 'ver Plantilla',
        image: image3,
    },
    {
        id: 4,
        title: 'Nombre del Proyecto 3',
        subtitle: 'Descripción del proyecto 3',
        subheader:'Noviembre 01, 2021',
        btn: 'ver Plantilla',
        image: image4,
    }
]

const HistorialVendedor = () => {

    return (
            <div className="panel-user">
                <div className = "container-fluid p-5" >
                    <div className = "container-fluid p-5" >
                        <h2 className = "display-3 d-flex justify-content-center" > Panel vendedor </h2> 
                        <h3 className = "mb-5 d-flex justify-content-center" > Puedes ver la información de ventas del usuario </h3>
                    </div>
                </div>

                <div className="container d-flex justify-content-center">
                    <div className="row">
                    {
        
                        cards.map(card => (
                            <div className="col-md-3" key={card.id}>
                            <Card title={card.title} imageSource={card.image} subtitle={card.subtitle} fecha={card.subheader} buton={card.btn}/>
                            
                            </div>
                        ))
                    }
                        
                    </div>
                </div>
            
            </div>
    )

}

export default HistorialVendedor