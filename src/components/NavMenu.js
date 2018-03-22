import React from 'react';
import {NavLink } from 'react-router-dom';


const NavMenu = () => {
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
            </ul>

            <hr />  
        </nav>      
    );
};

export default NavMenu;