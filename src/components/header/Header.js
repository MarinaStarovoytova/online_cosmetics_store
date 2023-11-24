import React from 'react'
import header from './header.module.css'
import accIcon from './../../images/header/icon_account.svg'
import baskIcon from './../../images/header/basket.svg'
import logo from './../../images/header/logo.svg'
import Navbar from '../navbar/Navbar'
import MainScreen from '../main_screen/MainScreen'
import burger from './../../images/burger/burger.svg'
import { Routes, Route, Link } from 'react-router-dom';

function Header() {
    return (
        <div className='wrapper_background'>
            <header>
                <div className='container'>
                    <div className={header.header}>
                        <a className={header.burger} href='#!'><img src={burger} alt='Burger' /></a>
                        <div className={header.logo}>
                            <Link to='/' className={header.logo_link}><img src={logo} alt='logo' /></Link>
                        </div>
                        <div className={header.menu_dasboard}>
                            <Navbar />
                            <div className={header.dashboard}>
                                <img src={accIcon} alt='icon_account' />
                                <img src={baskIcon} alt='icon_basket' />
                            </div>
                        </div>
                    </div>
                </div>
                <Routes>
                    <Route path='/' element={<MainScreen />}></Route>
                </Routes>
            </header>
        </div>
    )
}

export default Header;