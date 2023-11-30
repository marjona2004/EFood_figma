// import React from 'react'
import phone_img from "/public/mock-imges/mobile_img.svg"
import app_store from "/public/icons/App_Store_Mobile,.svg"
import store_google from "/public/icons/Store_Google _mobile.svg"

export const Phone = () => {
  return (
    <div className="mb-[160px] flex gap-[50px]">
      <div className="mt-[150px]">
      <h2 className="text-[36px] font-bold text-[#363853]">Download  Our <span className="text-orange"> Mobile App</span></h2>
      <p className="text-[#363853] my-[30px]">
      It's all at your fingertips -- the restaurants you love. Find <br />
       the right food to suit your mood, and make the first bite <br />
        last. Go ahead, download app and get 50% discount


      </p>
      <div className="flex gap-[50px]">
        <img src={app_store} alt="" />
        <img src={store_google} alt="" />
      </div>
      </div>
      <div>
        <img src={phone_img} alt="" />
      </div>
   

    </div>
  )
}

