import React from "react";
import {useState} from "react"
import {NavLink} from "react-router-dom"
import {FaBars , FaLessThan} from "react-icons/fa"

function Navbar(){

    const [active, setActive] = useState("false")

    const handleToggle = () => {
        setActive(!active);
    }
    const handleOff = () => {
        setActive("false")
    }

    return(
        <>
            <div className="navbar">
                <h3><FaLessThan />Gastón Developer</h3>
                <div className={`navbarItems ${active ? "" : "active" }`} >
                    <NavLink to="/React" className="navbarItem color1" onClick={handleOff}>
                        ¿Quién Soy?
                    </NavLink>
                    <NavLink to="/Conocimientos" className="navbarItem" onClick={handleOff}>
                        Conocimientos
                    </NavLink>
                    <NavLink to="/Trabajos" className="navbarItem" onClick={handleOff}>
                        Trabajos
                    </NavLink>
                    <NavLink to="/Estudios" className="navbarItem" onClick={handleOff}>
                        Estudios
                    </NavLink>
                    <NavLink to="/Contacto" className="navbarItem">
                        Contacto
                    </NavLink>
                </div>
                <FaBars className="btnBars" onClick={handleToggle}/>
            </div>
        </>
    )
}

export default Navbar