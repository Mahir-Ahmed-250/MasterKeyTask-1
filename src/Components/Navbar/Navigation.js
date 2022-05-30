import React, { useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './Navigation.css'


const Navigation = () => {

    const [changeText, setChangeText] = useState(false);
    const handleChange = () => {
        return setChangeText(!changeText);
    };
    return (
        <Navbar expand="lg" className='container-fluid'>
            <Navbar.Collapse id="basic-navbar-nav" className='navItems'>
                <Nav className='navItem navItemHome' >HOME</Nav>
                <Nav className='navItem' > ADVERTISERS</Nav>
                <Nav className='navItem' > PUBLISHERS</Nav>
                <Nav className='navItem'>INFLUENCERS</Nav>
                <Nav className='navItem'>  BLOG</Nav>
                <Nav className='navItem' >CONTACT US</Nav>
            </Navbar.Collapse>
            <Navbar.Toggle className='ms-2' aria-controls="basic-navbar-nav" />
            <button className='buttonGroup' >
                <span onClick={() => handleChange()}
                > {changeText ? <button className='toggle me-3'>LOGIN</button> : "LOGIN"}</span>
                <span onClick={() => handleChange()} >
                    {changeText ? "SIGN UP" : <button className='toggle ms-3 '>SIGN UP</button>}</span>
            </button >
        </Navbar >




    );
};

export default Navigation;


