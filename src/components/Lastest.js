import React from "react";
import { FiSearch } from "react-icons/fi";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import { MdSend } from "react-icons/md";
import { TiArrowLeftThick, TiArrowRightThick } from "react-icons/ti";

const Lastest = () => {
  return (
    <div className="ml-10 bg-gray-100 rounded-lg px-8 pt-6 pb-5 mt-10">
      <div className="flex flex-row items-center">
        <p className="font-bold  text-">Latest Transactions</p>
        <div className="flex 2xl:ml-[384px] ml-[364px] gap-5 text-lg cursor-pointer">
          <FiSearch />
          <TbAdjustmentsHorizontal />
        </div>
      </div>
      <p className="my-5 font-semibold text-green-700">Mon, Mar 1</p>

      <div className="flex items-center">
        <div className="border-8 border-gray-400 text-gray-900 bg-gray-400 rounded-md text-xl">
          <TiArrowRightThick />
        </div>
        <div className="flex ml-4">
          <p className="font-semibold">Payment Sent to Shakir</p>
          <p className="font-bold text-red-400 ml-[300px]">$560.00</p>
        </div>
      </div>

      <div className="flex items-center my-5">
        <div className="border-8 border-gray-400 text-gray-900 bg-gray-400 rounded-md text-xl">
          <TiArrowLeftThick />
        </div>
        <div className="flex ml-4">
          <p className="font-semibold">Salary from Redwhale</p>
          <p className="font-bold ml-[292px]">$12,200.00</p>
        </div>
      </div>

      <div className="flex items-center">
        <div className="border-8 border-gray-400 text-gray-900 bg-gray-400 rounded-md text-xl">
          <MdSend />
        </div>
        <div className="flex ml-4">
          <p className="font-semibold">Money Sent to Wise.com</p>
          <p className="font-bold text-red-400 ml-[275px]">$3,000.00</p>
        </div>
      </div>
      <p className="my-5 font-semibold text-green-700">Mon, Mar 1</p>
      <div className="flex items-center">
        <div className="border-8 border-gray-400 text-gray-900 bg-gray-400 rounded-md text-xl">
          <TiArrowRightThick />
        </div>
        <div className="flex ml-4">
          <p className="font-semibold">Purchased Macbook Pro</p>
          <p className="font-bold text-red-400 ml-[286px]">$5560.00</p>
        </div>
      </div>
    </div>
  );
};

export default Lastest;
