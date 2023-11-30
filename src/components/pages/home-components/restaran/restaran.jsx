import React from 'react'
import blaze_pizza from "/public/mock-imges/blaze_pizza.svg"
import ranch_pizza from "/public/mock-imges/ranch_pizza.svg"
import hut_pizza from "/public/mock-imges/hut_pizza.svg"
import royel_burger from "/public/mock-imges/royal_burger.svg"
import kfc_restaurant from "/public/mock-imges/KFC_restaurant.svg"
import start_food from "/public/mock-imges/start_food.svg"

import { FaRegClock } from "react-icons/fa6";
import { IoArrowForwardOutline } from "react-icons/io5";
import { Button } from '../../../common/button/Button'

export const Restaran = () => {
  return (
    <div className='mb-[160px] '>
      <h2 className='text-[36px] text-center font-bold mb-[50px]'>Top Food  <span className='text-orange'>Restaurant</span> </h2>

      <div className='grid grid-rows-2 grid-cols-3 gap-[70px] '>
 
      <div className='shadow-md  w-[360px] h-[450px]'>  
        <img src={blaze_pizza} alt="" />
        <p className='my-[22px] text-[#363853] pl-[10px] text-[24px]'>Blaze Pizza</p>
        <div className='flex gap-[20px] pl-[10px] '> 
        <FaRegClock  className='text-[#363853] mt-[15px]'/>
        <span className='text-[#363853] mt-[10px]'>11:00 AM -10.00 PM</span>
        <Button isActive={true}><IoArrowForwardOutline className='text-white'/></Button>
        </div>
        
        <div>
     
        </div>
      </div>
      <div className='shadow-md  w-[360px] h-[450px]'>  
        <img src={ranch_pizza} alt="" />
        <p className='my-[22px] text-[#363853] pl-[10px] text-[24px]'>Pizza Ranch</p>
        <div className='flex gap-[20px] pl-[10px]'> 
        <FaRegClock  className='text-[#363853] mt-[15px]'/>
        <span className='text-[#363853] mt-[10px]'>09.00 AM - 10.00 PM</span>
        <Button isActive={true}><IoArrowForwardOutline className='text-white'/></Button>
        </div>
        
        <div>
     
        </div>
      </div>
      <div className='shadow-md  w-[360px] h-[450px]'>  
        <img src={hut_pizza} alt="" />
        <p className='my-[22px] text-[#363853] pl-[10px] text-[24px]'>	Dion’s Pizza Hut</p>
        <div className='flex gap-[20px] pl-[10px]'> 
        <FaRegClock  className='text-[#363853] mt-[15px]'/>
        <span className='text-[#363853] mt-[10px]'>11:00 AM -10.00 PM</span>
        <Button isActive={true}><IoArrowForwardOutline className='text-white'/></Button>
        </div>
        
        <div>
     
        </div>
      </div>
      <div className='shadow-md  w-[360px] h-[450px]'>  
        <img src={royel_burger} alt="" />
        <p className='my-[22px] text-[#363853] pl-[10px] text-[24px]'>Royel Burger</p>
        <div className='flex gap-[20px] pl-[10px]'> 
        <FaRegClock  className='text-[#363853] mt-[15px]'/>
        <span className='text-[#363853] mt-[10px]'>11:00 AM -10.00 PM</span>
        <Button isActive={true}><IoArrowForwardOutline className='text-white'/></Button>
        </div>
        
        <div>
     
        </div>
      </div>
      <div className='shadow-md  w-[360px] h-[450px]'>  
        <img src={kfc_restaurant} alt="" />
        <p className='my-[22px] text-[#363853] pl-[10px] text-[24px]'>KFC Restaurant</p>
        <div className='flex gap-[20px] pl-[10px]'> 
        <FaRegClock  className='text-[#363853] mt-[15px]'/>
        <span className='text-[#363853] mt-[10px]'>09.00 AM - 10.00 PM</span>
        <Button isActive={true}><IoArrowForwardOutline className='text-white'/></Button>
        </div>
        
        <div>
     
        </div>
      </div>
      <div className='shadow-md  w-[360px] h-[450px]'>  
        <img src={start_food} alt="" />
        <p className='my-[22px] text-[#363853] pl-[10px] text-[24px]'>Start Food</p>
        <div className='flex gap-[20px] pl-[10px]'> 
        <FaRegClock  className='text-[#363853] mt-[15px]'/>
        <span className='text-[#363853] mt-[10px] '>10:00 AM -12.00 PM</span>
        <Button isActive={true}><IoArrowForwardOutline className='text-white'/></Button>
        </div>
        
        <div>
     
        </div>
      </div>
      </div>
    

    </div>
  )
}

