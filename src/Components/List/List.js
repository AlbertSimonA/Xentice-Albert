import React from "react";
import MainFooter from "../Footer/MainFooter";

const List = () => {
  return (
    <>
      <div className="flex mt-16">
        <div className="py-2">
          <img
            className="h-20 px-8 to-white hover:to-white"
            src="./imagelist/builder.png"
            alt=""
          />
          <h6 className="text-black  ml-8 ">Builders</h6>
        </div>
        <div className="py-2">
          <img
            className="h-20 px-8 to-white hover:to-white"
            src="./imagelist/Architects.png"
            alt=""
          />
          <h6 className="text-black ml-8">Architects</h6>
        </div>
        <div className="py-2">
          <img
            className="h-20 px-8 to-white hover:to-white"
            src="./imagelist/Banking.png"
            alt=""
          />
          <h6 className="text-black ml-12">Banking</h6>
        </div>
        <div className="py-2">
          <img
            className="h-20 px-8 to-white hover:to-white"
            src="./imagelist/Itsupport.png"
            alt=""
          />
          <h6 className="text-black ml-8">IT Support</h6>
        </div>
        <div className="py-2">
          <img
            className="h-20 px-8 to-white hover:to-white"
            src="./imagelist/Labours.png"
            alt=""
          />
          <h6 className="text-black ml-8">Labourers</h6>
        </div>
        <div className="py-2">
          <img
            className="h-20 px-8 to-white hover:to-white"
            src="./imagelist/Mentors.png"
            alt=""
          />
          <h6 className="text-black ml-8">Mentors</h6>
        </div>
        <div className="py-2">
          <img
            className="h-20 px-8 to-white hover:to-white"
            src="./imagelist/Advocates.png"
            alt=""
          />
          <h6 className="text-black ml-7">Advocates</h6>
        </div>
        <div className="py-2">
          <img
            className="h-20 px-8 to-white hover:to-white"
            src="./imagelist/Insurance.png"
            alt=""
          />
          <h6 className="text-black ml-7">Insurance</h6>
        </div>
        <div className="py-2">
          <img
            className="h-20 px-8 to-white hover:to-white"
            src="./imagelist/Lifestyle.png"
            alt=""
          />
          <h6 className="text-black ml-7">Life Style</h6>
          <p className="text-black ">(Coming Soon)</p>
        </div>
        <div className="py-2">
          <img
            className="h-20 px-8 to-white hover:to-white"
            src="./imagelist/XenticeMart.png"
            alt=""
          />
          <h6 className="text-black ml-14">Xentice Mart</h6>
          <p className="text-black ml-12">(Coming Soon)</p>
        </div>
      </div>
      <div className="flex justify-center">
        <img
          className="h-60 rounded-2xl shadow-lg"
          src="https://ww2.kqed.org/app/uploads/sites/43/2022/07/GettyImages-1319368869-768x512.jpg"
          alt=""
        />
        <img
          className="h-60 ml-4 rounded-2xl"
          src="https://www.beyoung.in/blog/wp-content/uploads/2020/04/Short-Beard-2-853x1024.jpg"
          alt=""
        />
      </div>
      <MainFooter />
    </>
  );
};

export default List;
