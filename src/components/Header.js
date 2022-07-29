import React from "react";
import { FiSearch } from "react-icons/fi";
import { RiFilePaperLine } from "react-icons/ri";
import { AiOutlineInbox } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import avatar from "../assets/avatar.png";

const Header = () => {
  return (
    <div className=" bg-gradient-to-b from-sky-400 to-sky-200 2xl:w-[1820px] w-[1269px] pb-28 pt-1">
      <div className="m-5 2xl:ml-[80px] ml-10 ">
        <div className="flex flex-row items-center ">
          <div className="bg-white flex flex-row items-center px-6 py-3  rounded-lg cursor-pointer">
            <FiSearch />
            <input type="search" placeholder="Search.. " style={{ outline: "none" }} className="ml-3 " />
          </div>
          <div className="flex gap-7 text-2xl 2xl:ml-[200px] ml-[100px] cursor-pointer">
            <RiFilePaperLine />
            <AiOutlineInbox />
            <BsThreeDotsVertical />
          </div>
          <div className="flex gap-5 text-lg 2xl:ml-[200px] ml-28  text-cyan-700 font-medium cursor-pointer">
            <p>Wallet</p>
            <p>Invoice</p>
          </div>
          <div className="flex  2xl:ml-[200px] ml-28  items-center gap-3  cursor-pointer ">
            <p className="font-bold text-cyan-800">Hi, Fedryan</p>
            <img src={avatar} alt="" className="w-10 h-10 rounded-lg drop-shadow-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
