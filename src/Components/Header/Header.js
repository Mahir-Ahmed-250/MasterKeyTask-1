import React from 'react';
import './Header.css';
import logo from './logo.png'
const Header = () => {
    return (
        <div className='header'>
            <div className='logo'>
                <img width='80' height='80' src={logo} alt="logo" />
            </div>
            <div className='language'>
                <p><span className='bn'>BN</span> / EN</p>
            </div>
        </div>
    );
};

export default Header;