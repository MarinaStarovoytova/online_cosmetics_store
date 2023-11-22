import React from 'react';
import best from './bestsellers.module.css';
import high from './../../images/main/bestsellers/high.png';
import rest from './../../images/main/bestsellers/rest.png';
import rose from './../../images/main/bestsellers/rose.png';
import milk from './../../images/main/bestsellers/milk.png';
import arrow from './../../images/main/bestsellers/arrowL.svg';



const slider = [
    {
        id: 1,
        img: high,
        name: 'High',
        description: 'крем для лица'
    },
    {
        id: 2,
        img: rest,
        name: 'Rest',
        description: 'минеральная пудра'
    },
    {
        id: 3,
        img: rose,
        name: 'Rose',
        description: 'крем для лица'
    },
    {
        id: 4,
        img: milk,
        name: 'Milk',
        description: 'масло для тела'
    }
];

function Bestsellers() {
  return (
    <div className={best.bestsellers}>
        <div className='container'>
            <div className={best.content}>

                <div className={best.text}>
                    <h2 className={best.title}>Бестселлеры</h2>
                    <p>Легендарные продукты, <br></br>завоевавшие любовь <br></br>наших клиентов</p>
                    <button className='button'>Смотреть все</button>
                </div>

                <div className={best.slider}>
                        {
                            slider.map((item) => {
                                return (
                                    <div className={best.block} key={item.id}>
                                        <img src={item.img} alt=''/>
                                        <div className={best.text_img}>
                                            <h3>{item.name}</h3>
                                            <span className={best.description}>{item.description}</span>
                                            <a href='#!' className={best.link} cl>Подробнее</a>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        
                </div>
                
            </div>
            <div className={best.arrow}>
            <a href='#!'><img src={arrow} alt=''/></a>
            <a href='#!'><img src={arrow} alt='' className={best.arrowR}/></a>
            </div>
        </div>
    </div>
  )
}

export default Bestsellers;