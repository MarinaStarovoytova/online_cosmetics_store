import React from 'react'
import social from './social.module.css'
import fasebook from './../../images/main/contasts/facebook.png'
import insta from './../../images/main/contasts/insta.png'
import tww from './../../images/main/contasts/tww.png'

function Social() {
    return (
        <div className={social.icons}>
            <img src={fasebook} alt='' />
            <img src={insta} alt='' />
            <img src={tww} alt='' />
        </div>
    )
}

export default Social