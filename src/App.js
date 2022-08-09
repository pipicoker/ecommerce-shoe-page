import React, { useState } from 'react';
import Nav from './components/Nav'
import Slider from './components/Slider';
import About from './components/About';
import Cart from './components/Cart';
import avatar from "./images/image-avatar.png"

import { data } from './components/Data'
import product1 from "./images/image-product-1.jpg"







function App() {
  const [cartItems, setcartItems] = useState([])
  const [img, setimg] = useState(data.name)
  const onAdd = (data) => {
    const exist = cartItems.find(x => x.id === data.id)
    if (exist) {
      setcartItems(cartItems.map(x => x.id === data.id ? { ...exist, qty: exist.qty + 1,  } : x))
      setimg(data.name)
    } else {
      setcartItems([...cartItems, { ...data, qty: 1,  }])
      setimg(data.name)
    }

  }
  const onRemove = (data) => {
    const exist = cartItems.find((x) => x.id === data.id)
    if (exist.qty === 1) {
      setcartItems(cartItems.filter((x) => x.id !== data.id))
    } else {
      setcartItems(cartItems.map(x => x.id === data.id ? { ...exist, qty: exist.qty - 1 } : x))

    }
  }
  return (
    <div >
      <div className='flex items-center mr-4  lg:mx-32 border-b '>
        <Nav />
        <div className='ml-auto flex items-center'>
          <Cart
            cartItems={cartItems}
            onAdd={onAdd}
            onRemove={onRemove}
            initial="$250.00"
            discount="125.00"
            percentage="50%"
            title="Fall Limited Edition Sneakers"
            image={product1}    
          />
          <img src={avatar} alt="" className='w-8 -ml-12'/>

        </div>

      </div>
      <div className='sm:grid sm:grid-cols-2 items-center justify-center'>
        <Slider />
        <div className='mx-8'>
          <About
            onAdd={onAdd}
            onRemove={onRemove}
            cartItems={cartItems}
            img={img}
            initial="$250.00"
            discount="$125.00"
            percentage="50%"
            title="Fall Limited Edition Sneakers"
          />
          
        </div>

      </div>
    </div>
  );
}

export default App;
