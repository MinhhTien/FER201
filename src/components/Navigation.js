import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

export default function Navigation() {
  const { theme, toggle, dark } = useContext(ThemeContext);
  return (
    <div>
      <nav
        style={{ backgroundColor: theme.background, color: theme.color }}
      >
        <ul>
          <li>
            <a className="active" href="#home">
              Home
            </a>
          </li>
          <li>
            <a href="#news">News</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div style={{ position: 'relative' }}>
          <a
            className="switch-mode"
            href="#"
            onClick={toggle}
            style={{
              backgroundColor: theme.background,
              color: theme.color,
              outline: 'none',
            }}
          >
            Switch Nav to {!dark ? 'Dark' : 'Light'}
          </a>
        </div>
      </nav>
    </div>
  );
}
