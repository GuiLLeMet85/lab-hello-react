import React from "react"
import biglogo from '../images/logo512.png'
import smalllogo from '../images/logo192.png'

const Header = () => {

    return (
        <header className="App-header">
        
                <div className="text-intro">
                    <h1>Say Hello to ReactJS</h1>
                    <h2>You will learn how to use <br></br>
                     the most popular frontend library, <br></br>
                     and become a super Ninja developer</h2>
                    <a href="https://my.ironhack.com/" class="butAw">Awesome!</a> 

                </div>

                <div class="image-bkg">
                        <img src = {biglogo} alt="big logo" class="biggestlogo center" />
                        <img src = {biglogo} alt="big logo" class="biglogo right" />
                        <img src = {biglogo} alt="big logo" class="biglogo left" />
                        
                </div>
                <div className="image-skg">
                    <img src = {smalllogo} alt="big logo" class="smalllogo" />
                    <img src = {smalllogo} alt="big logo" class="smalllogo" />
                    <img src = {smalllogo} alt="big logo" class="smalllogo" />
                </div>
        </header>
    )
}

export default Header;