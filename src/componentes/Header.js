import React from "react";
import '../componentes/Header.css';

function Header() {
    return (
        <div className="contenedor">
            <h1>Moya Belen Lucia</h1>
            <img className="imagen"
            src={require('../imagen/luci.jpg')}
            alt="foto cv"></img>
            <h2>Objetivo</h2>
            <p>
                Busco un espacio de trabajo exigente donde el desarrollo y la mejora continua me motiven a crecer.
            </p>
            <br/>
            <h6>DATOS PERSONALES:</h6>
            <h3>Telefono: 1132722394</h3>
            <h3>Domicilio:</h3>
            <h3>Localidad: Moron</h3>
            <h3>Email: moyabelenlucia16@gmail.com</h3>
            <h3>Github:</h3>
            <a href="https://github.com/moyalucia1" > github</a>
        </div>
    )
}
export default Header