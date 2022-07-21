import React from "react"
import logo from '../images/ironhack-logo-xs.png'
import menu from '../images/menu-top-xs.png'

const Menu = () => {
    return (
        <nav className="menu">
        <ul>
            <li>
                <a href="https://my.ironhack.com/">
                    <img src={logo} alt="logo Ironhack" className="App-logo"></img>
                </a>
            </li>
            <li>
                <a href="https://macservicebcn.com/">
                    <img src={menu} alt= "hamburguer link"></img>
                </a>
            </li>
        </ul>

        </nav>


    )
}

export default Menu;