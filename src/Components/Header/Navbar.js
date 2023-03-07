import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="cursor-pointer flex justify-evenly bg-blue-500 p-3">
        <div>
          <img
            className="h-11 px-8 to-white hover:to-white"
            src="./images/Cshop.png"
            alt=""
          />
          <h6 className="text-white">Commercial Shop</h6>
        </div>
        <div>
          <img
            className="h-11 px-8 to-white hover:to-white"
            src="./images/Coffice.png"
            alt=""
          />
          <h6 className="text-white">Commercial Office</h6>
        </div>
        <div>
          <img
            className="h-11 px-8 to-white hover:to-white"
            src="./images/Comland.png"
            alt=""
          />
          <h6 className="text-white">Commercial Land</h6>
        </div>
        <div>
          <img
            className="h-11 px-8 to-white hover:to-white"
            src="./images/Cbuilding.png"
            alt=""
          />
          <h6 className="text-white">Commercial Building</h6>
        </div>
        <div>
          <img
            className="h-11 px-8 to-white hover:to-white"
            src="./images/Ibuilding.png"
            alt=""
          />
          <h6 className="text-white">Industrial Building</h6>
        </div>
        <div>
          <img
            className="h-11 px-8 to-white hover:to-white"
            src="./images/Indusland.png"
            alt=""
          />
          <h6 className="text-white">Industrial Land</h6>
        </div>
        <div>
          <img
            className="h-11 px-8 to-white hover:to-white"
            src="./images/Coworking.png"
            alt=""
          />
          <h6 className="text-white">Co-Working Space</h6>
        </div>

        <div>
          <img
            className="h-11 px-8 to-white hover:to-white"
            src="./Imagelist/pvtoffice.png"
            alt=""
          />
          <h6 className="text-white">Private Office</h6>
        </div>
        <div>
          <img
            className="h-11 px-8 to-white hover:to-white"
            src="./images/Mroom.png"
            alt=""
          />
          <h6 className="text-white">Meeting Room</h6>
        </div>
      </div>
    </>
  );
};

export default Navbar;
