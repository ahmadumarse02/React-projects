import React from "react";
import Heroimage from "../assets/images/heroImage.svg";
import heartlogo from "../assets/images/heartlogo.svg";
import { FaSearch } from "react-icons/fa";
import Button from "./Button";
import playButton from "../assets/images/playButton.svg";

function Home() {
  return (
    <section id="Hero">
      <div className="container flex justify-between">
        <div className="py-8">
          <button className="py-4">
            <div className="flex gap-2 bg-primary bg-opacity-5 py-2 px-4 rounded-3xl">
              <img src={heartlogo} />
              <p>People Trust us</p>
            </div>
          </button>

          <h1 className="text-6xl font-bold pt-4 pb-7 max-w-[530px]">
            We're <span className="text-primary">Serious</span> For{" "}
            <span className="text-primary">Food</span> &{" "}
            <span className="text-secondary">Delivery</span>.
          </h1>

          <p className="text-lg max-w-[400px] pb-7">
            Best cooks and best delivery guys all at your service. Hot tasty
            food will reach you in 60 minutes.
          </p>

          <div
            id="search bar"
            className="flex justify-between border-slate-800 border-[1px] rounded-full py-2 px-3 items-center mb-8"
          >
            <div className="flex gap-3">
              <FaSearch className="h-6 w-6" />
              <input
                className="outline-none"
                type="search"
                placeholder="Search food"
              />
            </div>

            <div className="bg-secondary rounded-full p-2">
              <FaSearch color="white" className=" h-6 w-6" />
            </div>
          </div>

          <div className="flex gap-3">
            <Button btnText="Downloade App" />
            <button className="flex items-center gap-2">
              <img className="z-20 p-4 bg-white shadow-md shadow-primary rounded-3xl bg-opacity-90" src={playButton} alt="" />
              <a className="text-lg" href="">
                Watch Video
              </a>
            </button>
          </div>
        </div>

        <div>
          <img className="w-[650px]" src={Heroimage} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Home;
