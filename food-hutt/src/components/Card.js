import React from "react";
import Button from "./Button";
import star from "../assets/images/starImg.svg"
import personImg1 from "../assets/images/personImg1.svg"

function Card({ cardImg, rating, title , personImg }) {
  return (

      <div className="text-center px-2 py-4 mx-auto rounded-lg card max-w-[310px] bg-primary bg-opacity-10">
        <img className="mx-auto pb-6" src={cardImg} alt="" />

        <div className="pb-8">
          <img src={personImg || "{personImg1}"} alt="" />
          <div className="flex justify-center gap-1">
            <img src={star} alt="" />
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
