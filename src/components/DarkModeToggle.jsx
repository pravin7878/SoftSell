import { useEffect, useState } from 'react';

function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('dark-mode') === 'true';
  });

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDarkMode);
    localStorage.setItem('dark-mode', isDarkMode);
  }, [isDarkMode]);

  return (
    <button onClick={toggleDarkMode}>
      Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
    </button>
  );
}

export default DarkModeToggle;