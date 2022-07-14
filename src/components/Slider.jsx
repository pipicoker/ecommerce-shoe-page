import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import { data } from './Data'
import prev from "../images/icon-previous.svg"
import next from "../images/icon-next.svg"


const Slider = ({onAdd}) => {

    return (
      
    <div className='mx-8 mt-16 flex justify-center '>
        
            <Carousel className='w-full sm:w-96  '
                infiniteLoop
                control-next={prev} 
                righttArrow={next}
                
            >
                
                {
                    
                    
                    data.map((item) => (
                            
                      
                            <div>
                            <img src={item.img} alt="" className='rounded-sm ' key={item.id}  />
                            </div>
                        ))
                    
                
                }
              
              
            </Carousel>
        </div>
    
  )
}

export default Slider
