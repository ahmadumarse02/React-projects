import React from "react";
import Button from "./Button";
import star from "../assets/images/starImg.svg"


function Card({ cardImg, rating, title , personImg }) {
  return (

      <div className="text-center px-4 py-4 rounded-lg card max-w-[310px] bg-primary bg-opacity-10">
        <img className="mx-auto pb-6" src={cardImg} alt="" />

        <div className="flex justify-center pb-8 gap-4 items-center">
          <img src={personImg} alt="" />
          <div className="flex gap-1">
            <img className="h-6 w-6" src={star} alt="" />
            <p>{rating || "4.5"}</p>
          </div>
        </div>
        <h1 className="pb-6">{title || "Kabab"}</h1>
        <p className="pb-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry
        </p>
        <div className="flex justify-center -mb-8">
          <Button />
        </div>
      </div>

  );
}

export default Card;
