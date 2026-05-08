import { useState } from 'react';

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  console.log(isDarkMode);

  return (
    <div className={`theme-bax ${isDarkMode ? 'dark-mode' : 'light - mode'}`}>
      <h2>{isDarkMode ? '어두운 모드' : '밝은 모드'}</h2>
      <p>상태값(isDarkMode): {isDarkMode.toString()}</p>

      <button onClick={toggleTheme} classname='toggle-btn'>
        {isDarkMode ? '밝게 보기' : '어둡게 보기'}
      </button>
    </div>
  );
};

export default DarkModeToggle;
