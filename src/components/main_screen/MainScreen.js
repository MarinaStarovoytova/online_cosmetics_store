import React from 'react';
import './main_screen.scss';
import imgFace from './../../images/header/mainScreen/imgForMainscreen.png';
import imgBody from './../../images/header/mainScreen/imgForMainscreen1.png';
// import iconArrow from './../../images/header/mainScreen/iconArrow.svg';
import { Routes, Route, Link } from 'react-router-dom';
import Catalog from '../../pages/catalog/Catalog';
import ImageSlider from './ImageSlider';


function MainScreen() {

   const slider = [
    { url: imgFace, alt: 'Face', text: 'Уход для лица'},
    { url: imgBody, alt: 'Body', text: 'Уход для тела'}
   ]

    return (
        <div className='container'>

            <div className='content_media'>
                <h1 className='title'>MAROON</h1>
                <p className='subtitle'>Натуральная косметика<br></br>для бережного ухода за кожей</p>
                <button className='button'>Подробнее</button>
            </div>

            <div className='main_screen'>
            
                <div className='block'>
                    <ImageSlider slider={slider} />
                </div>
               
                <div className='content'>
                    <h1 className='title'>MAROON</h1>
                    <p className='subtitle'>Натуральная косметика<br></br>для бережного ухода за кожей</p>
                    <button className='button'><Link to="/catalog">Подробнее</Link></button>
                </div>
                <div className='block'>
                <ImageSlider slider={slider} />
                   
                </div>
            </div>
            <Routes>
                <Route path='/catalog' element={<Catalog />}></Route>
            </Routes>
        </div>
    )
}

export default MainScreen;