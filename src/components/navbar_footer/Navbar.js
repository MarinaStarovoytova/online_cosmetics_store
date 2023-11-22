import React from 'react';
import nav from './navbar.module.css'

function Navbar() {
    return (
        <nav className={nav.nav_menu}>
            <ul className={nav.menu}>
                <li className={nav.menu_list}><a href='#!' className={nav.menu_link}>Каталог</a></li>
                <li className={nav.menu_list}><a href='#!' className={nav.menu_link}>О нас</a></li>
                <li className={nav.menu_list}><a href='#!' className={nav.menu_link}>Магазины</a></li>
                <li className={nav.menu_list}><a href='#!' className={nav.menu_link}>Контакты</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;