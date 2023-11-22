import React from 'react';
import subscription from './subscription.module.css';
import img1 from './../../images/main/subscription/img_1.png';
import img2 from './../../images/main/subscription/img_2.png';
import img3 from './../../images/main/subscription/img_3.png';
import img4 from './../../images/main/subscription/img_4.png';
import img5 from './../../images/main/subscription/img_5.png';
import img6 from './../../images/main/subscription/img_6.png'

function Subscription() {
  return (
      <div className={subscription.subscription}>
          <div className='container'>
              <div className={subscription.block}>

                  <div className={subscription.img}>
                          <img src={img1} alt='' className={subscription.hide}/>
                          <img src={img2} alt='' />
                          <img src={img3} alt='' />
                          <img src={img4} alt='' className={subscription.hide}/>
                          <img src={img5} alt='' />
                          <img src={img6} alt='' />
                  </div>

                  <div className={subscription.content}>
                      <h2>Присоединяйтесь к нам</h2>
                      <p>Подпишитесь на наш аккаунт @marooncare <br></br>
                          и узнавайте о новиках и акциях первыми</p>
                      <button className='button'>Подписаться</button>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Subscription