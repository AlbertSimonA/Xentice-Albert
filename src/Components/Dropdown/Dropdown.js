import React from "react";
import Drop from "./Drop";

const Dropdown = () => {
  return (
    <>
      <div className=" bg-cover   relative">
        <img
          src="https://blogs.worldbank.org/sites/default/files/styles/hero/public/blogs-images/2020-08/doha_lights.jpg.webp"
          alt=""
          className=" object-cover absolute mix-blend-overlay w-full h-96"
        />
        <div className="pt-8">
          <div
            className="bg-white ml-16  w-5/12 rounded-2xl h-80
      "
          >
            <div className="  p-5 px-16 ">
              <h2 className=" text-3xl font-bold text-black">
                Choose from 25,00+{" "}
              </h2>
              <h2 className=" mt-2 text-3xl font-bold text-black">
                Spaces for your
              </h2>

              <h1 className="mt-2 text-3xl font-bold text-black">Business</h1>
              <p className="text-bold text-black">
                Get inspired and find your perfect place
              </p>
            </div>
            <Drop />

            <div className="grid mt-1">
              <button className="bg-blue-900 mt-1 h-10 text-white font-bold w-80 ml-16 rounded-lg">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dropdown;
