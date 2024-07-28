import React from "react";
import cookImg from "../assets/images/aboutimg.png";
import orderImg from "../assets/images/orderImg.svg";
import superChefImg from "../assets/images/superChefImg.svg";
import serviceImg from "../assets/images/servicesImg.svg";
import Button from "./Button.js"

function About() {
  return (
    <>
      <div className="container py-20">
        <div className="flex justify-between">
          <img className="h-[620px]" src={cookImg} alt="" />
          <div className="rightSide w-1/2 py-16">
            <h1 className="text-5xl font-bold max-w-[452px] mb-7">
              We are <span className="text-primary">more</span> than{" "}
              <span class="text-secondary">multiple</span> service
            </h1>
            <p className="mb-4">
              This is a type of resturent which typically serves food and drink,
              in addition to light refreshments such as baked goods or snacks.
              The term comes frome the rench word meaning food
            </p>
            <div className="flex gap-5 py-4">
              <div>
                <div className="flex gap-2 pb-3">
                  <img src={orderImg} alt="" />
                  <p>Online Order</p>
                </div>
                <div className="flex gap-2 pb-3">
                  <img src={superChefImg} alt="" />
                  <p>Pre-Reservation</p>
                </div>
                <div className="flex gap-2 pb-3">
                  <img src={superChefImg} alt="" />
                  <p>Super Chef</p>
                </div>
              </div>
              <div>
                <div className="flex gap-2 pb-3">
                  <img src={serviceImg} alt />
                  <p>24/7 Service</p>
                </div>
                <div className="flex gap-2 pb-3">
                  <img src={superChefImg} alt="" />
                  <p>Oragonized Foodhut Place</p>
                </div>
                <div className="flex gap-2 pb-3">
                  <img src={superChefImg} alt="" />
                  <p>Clean Kitchen</p>
                </div>
              </div>
            </div>
            <Button />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
