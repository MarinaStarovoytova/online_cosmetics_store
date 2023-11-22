import React from 'react'
import footer from './footer.module.css'
import logo from './../../images/footer/MAROON.png'
import Navbar from '../navbar_footer/Navbar';
import Social from '../social_network/Social';
import vector from './../../images/footer/Vector.png'

function Footer() {
    return (
        <footer className={footer.background}>
            <div className='container'>
                <div className={footer.footer}>
                    <div className={footer.menu_dasboard}>
                        <a href='#!' className={footer.logo_link}><img src={logo} alt='logo' /></a>
                        <Navbar />
                    </div>
                    <Social />
                </div>
                
            </div>
            <div className={footer.rights}>
                <div className='container'>
                    <div className={footer.info}>
                        <div>
                            <span className={footer.text}>Maroon</span>
                            <img src={vector} alt='' />
                            <span className={footer.text}>2020 Все права защищены</span>
                        </div>
                        <div>
                            <span className={footer.text}>Политика конфиденциальности</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;