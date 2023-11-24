import React from 'react';
import './main_screen.scss';
import imgFace from './../../images/header/mainScreen/imgForMainscreen.png';
import imgBody from './../../images/header/mainScreen/imgForMainscreen1.png';
import iconArrow from './../../images/header/mainScreen/iconArrow.svg'
import { Routes, Route, Link } from 'react-router-dom';
import Catalog from '../../pages/catalog/Catalog';


function MainScreen() {
    return (
        <div className='container'>

            <div className='content_media'>
                <h1 className='title'>MAROON</h1>
                <p className='subtitle'>Натуральная косметика<br></br>для бережного ухода за кожей</p>
                <button className='button'>Подробнее</button>
            </div>

            <div className='main_screen'>
            
                <div className='block'>
                    <img src={imgFace} alt='Face' />
                    
                    <div className='block_dashboard'>
                        <span>Уход для лица</span>
                        <a href='#!'><img src={iconArrow} alt='Arrow' /></a>
                    </div>
                </div>
               
                <div className='content'>
                    <h1 className='title'>MAROON</h1>
                    <p className='subtitle'>Натуральная косметика<br></br>для бережного ухода за кожей</p>
                    <button className='button'><Link to="/catalog">Подробнее</Link></button>
                </div>
                <div className='block'>
                    <img src={imgBody} alt='Body' />
                    <div className='block_dashboard'>
                        <span>Уход для тела</span>
                        <a href='#!'><img src={iconArrow} alt='Arrow' /></a>
                    </div>
                </div>
            </div>
            <Routes>
                <Route path='/catalog' element={<Catalog />}></Route>
            </Routes>
        </div>
    )
}

export default MainScreen;