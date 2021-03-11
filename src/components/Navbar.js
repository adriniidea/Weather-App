import React from 'react'


export default function Navbar({ CambioR }) {

    const onChange = (e) => {
        console.log(e)
        CambioR(e.target.value)
    }

    return (
    <div className="NavbarStyle">
            <div>
                <h1>The Weather</h1>
                <select id="standard-select" onChange={onChange} value={"Elija una ciudad"}>
                <option value="">Seleccione una Ciudad</option>
                <option value="Rosario">Rosario</option>
                <option value="Cordoba">Cordoba</option>
                <option value="Formosa">Formosa</option>
                <option value="San luis">San luis</option>
                <option value="Mendoza">Mendoza</option>
                </select>
            </div>   
    </div>
    )
}

