import React, { useState } from 'react'
import { translations } from '../../language'
import './SeventhSection.css'
import { IconBackToTop, IconMinimize, IconPlus } from '../Icon'
const data = [
  {
    id: 1,
    title: 'findInfo',
    detail: 'Nulla lectus lectus, suscipit at posuere sit amet, imperdiet sit amet sapien. Donec ornare odio justo, ac efficitur enim fermen. Nam enim ligula, lacinia vitae venenatis quis, suscipit id augue.',
  },
  {
    id: 2,
    title: 'shareDemos',
    detail: 'Nulla lectus lectus, suscipit at posuere sit amet, imperdiet sit amet sapien. Donec ornare odio justo, ac efficitur enim fermen. Nam enim ligula, lacinia vitae venenatis quis, suscipit id augue.',
  },
  {
    id: 3,
    title: 'getInsights',
    detail: 'Nulla lectus lectus, suscipit at posuere sit amet, imperdiet sit amet sapien. Donec ornare odio justo, ac efficitur enim fermen. Nam enim ligula, lacinia vitae venenatis quis, suscipit id augue.',
  },
  {
    id: 4,
    title: 'developWithoutCode',
    detail: 'Nulla lectus lectus, suscipit at posuere sit amet, imperdiet sit amet sapien. Donec ornare odio justo, ac efficitur enim fermen. Nam enim ligula, lacinia vitae venenatis quis, suscipit id augue.',
  },
]
const SeventhSection = ({ language }) => {
  const [isIdActive, setIsIdActive] = useState([data[0].id]);

  const toggleDetail = (id) => {
    setIsIdActive((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className='seventh_section'>
      <div className='seventh_scollTop_fade_one ' onClick={scrollToTop}>
        <div className='seventh_scollTop_fade_two'>
          <IconBackToTop />
        </div>
      </div>
      <div className='seventh_section_title_wrapper'> <h5> FAQs</h5> </div>
      <div className='seventh_section_content_wrapper'>
        <ul className='seventh_section_list'>
          {data.map((item) => (
            <li key={item.id} className='seventh_section_list_item'>
              <div className='seventh_section_list_item_wrapper'>
                <h6>{translations[language][item.title]}</h6>
                <div className={`seventh_section_detail ${isIdActive.includes(item.id) ? 'active' : ''}`}>
                  <p>{item.detail}</p>
                </div>
              </div>
              <div className='seventhSection_section_wrapper'>
                <div
                  className={`more_info_btn ${isIdActive.includes(item.id) ? 'active' : ''}`}
                  onClick={() => toggleDetail(item.id)}
                >
                  {isIdActive.includes(item.id) ? <IconMinimize /> : <IconPlus />}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default SeventhSection