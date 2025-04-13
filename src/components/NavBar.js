import React from 'react'
import { NavLink } from 'react-router-dom';

const NavBar = ({menuHeader, activeMenu, setActiveMenu, activeIndex, setActiveIndex}) => {

    return (
        <nav className="navbar">
            <ul className="navbar-list">
                {menuHeader.map((menu, index) => {
                    return (
                        <li className="navbar-item" key={index}>
                            <NavLink 
                                to={menu.pathParm === "" ? "/" : `/${menu.pathParm}`}
                                className={({ isActive }) =>
                                  `navbar-link ${isActive ? "active" : ""}`
                                }
                                onClick={() => setActiveMenu(menu.pageTitle)}>{menu.title}
                            </NavLink>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}

export default NavBar