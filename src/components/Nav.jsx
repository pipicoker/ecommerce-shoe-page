import React, {useState} from 'react'
import logo from "../images/logo.svg"
import menu from "../images/icon-menu.svg"
import Menuitems from './Menuitems'

const Nav = () => {
    const [ active, setActive ] = useState(false)
    
    const showMenu = () => {
        setActive(!active)
    }
  return (
    <div className='flex  justify-between items-center p-4 '>
          <div className='mr-6 md:hidden' >
              <img src={menu} alt="" onClick={showMenu} className="pointer"/>
          </div>
          <div className="logo ">
              <img src={logo} alt="" />
          </div>
          
          <nav>
              <ul className='hidden md:flex gap-8 p-6  ml-8 text-dark-grayish-blue cursor-pointer'>
                  <li>Collections</li>
                  <li>Men</li>
                  <li>Women</li>
                  <li>About</li>
                  <li>Contact</li>
              </ul>

              <Menuitems showMenu={showMenu} active={active} />
          </nav>
    </div>
  )
}

export default Nav
