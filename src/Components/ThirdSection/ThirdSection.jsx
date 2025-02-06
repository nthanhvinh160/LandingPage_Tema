import React, { useState } from 'react'
import './ThirdSection.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { translations } from '../../language'
import Slider from 'react-slick';
import { IconEasyAccess, IconFlexible, IconTutor } from '../Icon';

const ThirdSection = ({ language }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const sliderData = [
    {
      icon: <IconTutor />,
      title: "bestTutors",
      detail: "designVision",
    },
    {
      icon: <IconFlexible />,
      title: "flexible",
      detail: "marketingTools",
    },
    {
      icon: <IconEasyAccess />,
      title: "easyAccess",
      detail: "marketingTools",
    },
  ];


  const settings = {
    dots: true,
    className: "center",
    centerMode: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: "0px",
    arrows: false,
    responsive: [
      {
        breakpoint: 960, // Khi màn hình nhỏ hơn 960px
        settings: {
          slidesToShow: 2, // Chỉ hiển thị 1 slide
          centerMode: false, // Loại bỏ căn giữa (nếu cần)
        },
      },
      {
        breakpoint: 650, // Khi màn hình nhỏ hơn 960px
        settings: {
          slidesToShow: 1, // Chỉ hiển thị 1 slide
          centerMode: false, // Loại bỏ căn giữa (nếu cần)
          centerPadding: "60px",
        },
      },
    ],
  };
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
      <div className='third_section_right'>
        <Slider {...settings}>
          {sliderData.map((item, index) => (
            <div
              key={index}
              className="slider"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="card_info" id={item.title}>
                <div className="third_section_icon_wrapper">
                  {React.cloneElement(item.icon, { color: hoveredIndex === index ? "#000" : "#DDF247" })}
                </div>
                <div className="third_section_info_wrapper">
                  <span className="title_info">{translations[language][item.title]}</span>
                  <span className="detail_info">{translations[language][item.detail]}</span>
                </div>
              </div>
            </div>
          ))}
        </Slider>

      </div>
    </div>
  )
}

export default ThirdSection