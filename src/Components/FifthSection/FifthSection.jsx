import React, { useState } from 'react'
import './FifthSection.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { translations } from '../../language'
import imgMan from '../../assets/images/person_red.png'
import { IconShowcase, IconUniversity } from '../Icon';


const FifthSection = ({ language }) => {
  const sliderData = [
    {
      icon: <IconUniversity />,
      title: "showcase",
      detail: "showcaseContent",
    },
    {
      icon: <IconShowcase />,
      title: "university",
      detail: "universityContent",
    },
  ];

  return (
    <div className='fifth_section'>
      <div className='fifth_section_left'>
        <div className='fifth_section_left_content'>
          <h5> {translations[language].getRunningFast} </h5>
          <div className='fifth_section_list'>
            {sliderData.map((item, index) => (
              <div
                key={index}
                className='cut'
              >
                <div className="card_info" id={item.title}>
                  <div className="fifth_section_icon_wrapper">
                    {React.cloneElement(item.icon)}
                  </div>
                  <div className="fifth_section_info_wrapper">
                    <span className="title_info">{translations[language][item.title]}</span>
                    <span className="detail_info">{translations[language][item.detail]}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='fifth_section_right'>
        <div className='fifth_section_right_wrapper'>
          <div className='black_thumb'>
            <div className='man_thumb'>
              <div className='thumb_content'>
                <span className='tutor_title'> {translations[language].tutors}</span>
                <span className='tutor_name'> Anthoney Mills </span>
              </div>
              <div className='personRed_thumb'>
                <img src={imgMan} alt='personRed' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FifthSection