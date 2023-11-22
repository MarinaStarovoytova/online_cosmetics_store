import React from 'react';
import history from './history.module.css'

function History() {
  return (
    <div className={history.history}>
      <div className={history.background}>
          <div className='container'>
              <div className={history.block}>
                  <div className={history.content}>
                      <h2 className={history.title}>“Мы стремимся сделать уход за кожей доступным<br></br>
                          и приятным ритуалом для всех, кто хочет<br></br>
                          заботиться о себе и своем теле”  </h2>
                      <button className='button'>Наша история</button>
                  </div>
              </div>
          </div>
      </div>
      </div>
  )
}

export default History;