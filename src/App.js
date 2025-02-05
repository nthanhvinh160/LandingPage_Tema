
import { useState } from 'react';
import FirstSection from './Components/FirstSection/FirstSection';
import MenuForMoible from './Components/MenuForMoible';

function App() {
  const [language, setLanguage] = useState("en");
  const [isActiveMenuMobile, setIsActiveMenuMobile] = useState(false);

  return (
    <div className="App containers">
      <MenuForMoible language={language} setIsActiveMenuMobile={setIsActiveMenuMobile} isActiveMenuMobile={isActiveMenuMobile} />
      <FirstSection setLanguage={setLanguage} language={language} setIsActiveMenuMobile={setIsActiveMenuMobile} isActiveMenuMobile={isActiveMenuMobile} />
    </div>
  );
}

export default App;
