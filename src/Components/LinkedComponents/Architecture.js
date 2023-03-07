import React from "react";

const Architecture = () => {
  return (
    <>
      <div>
        <div className="flex ">
          <div className="flex ml-10 ">
            <img
              className="h-20 m-3 px-3 "
              src="./Imagelist/Architects.png"
              alt=""
            />
            <h3 className="mt-6 text-3xl font-extrabold font-mono text-blue-500 ">
              Architects
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
                src="https://e7.pngegg.com/pngimages/448/41/png-clipart-computer-icons-information-logo-encapsulated-postscript-information-security-cdr-logo.png"
                alt=""
              />
              <h4 className="mt-4 text-blue-500 ">About</h4>
              <img
                className="h-10 m-3 "
                src="https://static.thenounproject.com/png/5074866-200.png"
                alt=""
              />
              <h4 className="mt-4 text-blue-500 ">Login/Sign Up</h4>
            </div>
          </div>
        </div>
        <div className="bg-cover relative">
          <img
            src="https://t3.ftcdn.net/jpg/02/84/83/92/360_F_284839254_KcECglfZN5jnbJqQo7vLrHv16UAvXkDh.webp"
            alt=""
            className=" object-cover absolute mix-blend-overlay w-full h-96"
          />
          <div
            className="pt-20 text-black
           ml-16 font-mono text-5xl"
          >
            <h3>We Create Beautiful Home Exteriors</h3>
            <button className="h-14 w-32 rounded-3xl cursor-pointer bg-yellow-600 text-black text-lg font-bold font-sans">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Architecture;
