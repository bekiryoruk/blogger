import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <nav>
      <Link to='/'>
        <h3>blogger</h3>
      </Link>
      <ul className='navlinks'>
        <Link to='/about'>
          <li>About</li>
        </Link>
      </ul>
    </nav>
  )
}

export default Navbar
