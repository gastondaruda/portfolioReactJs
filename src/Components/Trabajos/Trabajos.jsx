import React from "react"
import "./trabajos.css"
import bitcoin from "../../Imagenes/bitcoin.png"
import react from "../../Imagenes/react.png"
import javascript from "../../Imagenes/javascript.png"
import onesearch from "../../Imagenes/onesearch.png"
import recetas from "../../Imagenes/recetas.png"
import desarrolloWeb from "../../Imagenes/desarrolloWeb.png"

function Trabajos(){

    const projects = [
        {name:"Proyecto React Js", image: react, url:"https://github.com/gastondaruda/react", gitpages:"https://gastondaruda.github.io/react/", herramient:"React Js"},
        {name:"OneSearch Uy", image:onesearch, url:"https://github.com/onesearch-uy/onesearch-landing", gitpages:"https://onesearch-uy.github.io/onesearch-landing/", herramient:"Javascript"},
        {name:"Recetas", image:recetas, url:"https://github.com/gastondaruda/RecetasReactJs", gitpages:"https://gastondaruda.github.io/RecetasReactJs/", herramient:"React Js"},
        {name:"Criptomonedas", image:bitcoin, url:"https://github.com/gastondaruda/criptomonedas", gitpages:"https://gastondaruda.github.io/criptomonedas/", herramient:"React Js"},
        {name:"Proyecto Javascript", image:javascript, url:"https://github.com/gastondaruda/javascript", gitpages:"https://gastondaruda.github.io/javascript/", herramient:"Javascript"},
        {name:"Proyecto Desarrollo Web", image:desarrolloWeb, url:"https://github.com/gastondaruda/coderhouse", gitpages:"https://gastondaruda.github.io/coderhouse/", herramient:"Bootstrap y Css"},
    ]


    return(
        <div className="project-section">
            <h1 className="flex pt-2">Proyectos más importantes</h1>
            <p className="flex pt-2">Estos son mis proyectos más importantes, en los que más me he enfocado y en los que más he aprendido.</p>
            <div className="project-container flex pt-2">
                {projects.map((item) => {
                    return(
                        <div className="project-div flex column pt-2">
                            <h3>{item.name}</h3>
                            <img className="project-image pt-1 pad-r-l" src={item.image} alt="" />
                            <p className="pt-1">Hecho principalmente con {item.herramient}</p>
                            <a className="pt-1" href={item.url} target="_blank" rel="noreferrer">Link al repositorio</a>
                            <a className="pt-1" href={item.gitpages} target="_blank" rel="noreferrer">Link al proyecto</a>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Trabajos