import React from 'react'
import "./header.css"

const Header = () => {
  return (
    <div>
      <header>
        <div className="container">
            <div className="logo">
            <img src={require('../../images/logo.png')} alt="Logo" />
            </div>
            <nav className="nav">
                <ul>
                    <li>Home</li>
                    <li>Portfolio</li>
                    <li>Gallery</li>
                    <li>About</li>
                </ul>
            </nav>
        </div>
      </header>
    </div>
  )
}

export default Header
