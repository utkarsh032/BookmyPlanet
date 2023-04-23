import React, { Component } from 'react'
// import logo from '../images/logo.svg'
import logo from '../images/logom.png'
import { Link } from 'react-router-dom'
import { FaAlignRight } from 'react-icons/fa'

export default class Navbar extends Component {
  state = {
    isOpen: false
  }
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render () {
    return (
      <nav className='navbar'>
        <div className='nav-center'>
          <div className='nav-header'>
            <Link to='/'>
              <img className='logo' src={logo} alt='BookMyPlanet' />
            </Link>
            <button
              type='button'
              className='nav-btn'
              onClick={this.handleToggle}
            >
              <FaAlignRight className='nav-icon' />
            </button>
          </div>
          <ul
            className={this.state.isOpen ? 'nav-links show-nav' : 'nav-links'}
          >
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/rooms'>Rooms</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
