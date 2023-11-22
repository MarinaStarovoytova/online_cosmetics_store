import React from 'react';
import navbar from './navbar.module.css'

function Navbar() {
    return (
        <nav className={navbar.nav_menu}>
            <ul className={navbar.menu}>
                <li className={navbar.menu_list}><a href='#!' className={navbar.menu_link}>Каталог</a></li>
                <li className={navbar.menu_list}><a href='#!' className={navbar.menu_link}>О нас</a></li>
                <li className={navbar.menu_list}><a href='#!' className={navbar.menu_link}>Контакты</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;