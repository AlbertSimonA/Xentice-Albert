import React from "react";

const MainFooter = () => {
  return (
    <>
      <div>
        <div className="mt-6 flex p-10 bg-gray-800 text-white justify-center cursor-pointer">
          <h3 className="font-serif text-2xl">Newsletter – Get Updates & </h3>{" "}
          <br />
          <div className="ml-24 flex  ">
            <input
              className="w-72 rounded-l-3xl h-10 justify-center"
              type="text "
              placeholder="Enter your Email"
            />
            <button className="bg-yellow-500 rounded-r-3xl w-28 text-black font-bold h-10">
              Subscribe
            </button>
          </div>
        </div>
        <div className="justify-center text-center   bg-gray-800">
          <p className="bg-gray-800 text-white  justify-center">
            All rights reserved @ xentice-albert2023
          </p>
        </div>
        <div className="bg-gray-800 p-3"></div>
      </div>
    </>
  );
};

export default MainFooter;
