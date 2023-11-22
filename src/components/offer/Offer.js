import React from 'react';
import offer from './offer.module.css'
import img from './../../images/main/offer/img.png'

function Offer() {
  return (
    <div className={offer.offer}>
      <div className='container'>
        <div className={offer.block}>
          <div className={offer.block_grey}>
            <div className={offer.content}>
              <h2>Индивидуальный уход</h2>
              <p>Не всегда очевидно, какие элементы<br></br> и минералы необходимы коже,<br></br> а многочисленные эксперименты<br></br>
                с разными средствами только<br></br> ухудшают ее качество.</p>
              <p>Заполните анкету, и мы подберем <br></br>уход, подходящий именно вам, <br></br>учитывая ваш образ жизни,
                <br></br>место жительства и другие факторы. </p>
              <button className='button'>Заполнить анкету</button>
            </div>
          </div>
          <div className={offer.img}>
            <img src={img} alt=''/>
          </div>
          
        </div>
        {/* <div className={offer.img_media}>
            <img src={img} alt=''/>
          </div> */}
      </div>
    </div>
  )
}

export default Offer;