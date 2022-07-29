import React from "react";
import water from "../assets/water.png";
import salary from "../assets/salary.png";
import electric from "../assets/electric.png";
import trans from "../assets/trans.png";

const Upcoming = () => {
  return (
    <div className="ml-1  rounded-lg px-8 pt-6 pb-5 mt-8">
      <div className="flex flex-row items-center">
        <h1 className="font-bold 2xl:mr-[240px] mr-[217px]">Upcoming Transactions</h1>
        <h1 className="hover:text-gray-500 cursor-pointer">View all</h1>
      </div>
      <p className="my-2 font-semibold text-green-700">Today</p>

      <div className="flex items-center">
        <div className="border-8 border-gray-400 text-gray-900 bg-gray-400 rounded-md text-xl">
          <img src={water} alt="" className="w-8 h-7" />
        </div>
        <div className="flex ml-3">
          <p className="font-semibold">Water bill</p>
          <p className="font-bold text-red-400 2xl:ml-[305px] ml-[283px]">- $280</p>
        </div>
      </div>
      <p className="my-2 font-semibold text-green-700">Tommorow</p>
      <div className="flex items-center my-3">
        <div className="border-8 border-gray-400 text-gray-900 bg-gray-400 rounded-md text-xl">
          <img src={salary} alt="" className="w-9 h-7" />
        </div>
        <div className="flex ml-3">
          <p className="font-semibold">Income: Salary Oct</p>
          <p className="font-bold 2xl:ml-[220px] ml-[200px]">+$1200</p>
        </div>
      </div>

      <div className="flex items-center my-5">
        <div className="border-8 border-gray-400 text-gray-900 bg-gray-400 rounded-md text-xl">
          <img src={electric} alt="" className="w-8 h-7" />
        </div>
        <div className="flex ml-3">
          <p className="font-semibold">Electric bill</p>
          <p className="font-bold text-red-400 2xl:ml-[290px] ml-[271px]">- $480</p>
        </div>
      </div>

      <div className="flex items-center my-5">
        <div className="border-8 border-gray-400 text-gray-900 bg-gray-400 rounded-md text-xl">
          <img src={trans} alt="" className="w-8 h-7" />
        </div>
        <div className="flex ml-3">
          <p className="font-semibold">Income: Jane transfer</p>
          <p className="font-bold 2xl:ml-[200px] ml-[180px]">+ $500</p>
        </div>
      </div>

      <div className="flex items-center">
        <div className="border-8 border-gray-400 text-gray-900 bg-gray-400 rounded-md text-xl">
          <img src={trans} alt="" className="w-8 h-7" />
        </div>
        <div className="flex ml-3">
          <p className="font-semibold">Income: Jane transfer</p>
          <p className="font-bold  2xl:ml-[200px] ml-[180px]">+ $500</p>
        </div>
      </div>
    </div>
  );
};

export default Upcoming;
