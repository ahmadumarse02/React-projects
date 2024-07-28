import React from "react"
import Facebook from "../assets/images/Facebook.svg"
import Instagram from "../assets/images/instagram.svg"
import Twitter from "../assets/images/Twitter.svg"

function Footer() {
  return (
    <>

    <div class="pt-10 pb-24 px-10">
      <div class="flex justify-between px-24">
        <div class="mb-6">
          <h1 class="mb-6 text-2xl font-bold text-primary">Foodhut</h1>
          <p class="mb-6 max-w-[320px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          </p>
          <div class="flex gap-5">
            <img src={Facebook} alt="" />
            <img src={Instagram} alt="" />
            <img src={Twitter} alt="" />
          </div>
        </div>
        <div class="flex justify-between gap-16">
          <div>
            <h1 class="mb-6 text-2xl font-bold text-primary">About Us</h1>
            <p>About Us</p>
            <p>Service Us</p>
            <p>Contact</p>
            <p>Company</p>
          </div>

          <div class="">
            <h1 class="mb-6 text-2xl font-bold text-primary">Company</h1>
            <p>Partnership</p>
            <p>Terms of Use</p>
            <p>Privacy</p>
            <p>Sitemap</p>
          </div>
        </div>
        <div>
          <h1 class="mb-6 text-2xl font-bold text-primary">Get in touch</h1>
          <p class="mb-6 max-w-[320px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          </p>
          <div class="flex gap-5">
            <input class="px-4 py-2 outline-none bg-primary bg-opacity-5 rounded-3xl" type="search" placeholder="Email"
              name="" id="" />
            <button class="px-4 py-2 text-sm font-bold text-white duration-200 ease-in bg-primary rounded-3xl">
              <a href="#contact">Subscribe</a>
            </button>
          </div>
        </div>
      </div>
     <p className='text-center pt-8'>Copyright © 2022 Foodhut.</p>
    </div>


    </>
  )
}

export default Footer