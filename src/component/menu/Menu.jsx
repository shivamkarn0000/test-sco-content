import React from './menu.css'
import './menu-mobile.css'

export default function Menu({hemOpen, setHemOpen}) {
    return (
        <div>
        <div className={"menu " + (hemOpen && "activemenu")}>

            <ul className="ul ">
                <li className="li" onClick={() => setHemOpen(false)}><a href="#intro">Home</a></li>
                <li className="li"  onClick={() => setHemOpen(false)}><a href="#portfolio">Portfolio</a></li>
                <li className="li"  onClick={() => setHemOpen(false)}><a href="#works">Works</a></li>
                <li className="li"  onClick={() => setHemOpen(false)}><a href="#testimonials">Testimonials</a></li>
                <li className="li"  onClick={() => setHemOpen(false)}><a href="#contact">Contact</a></li>
            </ul>

        </div>
        </div>
    )
}
