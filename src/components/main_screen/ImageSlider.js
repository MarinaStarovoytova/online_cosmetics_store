import React from 'react'
import { useState } from 'react'
import iconArrow from './../../images/header/mainScreen/iconArrow.svg'

function ImageSlider({ slider }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    const isFirstSlider = currentIndex === 0;
    const newIndex = isFirstSlider ? slider.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex)
  }

  return (
    <>
      <img src={slider[currentIndex].url} alt={slider[currentIndex].alt} />
      <div className='block_dashboard'>
        <span>{slider[currentIndex].text}</span>
        <div className='link_next' onClick={goToNext}><img src={iconArrow} alt='Arrow' /></div>
      </div>
    </>
  )
}

export default ImageSlider;