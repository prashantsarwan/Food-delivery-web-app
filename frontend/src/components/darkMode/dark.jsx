import React, { useState, useEffect } from 'react';
import "./dark.css";
import { assets } from '../../assets/assets.js';

function Dark() {
  // Step 1: Set up state to track the theme
  const [theme, setTheme] = useState('light');

  // Step 2: Use useEffect to persist the theme in localStorage
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  // Step 3: Toggle theme function
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  // Step 4: Apply the theme by setting the class on the root element
  useEffect(() => {
    document.documentElement.className = theme;
    console.log('Applied theme:', theme);
  }, [theme]);

  return (
    <div className={`app ${theme}`}>
      <img
         src={theme === 'light' ? assets.night : assets.day}
        alt=""
        onClick={toggleTheme}
        style={{ cursor: 'pointer', width: '40px', height: '40px' }}
      />
    </div>
  );
}

export default Dark;
