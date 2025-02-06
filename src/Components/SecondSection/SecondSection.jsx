import React from 'react'
import './SecondSection.css'
import imgEdx from '../../assets/images/edX.png'
import imgCoursera from '../../assets/images/coursera.png'
import imgUdemy from '../../assets/images/udemy.png'

const SecondSection = ({ language }) => {
  return (
    <div className='second_section'>

      <ul className='list_img_second_section'>
        <li className='list_img_second_section_item'>
          <img src={imgEdx} alt='imgEdx' />
        </li>
        <li className='list_img_second_section_item'>
          <img src={imgCoursera} alt='imgCoursera' />
        </li>
        <li className='list_img_second_section_item'>
          <img src={imgUdemy} alt='imgUdemy' />
        </li>
      </ul>
    </div>
  )
}

export default SecondSection