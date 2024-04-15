import React from 'react'
import "./footer.css"
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="logo-footer">
      <Link to='/' path="/"><img  src={require('../../images/logo.png')} alt="Logo" /></Link>
      </div>
    </footer>
  )
}

export default Footer
