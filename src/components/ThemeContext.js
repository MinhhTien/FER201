import React, { useEffect, useState } from 'react';
const themes = {
  dark: {
    background: 'black',
    color: 'white',
  },
  light: {
    background: 'white',
    color: 'black',
  },
};

const initialState = {
  dark: true,
  theme: themes.dark,
  toggle: () => {},
};

const ThemeContext = React.createContext(initialState);

function ThemeProvider({ children }) {
  const [dark, setDark] = useState(false);
  const [theme, setTheme] = useState(themes.dark);

  useEffect(() => {
    const isDark = localStorage.getItem('dark') === 'true';
    setDark(isDark);
    dark ? setTheme(themes.dark) : setTheme(themes.light);
    console.log('theme', theme)
    console.log('dark', dark)
  }, [dark]);

  const toggle = () => {
    setDark(!dark);
    const isDark = !dark;
    localStorage.setItem('dark', JSON.stringify(isDark));
  };

  return (
    <ThemeContext.Provider value={{ theme, dark, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeProvider, ThemeContext };
