import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { navs } from './Consts'; 

import './header.css';

const Header = () => {
  return (
    <div>
      <header>
        <div className="container">
          <div className="logo">
            <img src={require('../../images/logo.png')} alt="Logo" />
          </div>
            <nav className="nav">
            {navs.map((item, index) => (
            <NavLink key={index} to={item.path}>
              {item.title}
            </NavLink>
          ))}
            </nav>
        </div>
      </header>
      <hr />
    </div>
  );
};

export default Header; 

