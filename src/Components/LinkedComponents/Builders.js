import React from "react";

const Builders = () => {
  return (
    <>
      <div className="flex ">
        <div className="flex ml-10 ">
          <img
            className="h-20 m-3 px-3 "
            src="./Imagelist/builder.png"
            alt=""
          />
          <h3 className="mt-6 text-3xl font-extrabold font-mono text-blue-500 ">
            Builders
          </h3>
        </div>
        <div className="ml-60 justify-end">
          <div className="flex m-3 ml-96 justify-end text-end">
            <img
              className="h-10 m-3"
              src="https://www.freepnglogos.com/uploads/logo-home-png/chimney-home-icon-transparent-1.png"
              alt=""
            />
            <h4 className="mt-4 text-blue-500 ">Home</h4>
            <img
              className="h-10 m-3 "
              src="https://toppng.com/uploads/preview/phone-icon-11549498584attf3ik674.png"
              alt=""
            />
            <h4 className="mt-4 text-blue-500 ">Contact</h4>
            <img
              className="h-10 m-3 "
              src="https://static.thenounproject.com/png/5074866-200.png"
              alt=""
            />
            <h4 className="mt-4 text-blue-500 ">Login/Sign Up</h4>
          </div>
        </div>
      </div>

      <div className="bg-cover   relative">
        <img
          src="https://www.hhh.umn.edu/sites/hhh.umn.edu/files/2020-08/PIWP_Banner_iStock.jpg"
          alt=""
          className=" object-cover absolute mix-blend-overlay w-full h-96"
        />

        <div className="pt-64 text-white  justify-center ml-36 font-bold text-4xl">
          <h2 className="justify-center">Your Dream Jobs Are Waiting</h2>
          <h6>
            Over 2.5 million interactions, 30,000 success stories Make yours
            now.
          </h6>
        </div>
        <div className="mt-16 ml-16 flex justify-evenly">
          <div>
            <h4 className="font-bold text-3xl mt-10 text-blue-500">
              Looking for resources?
            </h4>
            <h4 className="font-bold text-3xl mt-2 text-blue-500">
              {" "}
              Want to apply for a Job?
            </h4>
            <p className="font-mono mt-3">
              Talk about how you're looking for a new challenge in your career,{" "}
              <br />
              learning a new industry or focus area, or needing to find a new{" "}
              <br />
              job because you're relocating—those are honest, relatable answers.{" "}
              <br />
              You say: “I feel as though I'm ready for another stage in my{" "}
              <br />
              career. A new challenge.
            </p>
          </div>
          <div>
            <img
              className="h-56 mt-16 rounded-xl"
              src="https://p.w3layouts.com/demosWTR/Freedom/25-04-2020/hr-crew-freedom-demo_Free/422566165/web/assets/images/b5.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div>
        <div className="flex p-10 bg-gray-800 text-white justify-center cursor-pointer">
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

export default Builders;
