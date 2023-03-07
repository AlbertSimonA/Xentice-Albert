import React from "react";

const Header = () => {
  return (
    <>
      <div className="flex ">
        <div className="flex ml-10  ">
          <img className="h-10 m-3 px-3 " src="./Images/Hambergur.png" alt="" />
          <h3 className="mt-3 text-4xl font-extrabold font-mono text-blue-500 ">
            xentice
          </h3>
        </div>
        <div className="ml-80 justify-end">
          <div className="flex m-3 ml-96 justify-end text-end">
            <img className="h-10 m-3" src="./ad.png" alt="" />
            <h4 className="mt-4 text-blue-500 ">Post Ad</h4>
            <img className="h-10 m-3 " src="./location.png" alt="" />
            <h4 className="mt-4 text-blue-500 ">Near Me</h4>
            <img
              className="h-10 m-3 "
              src="https://static.thenounproject.com/png/5074866-200.png"
              alt=""
            />
            <h4 className="mt-4 text-blue-500 ">Login/Sign Up</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
