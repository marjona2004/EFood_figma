import footer_icon from "/public/icons/footer_icons.svg"
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { LiaSmsSolid } from "react-icons/lia";

export const Footer = () => {
  return  <div className=' py-[50px] px-[30px]  mb-[50px] '>

    <div className='flex justify-between border-b-4 my-[50px] mb-[50px]'>
        
       <div>
       <div className="text-[#37383D] text-4xl font-bold"> <span className="text-orange">E</span>Food</div>  <br /><br />
       <div className="flex">
        <p>
        Dhaka, Bangladesh
        </p>
       </div>
       <div className="flex gap-[30px] my-[30px]">
       <MdOutlinePhoneInTalk className="mt-[5px]"/>
       <p>0943833399</p>
       </div>
       <div className="flex gap-[30px]">
       <LiaSmsSolid className="mt-[5px]"/>
       <p>support@efood.com</p>
       </div>
       <img src={footer_icon} alt="" className="mt-[20px]"/>
      </div>
      <div>
         <div className="text-[#37383D] text-4xl font-bold"> Service</div>  <br /><br />
          <p className='text-[#37383D] text-base'> 
          How it works<br /><br />
          home delivery<br /><br />
          Products<br /><br />
          Menu <br /><br />
        
          </p>
        </div>
         <div>
         <div className="text-[#37383D] text-4xl font-bold"> Company</div>  <br /><br />
          <p className='text-[#37383D] text-base'> 
          About Us <br /><br />
            News<br /><br />
            Our trusted partner<br /><br />
            ew users FAQ <br /><br />
        
          </p>
        </div>
        <div>
        <div className="text-[#37383D] text-4xl font-bold"> Supports</div>  <br /><br />
          <p className='text-[#37383D] text-normal text-base'>
          Help center<br /> <br />
          Feedbcak <br /> <br />
        Contact us <br /><br />
        Terms conditins
          </p>
        </div>
       
       
      
       
  </div>
  <div className="flex justify-between">
    <p className="text-14px className text-[#646464] text-[14px]">© 2021 EFood - All rights reserved.</p>
    <div className="flex  gap-[30px]">
      <p className="text-[#646464] text-[14px]">Privacy</p>
      <p className="text-[#646464] text-[14px]">Security</p>
      <p className="text-[#646464] text-[14px]">Terms</p>
    </div>
  </div>
  
</div>
};
