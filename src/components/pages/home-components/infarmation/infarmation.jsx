import infarmation_img from "/public/mock-imges/Rectangle_img.svg"
import { IoArrowForwardOutline } from "react-icons/io5";
import { IoArrowBackOutline } from "react-icons/io5";

export const Infarmation = () => {
  return (
    <div>
      <h2 className='text-center text-[36px] text-[#363853] font-bold mb-[60px]'>What Our Client Are <span className='text-orange'> Saying</span> </h2>
       <div className="flex gap-[100px]">
        <div>
          <img src={infarmation_img} alt="" />
        </div>
        <div className="pt-[150px] ">
          <p className="text-[#363853] mb-[74px]"> 
       
          EFood has the most intriguing food order system in the <br />
           country. UI in both their app and web Is very simple and <br />
            easy to use, enhancing the UX. Their delivery men are also <br />
              quite professional and knows the neighborhood well. Till <br />
               now I never had to guide them to my address for delivery; 
        

          </p>
          <span className="text-orange text-[20px]">Anglina Jole</span>
          <div className="mt-[20px] flex justify-between">
          <p className="text-[14px]  text-[#AAA]">Food lover</p>
          <div className="flex gap-[40px]">
          <IoArrowBackOutline className="text-[#363853]" />
          <IoArrowForwardOutline className="text-orange"/>
          </div>
          </div>
         
           
        </div>
       </div>
    </div>
  )
}


