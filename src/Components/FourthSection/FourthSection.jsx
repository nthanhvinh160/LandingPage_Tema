import React, { useState } from 'react'
import './FourthSection.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { translations } from '../../language'
import imgCodeBlack from '../../assets/images/code_black.png'
import triangelVertical from '../../assets/images/icon-park_caution_vertical.png'
import { IconBtn, IconBtnSecond } from '../Icon';

const FourthSection = ({ language }) => {

  return (
    <div className='fourth_section'>
      <div className='fourth_section_left'>
        <div className='fourth_section_left_wrapper'>
          <div className='code_black_thumb'> <img src={imgCodeBlack} alt='code' />
            <div className='triangle_thumb'> <img src={triangelVertical} alt='triangle' /> </div>
          </div>

        </div>
      </div>
      <div className='fourth_section_right'>
        <div className='fourth_section_left_content'>
          <h5> {translations[language].webLanguage} </h5>
          <p>
            {translations[language].goLive}
          </p>
          <div className='wrapper_btn'>
            <div className='btn'>
              <span className='btn_content'> {translations[language].tryItYourself} </span>
              <span className='btn_tryItFirst'> <IconBtn /> </span>
              <span className='btn_tryItYourSelf'> <IconBtnSecond /></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FourthSection