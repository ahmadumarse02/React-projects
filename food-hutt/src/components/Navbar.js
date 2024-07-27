import React from "react";
import logo from "../assets/images/Logo.svg";
import Button from "./Button";

function Navbar() {
  return (
    <nav>
      <div className="container mx-auto justify-between py-3 flex">
        <div className="cursor-pointer">
          <img src={logo} alt="" />
        </div>
        <ul className="flex gap-12 items-center">
          <li className="font-bold text-lg hover:text-red-500 duration-200 cursor-pointer">
            Today special offers
          </li>
          <li className="font-bold text-lg hover:text-red-500 duration-200 cursor-pointer">
            Why FoodHut
          </li>
          <li className="font-bold text-lg hover:text-red-500 duration-200 cursor-pointer">
            Our Menu
          </li>
          <li className="font-bold text-lg hover:text-red-500 duration-200 cursor-pointer">
            Our Popular food
          </li>
          <Button btnText="Downloade App" />
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;