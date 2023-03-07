import React from "react";

const Drop = () => {
  return (
    <>
      <div className="relative w-full lg:max-w-sm">
        <select className="w-80 p-1 ml-16 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
          <option>Looking for</option>
          <option>Builders</option>
          <option>Architects</option>
          <option>Banking</option>
          <option>IT Supporters</option>
          <option>Labourers</option>
          <option>Advocates</option>
          <option>Mentors</option>
          <option>Insurance</option>
        </select>
        <select className="w-80 p-1 mt-2 ml-16 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
          <option>Select City</option>
          <option>Trivandrum</option>
          <option>Ernakulam</option>
          <option>Thrissur</option>
          <option>Alappuzha</option>
          <option>Kannur</option>
          <option>Kasargod</option>
          <option>Palakkad</option>
          <option>Idukki</option>
          <option>Malappuram</option>
        </select>
      </div>
    </>
  );
};

export default Drop;
