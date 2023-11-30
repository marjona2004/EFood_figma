import pwc from "/public/mock-imges/mock-imges/PWC.png"
import target  from "/public/mock-imges/mock-imges/target.png"
import zoom from "/public/mock-imges/mock-imges/zoom.png"
import dropbox from "/public/mock-imges/mock-imges/dropbox.png"
import paypal from "/public/mock-imges/mock-imges/paypal.png"
import pfizer from "/public/mock-imges/mock-imges/pfizer.png"

export const Trusted = () => {
  return <div className="mb-[120px]">
    <h2 className="text-center font-bold text-xl">Trusted By</h2>
    <p className="text-center font-normal pt-[20px] pb-[46px] text-[#666]">The private on-line marketplace where you are able to exchange goods and services, cash-free, in one place, 24/7, with a <br />
     select group of individuals, organizations, and businesses that you know and trust.
    </p>
     <div>
      <div className="flex mb-[23px]">
        <img src={pwc} alt="" className="w-[200px] "/>
        <img src={target} alt=""  className="w-[200px]"/>
        <img src={zoom} alt=""  className="w-[200px]"/>
        <img src={dropbox} alt=""  className="w-[200px]"/>
        <img src={paypal} alt=""  className="w-[200px]"/>
        <img src={pfizer} alt=""  className="w-[200px]"/>

      </div>
       <div className="flex gap-[10px] justify-center">
         <div className="rounded-full bg-slate-400 w-[20px] h-[20px]"></div>
         <div className="rounded-full bg-blue-600 w-[20px] h-[20px]"></div>
         <div className="rounded-full bg-slate-400 w-[20px] h-[20px]"></div>
         
       </div>
     </div>
  </div>;
};

