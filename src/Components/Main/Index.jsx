import React from "react"
import bg from "../../Imagenes/bg3.png"
import profile from "../../Imagenes/gasty2.jpg"
import "./main.css"


function Index(){
    return(
        <>
            <div className="flex row index">
                <div className="flex column color1">
                    <h1>Hola, soy Gastón Da Ruda</h1>
                    <h1 className="color2 index-title">Frontend Developer</h1>
                </div>
                <div>
                    <img src={bg} alt="" className="bg"/>
                </div>
            </div>
            <div className="flex row container-detail">
                <img src={profile} alt="" className="bg-profile"/>
                <div className="flex column index profile-detail">
                    <h4 className="color2 index-title">¿Quién soy?</h4>
                    <h2 className="color3">Me llamo Gastón y soy Desarrollador frontend Jr.(React Js).</h2>
                    <h5 className="color1 text-center">Tengo 27 años, soy de Argentina y tengo experiencia como desarrollador. Actualmente estoy en mi segundo proyecto real, beneficio de Coderhouse por tener excelente nota, en donde pongo en práctica mis conocimientos y me supero cada día.</h5>
                </div>
            </div>
        </>
            )
}

export default Index