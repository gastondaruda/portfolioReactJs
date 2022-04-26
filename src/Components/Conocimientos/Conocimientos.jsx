import React from "react"
import "./conocimientos.css"
import {FaHtml5,  FaReact,  FaGitAlt, FaBootstrap,  FaSass} from "react-icons/fa"
import { SiJavascript, SiMaterialui, SiJquery,} from "react-icons/si";

function Conocimientos(){

    const app = [
        {name:"Css", icon: <FaHtml5 /> },
        {name: "Javascript", icon: <SiJavascript />},
        {name: "React Js", icon: <FaReact />},
        {name: "Material Iu", icon: <SiMaterialui />},
        {name: "Git", icon: <FaGitAlt />},
        {name: "Bootstrap", icon: < FaBootstrap/>},
        {name: "Jquery", icon: < SiJquery/>},
        {name: "Sass", icon: < FaSass/>},
]

    return(
        <>
            <h1 className="flex color2 index-title">Conocimientos</h1>
            <div className="flex knowlegde-container">
            {app.map((item) => {
                return(
                    <div className="flex column conocimientos-items">
                        <p className="conocimientos-icon">{item.icon}</p>
                        <h4 className="color3 conocimientos-title" key={item.name}>{item.name}</h4>
                    </div>
                )
            })}
            </div>
        </>
    )
}

export default Conocimientos