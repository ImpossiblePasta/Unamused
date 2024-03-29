import React from 'react'
import d20 from '../assets/icons/trans_d20.png';

function Header() {
    return (
        <div class="header">
            <a href="" class="logo">
                <img height={50} width={50} src={d20}/>
            </a>
            <div class="header-right">
                <a href="https://cubecobra.com/cube/list/UNA?view=spoiler&scale=large" target="_blank">Gallery</a>
                <a href="#contact">Play</a>
                <a href="#about">Effects</a>
            </div>
        </div>
    )
}

export default Header