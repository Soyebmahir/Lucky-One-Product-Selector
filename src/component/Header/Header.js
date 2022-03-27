import React from 'react';
import logo from '../../images/logo.svg'
import './Header.css'
const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <h1>Fruits Lovers</h1>
                <div>
                   
                    <a href="/shop"><b>Shop</b></a>
                    <a href="/orders"><b>Orders</b></a>
                    <a href="/inventory"><b>Inventory</b></a>
                    <a href="/about"><b>About</b></a>
                </div>
        </nav>
    );
};

export default Header;