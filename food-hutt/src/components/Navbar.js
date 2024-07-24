import React from "react"
import logo from "../assets/images/Logo.svg"

function Navbar () {
    return(
    <nav >
    <div className="container mx-auto justify-between py-3 flex">
      <div><img src={logo} alt="" /></div>
      <ul className="flex gap-12 items-center">
        <li className="font-bold text-lg hover:text-red-500 duration-200">Today special offers</li>
        <li className="font-bold text-lg hover:text-red-500 duration-200">Why FoodHut</li>
        <li className="font-bold text-lg hover:text-red-500 duration-200">Our Menu</li>
        <li className="font-bold text-lg hover:text-red-500 duration-200">Our Popular food</li>
        <button className="text-white bg-red-500 rounded-3xl py-3 px-6">
        Downlode App
        </button>
      </ul>
    </div>
    </nav>
    )
}

export default Navbar;