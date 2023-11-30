import provide from "/public/mock-imges/provide_img.svg"
import timer from "/public/icons/timer_icon.svg"
import delivery from "/public/icons/delivery_icon.svg"
import resturent from "/public/icons/Resturent_icon.svg"
import { Button } from "../../../common/button/Button";

export const Know = () => {
  return <div className="mb-[150px] flex gap-[100px]">
   <div>
    <img src={provide} alt="" className="w-[600px]"  />
   </div>
   <div className="mt-[60px]">
     <h2 className="text-[40px] font-bold text-[#363853] "> <span className="text-orange">Stay</span> At Home, We Will <br /> Provide <span className="text-orange">Good Food</span> </h2>
     <p className="text-[20px] my-[30px] text-[#363853]">We provide tasty food and superfast delivery at <br /> your home.  Let’s use our services right now and <br /> get discounts of up to 50%.</p>
    <div className="flex gap-[20px]">
        <img src={timer} alt="" />
        <p className="text-[24px] text-[#363853]">fasted delivery in 30 Minutes</p>
    </div>
    <div className="flex gap-[20px] my-[30px] text-[#363853] text-[24px] ">
      <img src={delivery} alt="" />
      <p className="text-[24px] text-[#363853]">300+ delivery men</p>
    </div>
    <div className="flex gap-[20px] text-[#363853] text-[24px]">
      <img src={resturent} alt="" />
      <p className="text-[24px] text-[#363853]">500+ restaurant & cafe shop</p>
    </div >
    <div className="w-[200px] mt-[50px] text-[#363853] text-[24px]">  
    <Button isActive={true}>See more</Button>
    </div>
   
   </div>

  </div>;
};
