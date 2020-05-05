import React from 'react';
import './info-clima.css';

function InfoClima (props){

    return(
        <div>
            <div className="error">
                {    
             // si props.error(state= error: null) es nulo, osea que no se ingresa bien la ciudad, etc se escribe el state 
                // que esta en el 'else'  
                    props.error &&  <p>{props.error}</p>  
                   
                }
            </div>
            <div className="info">
                {
                    props.temperatura &&
                        <div>
                            <p>Localización: {props.ciudad}, {props.pais}</p>
                            <p>Tiempo: {props.descripcion}</p>
                            <p>Temperatura: {props.temperatura} °C</p>
                            <p>Humedad: {props.humedad}</p>
                            <p>Velocidad del Viento: {props.velocidadViento}</p>
                        </div>
            
                   
                    
                }
            </div>
        </div>
    )
}

export default InfoClima;