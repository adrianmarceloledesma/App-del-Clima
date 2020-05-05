import React from 'react';
import './App.css';
import Form from './components/formulario'
import InfoClima from './components/informacion-clima';

class App extends React.Component {
   state = {
     temperatura: '',
     descripcion:'',
     humedad:'',
     velocidadViento:'',
     ciudad:'',
     pais:'',
     error:null,
    
   }
   
  // la palabra 'async' va de la mano con la otra palabra 'await'
  obtenerClima = async e => {
    e.preventDefault();

    // con el 'target.elements' accede a todos los elementos del formulario en donde esta almacenado la propiedad 'name'
    // name='city'  name='country'
    const {city, country} = e.target.elements;

    // extrae la propiedad value y asi obtiene el valor de lo que escribe el usuario
    const cityValue = city.value;
    const countryValue = country.value;
   
     
    if(cityValue && countryValue){
          // tipiamos la direccion
       const ApiURL = `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${cityValue},${countryValue}
       &appid=aa3cf694d765215e8c80b0b312c7f7e3&units=metric`;

         // ejecutar una peticion, el navegador tiene una API llamada 'fetch()' que se encarga de esto
       const respuesta =await fetch(ApiURL) ;
       //  como la peticion va a tomar tiempo ponemos una palabra clave 'await' y  guardamos la respuesta en una constante
       
    //tengo que convertir esa respuesta en un formato que se pueda leer y tambien la palabra clave 'await' porque va tardar
       const datos = await respuesta.json() ;
       
       
       
       this.setState({
          temperatura:datos.main.temp,
          descripcion:datos.weather[0].description,
          humedad:datos.main.humidity,
          velocidadViento:datos.wind.speed,
          ciudad:datos.name,
          pais:datos.sys.country,
          error:null
       
       });

    }else{
       this.setState({
         error:'ERROR: Revisa los Datos Ingresados'
       })
    }

  }

  render(){
    return (
      <div>
        <div >
          <Form getWeather={this.obtenerClima}/>
          <InfoClima  {...this.state}/>
          {/* los '...' es como mandarle todos los objetos del estado como props, en vez de estar escribiendo uno por uno */}
        </div>
      </div>
    );
  }
}

export default App;
