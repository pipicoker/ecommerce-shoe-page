import React from 'react'
import close from "../images/icon-close.svg"


const Menuitems = ({showMenu, active}) => {
  return (
      <ul className={active ? 'fixed z-50 inset-0 right-1/3 text-very-vark-blue justify-center overflow-hidden  bg-white pt-8 px-8   sm:hidden font-bold tracking-wide cursor-pointer' : 'hidden ' } >
          <img src={close} alt="" onClick={showMenu} className="mb-12" />
                  <li className='mb-4'>Collections</li>
                  <li className='mb-4'>Men</li>
                  <li className='mb-4'>Women</li>
                  <li className='mb-4'>About</li>
                  <li className='mb-4'>Contact</li>
              </ul>
  )
}

export default Menuitems
