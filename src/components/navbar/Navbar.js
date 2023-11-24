import React from 'react';
import navbar from './navbar.module.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <>
        <nav className={navbar.nav_menu}>
            <ul className={navbar.menu}>
                <li className={navbar.menu_list}><Link to='/catalog' className={navbar.menu_link}>Каталог</Link></li>
                <li className={navbar.menu_list}><a href='#history' className={navbar.menu_link}>О нас</a></li>
                <li className={navbar.menu_list}><a href='#contacts' className={navbar.menu_link}>Контакты</a></li>
            </ul>
        </nav>
        </>
    )
}

export default Navbar;