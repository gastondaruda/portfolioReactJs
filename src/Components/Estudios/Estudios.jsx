import React from "react"
import "./estudios.css"
import dw from "../../Imagenes/dw.png"
import js from "../../Imagenes/js.png"
import rj from "../../Imagenes/rj.png"



function Estudios(){
    const studies = [
        {curso:"Curso de React Js",certificado:dw, img:"", link:"https://gastondaruda.github.io/react/", plataforma:"Coderhouse", year:"2022", nota:"9"},
        {curso:"Curso de Javascript",certificado:js, img:"", link:"https://gastondaruda.github.io/javascript/", plataforma:"Coderhouse", year:"2021-2022", nota:"10"},
        {curso:"Curso de Desarrollo Web",certificado:rj, img:"", link:"https://gastondaruda.github.io/coderhouse/", plataforma:"Coderhouse", year:"2021", nota:"9"}
    ]


    return(
        <>
            <h1 className="flex pt-2">Estudios</h1>
            <div className="studies-container flex row pt-2">
                {studies.map((item) => {
                    return(
                        <div className="mt-2 flex column">
                            <h4>{item.curso}</h4>
                            <h4>Dictado por {item.plataforma} en {item.year}</h4>
                            <img className="studies-image" src={item.certificado} alt=""></img>
                            <h4>Finalizado con una nota de {item.nota}</h4>
                            <a href={item.link}>Link al proyecto final de la cursada</a>
                        </div>)
                })}
            </div>
        </>
    )
}

export default Estudios