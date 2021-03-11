import React, { useEffect, useState } from 'react';
import Ubicacion from './Ubicacion';
import Axios from 'axios';

function Clima({ ciuIn }) {

  const [UsuarioP, setUsuarioP] = useState({});
  const [Clima, setClima] = useState([]);

  const Objf = (res) => {
    const days = []

    console.log("Ressssss",res)
        
    res.data.list.forEach((date,index)=>{
      if(index===0 || index===8 || index===16 || index===24 || index===32){
        return days.push(date)
       
      }
    });
  
    const ClimaDias = days.map((day)=>{
      return (
        {
          Temperatura: day.main.temp,
          Descripcion: day.weather[0].description,
          Ciudad: res.data.city.name,
          Pais: res.data.city.country,
          Viento: day.wind.speed,
          Presion: day.main.pressure,
          Humedad: day.main.humidity,
          Imagen: day.weather[0].icon,
          date: day.dt_txt
        }
      )
    })
  
    setClima(ClimaDias);
  }

  const Objf2 = (res) => {
    const days = []

    console.log("Ressssss",res)
        
    res.list.forEach((date,index)=>{
      if(index===0 || index===8 || index===16 || index===24 || index===32){
        return days.push(date)
       
      }
    });
  
    const ClimaDias = days.map((day)=>{
      return (
        {
          Temperatura: day.main.temp,
          Descripcion: day.weather[0].description,
          Ciudad: res.city.name,
          Pais: res.city.country,
          Viento: day.wind.speed,
          Presion: day.main.pressure,
          Humedad: day.main.humidity,
          Imagen: day.weather[0].icon,
          date: day.dt_txt
        }
      )
    })
  
    setClima(ClimaDias);
  }
  
  useEffect(() => {

    if(ciuIn !== '') {

      

      fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${ciuIn}&appid=3e99f4098d7145f0ab6e2a7d68e0ec15&lang=es`).then(res => {
              return res.json();
        }).then(function(res) {
            Objf2(res)
        });
      }

     else {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(posicion => {
  
          let Ps = {
            latitude: Math.round(posicion.coords.latitude),
            longitude: Math.round(posicion.coords.longitude)
          }
          setUsuarioP(Ps);
          
          Axios.get(`http://api.openweathermap.org/data/2.5/forecast?lat=${UsuarioP.latitude}&lon=${UsuarioP.longitude}&appid=3e99f4098d7145f0ab6e2a7d68e0ec15&lang=es`)
          .then(res => {
            console.log('res fetch', res)
          Objf(res)
          })
        })
      }
    }

  },[ciuIn, UsuarioP.latitude, UsuarioP.longitude])

    return (
        <div className="container">
            
          {Clima !== [] ? 
          Clima.map((objetos)=>{
            return <Ubicacion Clima={objetos} />
          }) : null}  
          
        </div>
    );
  }


export default Clima;
