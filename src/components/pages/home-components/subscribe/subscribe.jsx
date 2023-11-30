import { Button } from "../../../common/button/Button";


export const Subscribe = () => {
  return <div className="my-[100px] bg-orange h-[400px] pt-[50px]">
       <h2 className="text-[40px] text-center font-bold text-white">Subscribe to get the Latest Offer</h2>
       <p className="text-center text-white text-[16px] my-[30px]">Get our daily updates by subscribing to our newspaper, please drop your email below</p>
       <div className="flex justify-around ml-[300px] rounded bg-white w-[550px] rounded ">
        <input type="text"  placeholder="Enter your email addres"/>
        <Button isActive={true} >Subscribe</Button>
       </div>
  
  </div>;
};
