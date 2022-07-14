import React from 'react'
import minus from "../images/icon-minus.svg"
import plus from "../images/icon-plus.svg"
import cart from "../images/icon-cart.svg"
import { data } from './Data'





const about = ({ discount, percentage, initial, onAdd, onRemove, title, cartItems }) => {
  const qty = cartItems.map((cart) => (
    <p>{cart.qty}</p>
  ))
  return (
    <div className='mt-8 sm:pt-0 mb-16 sm:mb-0 '>
          <h3 className='uppercase text-orangee font-bold tracking-widest'>sneaker company</h3>
      <h1 className='text-blac font-bold text-3xl tracking-wide mt-4 sm:mt-8'>{title}</h1>
          <p className='text-dark-grayish-blue font-semibold text-lg mt-4 sm:mt-8'>These low-profile sneakers are your perfect casual wear companion. Featuring a durablerubberouter sole, they'll withstand everything the weather can offer.</p>
          <div className='mt-8 flex sm:block items-center '>
              <div className='flex items-center'>
                  <p className='font-bold text-3xl tracking-wide'>{discount}</p>
                <p className='ml-8 bg-pale-orangee px-2 text-orangee font-bold rounded-sm'>{percentage}</p>
              </div>

              <p className='ml-auto text-dark-grayish-blue font-semi-bold line-through'>{ initial}</p>
      </div>
      
      <div className='mt-8 sm:flex items-center'>
        
        <div className='bg-light-grayish-blue flex py-4 sm:py-2 px-4 rounded-lg items-center justify-between'>
          <button onClick={() => onRemove(data)}>
             <img src={minus} alt="" />
          </button>
          <p className='ml-4'>{qty} </p>


          <button onClick={() => onAdd(data)}>
             <img src={plus} alt="" className='ml-4'/>
          </button>

        </div>



        <button onClick={() => onAdd(data)} className='flex mt-6  sm:mt-0 sm:ml-4 w-full md:w-80 items-center justify-center bg-orangee py-4 sm:py-2 spx-8 rounded-lg'><span className='mr-4'><img src={cart} alt="" /></span> Add to cart</button>
      </div>
    </div>
  )
}

export default about
