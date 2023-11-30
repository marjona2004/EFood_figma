import { Button } from "../../../common/button/Button";
import hero_img from "/public/mock-imges/hero_img.svg"
import hero_icon_one from "/public/icons/header_icon_one.svg"
import hero_icon_two from "/public/icons/header_icon_two.svg"
import happy from "/public/icons/Happy_customer.svg"
import sandwich from "/public/icons/sandwich_icon.svg"
import send from "/public/icons/Send_shape.svg"


export const Hero = () => {
  return <div className="mb-[104px] mt-[130px] flex gap-[70px]">
    <div className="mt-[80px]">
       <h2  className="font-bold text-[66px]">
       Super fast <span className="text-orange">Food </span> <br />
       <span className="text-orange">delivery</span>  service
       </h2>
       <p className="mt-[24px] mb-[42px] text-[#363853] tex-[20px]">
       We provide super fast-delivery service. Let’s use our <br /> services right now and get discounts of up to 50%
       </p>
       <div className="flex gap-[100px] relative ">
        <Button  isActive={true}>Explore Food</Button>
        <p className="text-[#363853] border-b-4 top-[13px] left-[200px] absolute">Download App</p>
       </div>
      
        
    </div>
    <div className="relative ">
      <img src={hero_img} alt="" className="w-[600px] h-[681px]  " />
      <img src={hero_icon_one} alt="" className="absolute top-[50px] left-[150px]"/>
      <img src={hero_icon_two} alt="" className="absolute top-[80px] left-[400px]"/>
      <img src={happy} alt=""className="absolute top-[150px]" />
      <img src={sandwich} alt="" className="absolute -right-[100px] top-[290px] " />
      <img src={send} alt="" className="absolute top-[100px] -right-0"/>
    </div>
  </div>;
};
