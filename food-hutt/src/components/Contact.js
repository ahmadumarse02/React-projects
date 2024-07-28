import React from "react"
import contactImg from "../assets/images/contactImg.png"
import GooglePlayLogo from "../assets/images/GooglePlayLogo.svg"
import AppleLogo from "../assets/images/AppleLogo.svg"

function Contact() {
  return (
    <>
    <div className="container">
      <div className="flex justify-between py-24">
        <div className="pt-32 w-1/2">
          <h1 className="text-4xl font-bold max-w-[517px]">It’s Now <span className="text-primary">More Easy</span> to
            <span className="text-secondary"> Order</span> by Our Mobile <span className="text-primary">App</span>
          </h1>
          <p className="py-10 max-w-[500px]">All you need to do is downlode one of the best delivery apps, make a and most companies are
            opting for mobile app devlopment for food delivery</p>
          <button className="flex gap-10">
            <div className='flex gap-3 bg-black text-white py-1 px-3 rounded-lg'>
              <img src={GooglePlayLogo} alt='' />
              <div className='leading-tight text-start'>
                <p>Get It On</p>
                <h6 className='text-xl'>Google Play</h6>
              </div>
            </div>
            <div className='flex gap-3 bg-black text-white py-1 px-3 rounded-lg justify-between'>
              <img src={AppleLogo} alt='' />
              <div className='leading-tight text-start'>
                <p>Downlode on the</p>
                <h6 className='text-xl'>App Store</h6>
              </div>
            </div>
          </button>
        </div>
        <div className='w-1/2 flex justify-end'>
        <img className="w-[500px]" src={contactImg} alt="" />
        </div>
      </div>
    </div>
    </>
  )
}

export default Contact