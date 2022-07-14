import React, { useState } from 'react'
import { Fragment } from 'react'
import logo from "../images/logo.svg"
import cart from "../images/icon-cart.svg"
import avatar from "../images/image-avatar.png"
import menu from "../images/icon-menu.svg"
import close from "../images/icon-close.svg"
import { Menu, Transition } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}



const Navbar = () => {
  const [cartItems, setCartItems] = useState([])

    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
  }
  

  return (
    <>
      <div className='sm:flex mx-24 pt-12 sm:pt-8 items-center border-b hidden '>
        <img src={logo} alt="logo" />
        <ul className='flex ml-12 text-gray-600  cursor-pointer'>
          <li className='mr-12 hover:text-blac'>Collections</li>
          <li className='mr-12 hover:text-blac'>Men</li>
          <li className='mr-12 hover:text-blac'>Women </li>
          <li className='mr-12 hover:text-blac'>About</li>
          <li className='mr-12 hover:text-blac'>Contact</li>
          
        </ul>






        <div className='flex  ml-auto '>









          {/* <img src={cart} alt="" className='mr-16 cursor-pointer' /> */}
          <img src={avatar} alt="" className='w-[36px] cursor-pointer'/>
        </div>
      </div>
      <div className='p-8 flex items-center sm:hidden'>
        <img src={menu} alt="" className='' onClick={handleNav}/>
        <img src={logo} alt="logo" className='ml-8'/>
        <div className='flex  ml-auto '>
          <img src={cart} alt="" className='mr-8 cursor-pointer' />
          <img src={avatar} alt="" className='w-[36px] cursor-pointer'/>
        </div>
      </div>
      <div className={nav ? 'pl-8 w-64 h-screen top-0 fixed pt-8 bg-red-200' : 'fixed left-[-100%]'}>
        <img src={close} alt="" className='' onClick={handleNav}/>

        <ul className='mt-12  text-blac font-Fam cursor-pointer font-bold text-lg'>
          <li className=' mb-4'>Collections</li>
          <li className=' mb-4'>Men</li>
          <li className=' mb-4'>Women </li>
          <li className=' mb-4'>About</li>
          <li className=' mb-4'>Contact</li>
        </ul>
      </div>
    </>


  )
}

export default Navbar
