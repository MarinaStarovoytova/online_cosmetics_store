import React from 'react'
import contacts from './contacts.module.css'
import map from './../../images/main/contasts/map.png'

function Contacts() {
    return (
        <div className={contacts.contacts} id='contacts'>
            <div className='container'>
                <div className={contacts.block}>
                    <div className={contacts.block_grey}>
                        <div className={contacts.content}>
                            <h2 className={contacts.title}>Контакты</h2>
                            <div className={contacts.info}>
                                <h3 className={contacts.subtitle}>Адрес</h3>
                                <p className={contacts.text}>Санкт-Петербург, <br></br>ул. Большая Конюшенная, 19</p>
                                <h3 className={contacts.subtitle}>Телефон</h3>
                                <p className={contacts.text}>+7 (923) 888-90-60</p>
                                <h3 className={contacts.subtitle}>E-mail</h3>
                                <p className={contacts.text}>info@maroon.ru</p>
                            </div>
                        </div>
                        
                    </div>
                    <div className={contacts.img}>
                        <img src={map} alt='' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacts