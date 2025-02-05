import React, { useEffect, useRef } from 'react'
import { IconArrowRightWhite, IconCasestudy, IconClose, IconFacebook, IconIN, IconInsta, IconMail, IconResource, IconTutorial, IconTwiter } from './Icon'
import { translations } from '../language'

const MenuForMoible = ({ language, isActiveMenuMobile, setIsActiveMenuMobile }) => {
  const menuMobileRef = useRef(null);

  // Đóng dropdown khi click bên ngoài
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuMobileRef.current && !menuMobileRef.current.contains(event.target)) {
        setIsActiveMenuMobile(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const menuData = [
    {
      id: 1,
      name: translations[language].tutorials,
      icon: <IconTutorial />
    },
    {
      id: 2,
      name: translations[language].caseStudies,
      icon: <IconCasestudy />
    },
    {
      id: 3,
      name: translations[language].resources,
      icon: <IconResource />
    }
  ]
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
    <div ref={menuMobileRef} className={`menu_mobile ${isActiveMenuMobile ? 'active' : ''}`}>
      <div>
        <div className='icon_close_menu'>
          <div onClick={() => setIsActiveMenuMobile(false)}>
            <IconClose />
          </div>
        </div>
        <div className='menu_mobile_wrapper'>
          <ul className='menu_mobile_list'>
            {menuData.map(item => (
              <li key={item.id} className='menu_mobile_list_item'>
                <div className='menu_mobile_list_item_content'>
                  {item.icon}
                  <span className='menu_mobile_list_item_name'> {item.name} </span>
                </div>
                <span> <IconArrowRightWhite /> </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <div className='contact_menu_mobile'>
          <ul className='list_icon_contact_mobile'>
            {iconData.map(item => {
              return (
                <li className='icon_contact_mobile_item'>
                  {item.icon}
                </li>
              )
            })}
          </ul>
        </div>
        <div className='coppyright_menu_mobile_wrapper'>
          <span className='coppyright_menu_mobile'> © 2021 Copyright. <span className='coppyright_strong'> Macode.io </span> </span>
        </div>
      </div>
    </div>
  )
}

export default MenuForMoible