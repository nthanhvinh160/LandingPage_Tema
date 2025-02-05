
import { useState } from 'react';
import FirstSection from './Components/FirstSection/FirstSection';

function App() {
  const [language, setLanguage] = useState("en");
  return (
    <div className="App">
      <FirstSection setLanguage={setLanguage} language={language} />
    </div>
  );
}

export default App;
