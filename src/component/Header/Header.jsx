import React from 'react';
import logo from '../../images/logo.svg';
import './Header.styles.css'

const Header = () => {
    return (
        <div className='header'>
           <img src={logo} alt="logo" className="logo" />
        </div>
    );
};

export default Header;