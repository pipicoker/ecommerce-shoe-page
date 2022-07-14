import React, {useState} from 'react'

import cart from "../images/icon-cart.svg"
import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { data } from './Data'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


const Cart = (props) => {
  const { cartItems, image, discount, title } = props
  const itemsPrice = cartItems.reduce((a, c) => a +(discount * c.qty) , 0)
  return (
    <div className=''>
      <Menu as="div" className="relative z-50 inline-block text-left mr-16 sm:mr-24 ">
        <Menu.Button>
          <img src={cart} alt="" />
        </Menu.Button>
        <Transition
              as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95">
              <Menu.Items className="origin-top-right absolute right-0  mt-2  rounded-sm shadow-lg bg-white ring-1  divide-y divide-gray-100 focus:outline-none h-48 w-80 ">
                <Menu.Item >
                  <h3 className='my-4 ml-4 font-semibold'>Cart</h3>
                </Menu.Item>
                <Menu.Item>
                  <div className='my-4 text-dark-grayish-blue flex justify-center items-center '>
                    {cartItems.length === 0 && <div>Your cart is empty.</div>}
                  </div>
                </Menu.Item>
                <Menu.Item>
                  <div className='mx-4'>
                    {cartItems.map((item) => (
                      <div key={item.id} >
                        <div className="flex items-center">
                          <img src={image} alt="" className='w-12' />
                          <div className='ml-4 text-dark-grayish-blue'>
                            <p>{title}</p>
                            <div className='flex'>
                              <p> ${discount} x {item.qty}  </p>
                              {cartItems.length !== 0 && (
                              <p className='ml-2 text-blac font-semibold'>${ itemsPrice.toFixed(2)}</p>
                              )}
                            </div>

                          </div>
                        </div>
                        
                        <div className='mt-4 my-8'>
                          <button onClick={() => alert('Implement Checkout')} className='bg-orangee rounded-sm w-full py-2 text-white'>Checkout</button>
                        </div>
                        
                      </div>
                    ))}

                  </div>
                          
              </Menu.Item>


          </Menu.Items>
        </Transition>

      </Menu>
    </div>
  )
}

export default Cart
