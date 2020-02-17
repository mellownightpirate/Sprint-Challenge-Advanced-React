import React from 'react';
import { useDarkMode } from '../hooks/useDarkMode';

const Header = () => {

    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    };
    const [darkMode, setDarkMode] = useDarkMode(toggleMode);

    return (
        <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
          data-testid="toggle"
       />
      </div>
    );
}

export default Header; 