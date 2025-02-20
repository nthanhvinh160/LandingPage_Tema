import React, { useEffect, useRef, useState } from 'react'
import './FristSection.css'
import { IconArrowDropDown, IconArrowRight, IconBackToTop, IconBtn, IconLogo, IconMenu, IconRaditoRed } from '../Icon'
import { translations } from '../../language';
import englandFlag from '../../assets/images/english.png'
import VNFlag from '../../assets/images/vietnam.png'
import imgDetailContent from '../../assets/images/yellow.png'
import imgCode from '../../assets/images/code.png'
import imgMan from '../../assets/images/man.png'
import imgTamGiac from '../../assets/images/icon-park_caution.png'
const FirstSection = ({ language, setLanguage, isActiveMenuMobile, setIsActiveMenuMobile }) => {
  const [isOpenDrop, setIsOpenDrop] = useState(false);
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const dropdownRef = useRef(null);
  const handleChangeLanguage = (e) => {
    setLanguage(e);
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 350) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup khi component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpenDrop(false);
      }
    };

    if (isOpenDrop) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpenDrop]);

  return (
    <>
      <div>
        <div className='first_section'>

          <div className='left_side'>
            <div className='header_menu'>
              <div
                style={{ display: 'flex', alignItems: 'center' }}
              >
                <div className='button_right_arrow'
                  style={{ marginRight: 10 }}
                >
                  <IconArrowRight />
                </div>
                <div className='logo_icon' >
                  <IconLogo />
                </div>
              </div>
              <div className='menu_wrapper'>
                <ul className="list_menu">
                  <li className="list_menu_item">{translations[language].tutorials}</li>
                  <li className="list_menu_item">{translations[language].caseStudies}</li>
                  <li className="list_menu_item">{translations[language].resources}</li>
                  <div ref={dropdownRef} className='language_dropdown' onClick={() => setIsOpenDrop(!isOpenDrop)}>
                    <div className='language_flag'>
                      <img src={language === 'vi' ? VNFlag : englandFlag} />
                    </div>
                    <span className='language_content'> {language} </span>
                    <div className={`dropdown_icon ease_in_out  ${isOpenDrop ? 'active' : ''}`}>
                      <IconArrowDropDown />
                    </div>
                    <div className={`dropdown_language_wrapper ${isOpenDrop ? 'active' : ''}`}>
                      <ul className='list_dropdown_language'>
                        <li className='list_dropdown_language_item'
                          onClick={(e) => {
                            // e.stopPropagation();
                            handleChangeLanguage('en')
                          }}
                        >
                          <div className='language_flag'>
                            <img src={englandFlag} />
                          </div>
                          <span className='language_content'> English </span>
                        </li>
                        <li className='list_dropdown_language_item'
                          onClick={(e) => {
                            // e.stopPropagation();
                            handleChangeLanguage('vi')
                          }}
                        >
                          <div className='language_flag'>
                            <img src={VNFlag} />
                          </div>
                          <span className='language_content'> VIỆT NAM </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </ul>
              </div>
              <div className='logo_icon ease_in_out' onClick={() => setIsActiveMenuMobile(true)}>
                <IconMenu />
              </div>
            </div>
            <div className='main_content'>
              <h1> {translations[language].improveSkills} <span className='wrapper_code_icon'> <span id='icon_close_code'>{'</>'}</span>  </span> {translations[language].studyWithCoding} </h1>
            </div>

            <div className='content_wrapper'>
              <img src={imgDetailContent} />
              <div className='content_detail'> <span>
                {translations[language].marketingCampaigns}</span> </div>
            </div>
            <div className='btn'>
              <span className='btn_content'> {translations[language].getStarted} </span>
              <IconBtn />
            </div>
          </div>

          {/* Right Side Section 1st */}

          <div className='right_side'>
            {showScrollToTop && (
              <div className='scollTop_fade_one' onClick={scrollToTop}>
                <div className='scollTop_fade_two'>
                  <IconBackToTop />
                </div>
              </div>
            )}
            <div className='image_code_wrapper'>
              <img src={imgCode} />
            </div>
            <div className='image_man_wrapper'>
              <img src={imgMan} />
            </div>
            <div className='image_triangle_wrapper'>
              <img src={imgTamGiac} />
            </div>
            <div className='name_right_wrapper'>
              <IconRaditoRed />
              <span> Thành Vinh (FE)  </span>

            </div>
          </div>


        </div>
      </div>
    </>
  )
}

export default FirstSection