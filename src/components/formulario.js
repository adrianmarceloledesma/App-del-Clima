import React from 'react';
import './formulario-estilos.css';

const Form = (props) => {
    return(
        <div className="contenedor-form">
            <form onSubmit={props.getWeather}> 
                <div className="city-name">
                   <input 
                     type="text" 
                     name="city" 
                     placeholder="Nombre de tu Ciudad"
                     autoFocus  requiered
                    />
                     
                </div>
                <div className="country-name">
                   <input 
                     type="text" 
                     name="country" 
                     placeholder="Nombre de tu País"
                     required
                     />  
                </div>
                <div className="boton-obtenerClima">
                   <input 
                     type="submit" 
                     value="Obtener Clima"/>
                </div>
            </form>
        </div>
    )
}
export default Form;