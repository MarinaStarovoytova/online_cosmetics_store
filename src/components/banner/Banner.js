import React from 'react';
import banner from'./banner.module.css'

function Banner() {
  return (
      <div className={banner.background}>
          <div className='container'>
              <div className={banner.content}>
                  <div className={banner.text}>
                      <h2 className={banner.title}>Встречайте весну <br></br>вместе с нами</h2>
                      <p className={banner.text_margin}>Попробуйте новую коллекцию <br></br>ухаживающих средств для лица <br></br>с SPF защитой</p>
                      <button className='button'>Подробнее</button>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Banner;