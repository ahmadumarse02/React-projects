import React from "react";
import Card from "../components/Card.js";
import cardImg1 from "../assets/images/cardImg1.png";
import cardImg5 from "../assets/images/cardImg5.png";
import cardImg6 from "../assets/images/cardImg6.png";
import cardImg7 from "../assets/images/cardImg7.png";
import cardImg8 from "../assets/images/cardImg8.png";
import cardImg9 from "../assets/images/cardImg9.png";
import cardImg10 from "../assets/images/cardImg10.png";
import cardImg11 from "../assets/images/cardImg11.png";
import personImg1 from "../assets/images/personImg1.svg";
import Button from "./Button.js";

function Menu() {
  return (
    <div className="container">
      <div class="py-12 text-center">
        <h1 class="mb-8 text-5xl font-bold leading-snug">
          <span class="text-primary">Menu</span> that{" "}
          <span class="text-secondary">always</span> make you
          <br />
          fall in <span class="text-primary">love</span>
        </h1>
      </div>
      <div className="flex gap-8 justify-center pb-24">
        <Button btnText="Ramen" />
        <div className="border-[1px] border-zinc-700 text-zinc-700 rounded-full py-3 px-7 max-w-fit cursor-pointer">
          Breakfast
        </div>
        <div className="border-[1px] border-zinc-700 text-zinc-700 rounded-full py-3 px-7 max-w-fit cursor-pointer">
        Lunch
        </div>
        <div className="border-[1px] border-zinc-700 text-zinc-700 rounded-full py-3 px-7 max-w-fit cursor-pointer">
        Dinner
        </div>
        <div className="border-[1px] border-zinc-700 text-zinc-700 rounded-full py-3 px-7 max-w-fit cursor-pointer">
        Maxican
        </div>
        <div className="border-[1px] border-zinc-700 text-zinc-700 rounded-full py-3 px-7 max-w-fit cursor-pointer">
        Italian
        </div>
        <div className="border-[1px] border-zinc-700 text-zinc-700 rounded-full py-3 px-7 max-w-fit cursor-pointer">
        Desserts
        </div>
        <div className="border-[1px] border-zinc-700 text-zinc-700 rounded-full py-3 px-7 max-w-fit cursor-pointer">
        Drinks
        </div>
      </div>
      
      <div className="flex gap-8 pb-16 justify-center">
        <Card cardImg={cardImg1} personImg={personImg1} />
        <Card cardImg={cardImg5} personImg={personImg1} />
        <Card cardImg={cardImg6} personImg={personImg1} />
        <Card cardImg={cardImg7} personImg={personImg1} />
      </div>
      <div className="flex gap-8 justify-center">
        <Card cardImg={cardImg8} personImg={personImg1} />
        <Card cardImg={cardImg9} personImg={personImg1} />
        <Card cardImg={cardImg10} personImg={personImg1} />
        <Card cardImg={cardImg11} personImg={personImg1} />
      </div>
      </div>
  );
}

export default Menu;
