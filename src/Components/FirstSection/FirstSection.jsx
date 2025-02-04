import React from 'react'
import './FristSection.css'
import { IconArrowRight } from '../Icon'
const FirstSection = () => {
  return (
    <>
      <div>
        <div className='header_menu'>
          <div className='button_right_arrow'>
            <IconArrowRight />
          </div>
          <div className='menu_wrapper'>
            <ul className="list_menu">
              <li className="list_menu_item">Tutorials</li>
              <li className="list_menu_item">Case studies</li>
              <li className="list_menu_item">Resources</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default FirstSection