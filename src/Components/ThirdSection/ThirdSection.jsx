import React from 'react'
import './ThirdSection.css'
import { translations } from '../../language'
const ThirdSection = ({language}) => {
  return (
    <div className='third_section'>
        <div className='third_section_left'>
            <div className='third_section_left_content'>
                <h5> {translations[language].ourFeatures} </h5>
                <p>
                {translations[language].specialFeatures}
                </p>
            </div>
        </div>
        <div className='third_section_right'></div>
    </div>
  )
}

export default ThirdSection