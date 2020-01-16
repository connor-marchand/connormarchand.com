import React from 'react'

import logo from '../assets/images/logo.svg';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={logo} alt="" /></span>
        <h1>Connor Marchand</h1>
        <p>I'm a software engineer based in Kansas City, MO specializing in Java development<br />
        and trying to get there in other things.</p>
    </header>
)

export default Header
