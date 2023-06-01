import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavItem, Icon } from 'react-materialize';

export default function Navigation() {
  return (
    <Navbar className="menu">
        <NavItem>
          <Link to="/">
            <Icon left>Home</Icon> 
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/about">
            <Icon left>About</Icon> 
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/news">
            <Icon left>News</Icon> 
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/contact">
            <Icon left>Contact</Icon> 
          </Link>
        </NavItem>
    </Navbar>
  );
}
