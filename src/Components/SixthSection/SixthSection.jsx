import React from 'react'
import './SixthSection.css'
import { translations } from '../../language'
import { IconNew } from '../Icon'
const SixthSection = ({ language }) => {
  return (
    <div className='sixth_section'>
      <div className='title_wrapper'>
        <h5> {translations[language].choosePackage} </h5>
        <p>
          {translations[language].providePackages}
        </p>
      </div>
      <div className='sixth_section_grid'>
        <div className='sixth_section_grid_item'>
          <div className='sixth_section_grid_item_card'>
            <span className='item_title'> {translations[language].development} </span>
            <div className='item_price_wrapper'>
              <sup> $ </sup><span className='item_price'> 30 </span>
            </div>
            <ul className='sixth_section_list'>
              <li className='sixth_section_list_item'> 1 Module Javascript </li>
              <li className='sixth_section_list_item'>  1 Module Human Resources  </li>
            </ul>
            <div className='btn_buy'>
              <span> Buy Now </span>
            </div>
          </div>
        </div>
        <div className='sixth_section_grid_item'>
          <div className='sixth_section_grid_item_card new'>
            <span className='item_title'> {translations[language].itSoftware} </span>


            <div className='item_price_wrapper'>
              <div className='icon_new_wrapper'><IconNew /></div>
              <sup> $ </sup><span className='item_price'> 30 </span>
            </div>

            <ul className='sixth_section_list'>
              <li className='sixth_section_list_item'> 1 Module Javascript </li>
              <li className='sixth_section_list_item'>  1 Module Human Resources  </li>
              <li className='sixth_section_list_item'> 1 Module Javascript </li>
              <li className='sixth_section_list_item'>  1 Module Human Resources  </li>
              <li className='sixth_section_list_item'> 1 Module Javascript </li>
              <li className='sixth_section_list_item'>  1 Module Human Resources  </li>
            </ul>
            <div className='btn_buy new'>
              <span> Buy Now </span>
            </div>
          </div>
        </div>
        <div className='sixth_section_grid_item'>
          <div className='sixth_section_grid_item_card'>
            <span className='item_title'> {translations[language].business} </span>
            <div className='item_price_wrapper'>
              <sup> $ </sup><span className='item_price'> 30 </span>
            </div>
            <ul className='sixth_section_list'>

              <li className='sixth_section_list_item'> 1 Module Javascript </li>
              <li className='sixth_section_list_item'>  1 Module Human Resources  </li>
            </ul>
            <div className='btn_buy '>
              <span> Buy Now </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SixthSection