import React from "react";
import { BsChevronDown, BsQuestionCircleFill } from "react-icons/bs";
import box from "../assets/big-box.png";
import mc from "../assets/mc.png";

const MainSection = () => {
  return (
    <div className={` flex 2xl:ml-20 gap-12 ml-10 gap-6  mt-[-80px] drop-shadow-md `}>
      <div className="bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-600 2xl:pb-4 pb-4 px-10  pt-2 text-sm rounded-xl ">
        <div className="flex mt-4">
          <p className="mr-20 font-bold">Your Working Balance</p>
          <p className="underline underline-offset-4 text-gray-500 cursor-pointer">Saving Account</p>
        </div>
        <div className="flex mt-20 items-center mb-3">
          <h1 className="mr-16 text-3xl font-bold">PKR 9,250,000</h1>
          <p className="text-xs font-bold mr-3">PKR</p>
          <BsChevronDown />
        </div>
      </div>

      {/* card 2 */}
      <div className="bg-gradient-to-r from-red-400 via-gray-300 to-blue-500 2xl:pb-4 pb-4 px-10  pt-2 text-sm rounded-xl ">
        <div className="flex mt-4 items-center">
          <p className="mr-36 font-bold">Your Working Balance</p>
          <BsQuestionCircleFill />
        </div>
        <div className="flex mt-20 items-center mb-3">
          <img src={box} alt="" className="w-12 h-12 border-8 rounded-full" />
          <div className="flex flex-col ml-2">
            <h1 className="mr-16 text-3xl font-bold text-red-500">4.28%</h1>
            <p className="text-xs font-bold mr-3">Your spending increased</p>
          </div>
        </div>
      </div>

      {/* card 3 */}
      <div className="bg-gradient-to-r from-yellow-200 via-green-200 to-green-500 2xl:pb-4 pb-4 px-10  pt-2 text-sm rounded-xl ">
        <div className="flex flex-col mt-4 ">
          <img src={mc} alt="" className="w-10 h-8" />
          <p className="text-md text-gray-600 mt-5 font-semibold" style={{ fontSize: "9px" }}>
            CARD NUMBER
          </p>
          <h1 className="font-bold text-lg">3829 4820 4629 5025</h1>
        </div>
        <div className="flex mt-6 justify-between">
          <div>
            <p className="text-xs font-semibold text-gray-600" style={{ fontSize: "9px" }}>
              CARD HOLDER NAME
            </p>
            <h1 className="font-bold">Fedryan Bandarisa</h1>
          </div>
          <div className="ml-28">
            <p className="text-xs font-semibold text-gray-600" style={{ fontSize: "9px" }}>
              VALID THRU
            </p>
            <h1 className="font-bold">08/22</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
