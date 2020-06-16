import React from 'react';
import logo from '../../images/logo.svg';
import './Header.styles.css'

const Header = () => {
    return (
        <div className='header'>
           <img src={logo} alt="logo" className="logo" />
           <h1> Bohra Keep Note</h1>
        </div>
    );
};

export default Header;