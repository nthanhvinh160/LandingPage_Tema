import React from 'react'
import './Footer.css'
import { translations } from '../../language'
import { IconBtn, IconFacebook, IconIN, IconInsta, IconLogoYellow, IconMail, IconTwiter } from '../Icon'
const Footer = ({language}) => {
      const iconData = [
        {
          id: 1,
          icon: <IconFacebook />
        },
        {
          id: 2,
          icon: <IconInsta />
        },
        {
          id: 3,
          icon: <IconIN />
        },
        {
          id: 4,
          icon: <IconTwiter />
        },
        {
          id: 5,
          icon: <IconMail />
        }
      ]
  return (
    <div className='footer'>
        <div>
            <div className='attemp_footer_wrapper'>
                <div className='title_wrapper'>
                    <h5> {translations[language].upgradeSkills} </h5>
                    <p>
                        {translations[language].buildSite}
                    </p>
                </div>
                <div className='btns_wrapper'>
                    <div className='btn tryYourSelf'>
                        <span className='btn_content'> {translations[language].tryItYourself} </span>
                    </div>
                    <div className='btn'>
                        <span className='btn_content'> {translations[language].getStarted} </span>
                        <IconBtn />
                    </div>
                </div>
            </div>
            <div className='footer_menu_wrapper'>
                   <div
                    style={{ display: 'flex', alignItems: 'center' }}
                    >
                    <div className='button_right_arrow'
                        style={{ marginRight: 19 }}
                    >
                        <IconLogoYellow />
                    </div>
                    <div className='logo_name'>
                        <span>Macode</span>
                    </div>
                    </div>
                <div>
                    <ul className="list_menu_footer">
                        <li className="list_menu_footer_item">{translations[language].tutorials}</li>
                        <li className="list_menu_footer_item">{translations[language].caseStudies}</li>
                        <li className="list_menu_footer_item">{translations[language].resources}</li>
                    </ul>
                </div>
            </div>
            <div className='footer_contact_wrapper'>
                <div>
                        <ul className='list_icon_contact_footer'>
                    {iconData.map(item => {
                        return (
                        <li className='icon_contact_footer_item'>
                            {item.icon}
                        </li>
                        )
                    })}
                    </ul>
                </div>
                <div className='coppyright_footer_wrapper'>
                    <span className='coppyright_footer'> © 2021 Copyright.<span className='coppyright_strong'> Macode.io </span> </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer