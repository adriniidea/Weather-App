import React from 'react'

export default function Ubicacion(props) {
    console.log('clima*', props)

    const { Temperatura, Descripcion, Ciudad, Pais, Viento, Presion, Humedad, Imagen, date } = props.Clima;
    const kelvin = 273.5;

    return (
        <div className="Uclima">
            <div>
                <div>
                    <h1>{Math.round (Temperatura - kelvin).toFixed(0)} &deg; C , {Descripcion}</h1>
                    <h4>{Ciudad}</h4>
                    <p>{Pais}</p>
                </div>
                <div>
                    <img src={`http://openweathermap.org/img/wn/${Imagen}@2x.png`} alt="weather-img" />
                </div>
            </div>
            <div>
            <div>
                    <p><b>Dia</b></p>
                    <h2>{(date).slice(0,10)}</h2>
                    <p><b>Viento</b></p>
                    <h2>{Viento} (km/hr)</h2>
                    <p><b>Presión</b></p>
                    <h2>{Presion} (millibar)</h2>
                    <p><b>Humedad</b></p>
                    <h2>{Humedad} (%)</h2>
                </div>
            </div>
        </div>
    )
}
