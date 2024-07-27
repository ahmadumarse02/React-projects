import React from "react";
import cardImg1 from "../assets/images/cardImg1.png";
import cardImg2 from "../assets/images/cardImg2.png";
import cardImg3 from "../assets/images/cardImg3.png";
import cardImg4 from "../assets/images/cardImg4.png";
import Card from "./Card";
import personImg1 from "../assets/images/personImg1.svg";
import personImg2 from "../assets/images/personImg2.svg";
import personImg3 from "../assets/images/personImg3.svg";

function Offer() {
  return (
    <div className="container mx-auto">
    <div className="py-20 text-center">
        <h1 className="mb-8 text-5xl font-bold">Today <span class="text-primary">special</span> offers</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
          has been the industry's standard dummy text ever since the 1500s</p>
      </div>
    <div className="flex container gap-8 ">
      <Card cardImg={cardImg1} personImg={personImg1} />
      <Card cardImg={cardImg2} personImg={personImg2} />
      <Card cardImg={cardImg3} personImg={personImg3} />
      <Card cardImg={cardImg4} personImg={personImg1} />
    </div>
    </div>
  );
}

export default Offer;
