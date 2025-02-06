
import { useState } from 'react';
import FirstSection from './Components/FirstSection/FirstSection';
import MenuForMoible from './Components/MenuForMoible';
import SecondSection from './Components/SecondSection/SecondSection';
import ThirdSection from './Components/ThirdSection/ThirdSection';
import FourthSection from './Components/FourthSection/FourthSection';
import FifthSection from './Components/FifthSection/FifthSection';
import SixthSection from './Components/SixthSection/SixthSection';
import Footer from './Components/Footer/Footer';

function App() {
  const [language, setLanguage] = useState("en");
  const [isActiveMenuMobile, setIsActiveMenuMobile] = useState(false);

  return (
    <div className="App containers">
      <MenuForMoible language={language} setIsActiveMenuMobile={setIsActiveMenuMobile} isActiveMenuMobile={isActiveMenuMobile} />
      <FirstSection setLanguage={setLanguage} language={language} setIsActiveMenuMobile={setIsActiveMenuMobile} isActiveMenuMobile={isActiveMenuMobile} />
      <SecondSection language={language} />
      <ThirdSection language={language} />
      <FourthSection language={language} />
      <FifthSection language={language} />
      <SixthSection language={language} />
      <Footer language={language} />
    </div>
  );
}

export default App;
