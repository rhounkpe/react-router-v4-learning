import React from 'react';
import {NavLink, Link } from 'react-router-dom';


const Header = () => {
    const checkActive = (match, location) => false;
    
    return (
        <nav>
            <ul>
                <li>
                    <NavLink 
                        to="/"
                        activeClassName="navactive"
                        isActive={checkActive}
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/about"
                        activeClassName="navactive"
                    >
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/topics"
                        activeClassName="navactive"
                    >
                        Topics
                    </NavLink>
                </li>
                <li><Link to="/category">Category</Link></li>
                <li><Link to="/products">Products</Link></li>
            </ul>

            <hr />  
        </nav>      
    );
};

export default Header;