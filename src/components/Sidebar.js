import { useState } from "react";
import icon from "../assets/pokemonIcon.png";
import control from "../assets/control.png";
import help from "../assets/help.png";

// Icons
import { MdCatchingPokemon, MdSpaceDashboard, MdNavigateNext, MdContacts } from "react-icons/md";
import { GiLightBackpack, GiWoodFrame } from "react-icons/gi";
import { FaStore, FaBox, FaFileInvoiceDollar } from "react-icons/fa";
import { BsCalendarDateFill } from "react-icons/bs";

// data Sidebar
const menu = [
  {
    name: "Dashboard",
    icon: <MdSpaceDashboard />,
    gap: true,
  },
  {
    name: "Transactions",
    icon: <GiWoodFrame />,
    gap: true,
  },
  {
    name: "Contacts",
    icon: <MdCatchingPokemon />,
    gap: true,
  },
  {
    name: "Features",
    icon: <GiLightBackpack />,
    gap: true,
  },
];

const settings = [
  {
    name: "Base wallet",
    icon: <FaBox />,
    gap: true,
  },
  {
    name: "My Contacts",
    icon: <MdContacts />,
    gap: true,
  },
  {
    name: "Invoices",
    icon: <FaFileInvoiceDollar />,
    gap: true,
  },
  {
    name: "Schedules",
    icon: <BsCalendarDateFill />,
  },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex">
      <div className={`${isOpen ? "w-[290px] h-cover" : "w-20"} bg-gray-200 2xl:h-cover  p-5 pt-5 relative duration-300`}>
        <img src={control} alt="navbutton" className={`absolute cursor-pointer -right-3 top-8 w-7 border-gray-200 border-2 rounded-full ${!isOpen && "rotate-180"}`} onClick={() => setIsOpen(!isOpen)} />
        <div className="flex gap-x-4 mt-2 items-center">
          <img src={icon} alt="pokeicon" className={`cursor-pointer duration-500 w-10 h-10`} />
          <h1 className={`text-blue-700 font-bold mb-1 text-lg ${!isOpen && "hidden"}`}>Super Finti</h1>
        </div>
        <ul className="pt-5">
          <h1 className={`text-gray-600 font-semibold my-5 ${!isOpen && "hidden"}`}>Main Navigation</h1>
          {menu.map((item, index) => {
            return (
              <li key={index} className={`flex rounded-md p-2 cursor-pointer hover:bg-gray-300 text-blue-500 text-base items-center gap-x-3 ${menu.gap ? "mt-8" : "mt-2"}`}>
                {item.icon}
                <div className={`${!isOpen && "hidden"} text-gray-400`}>{item.name}</div>
                <div className={`${!isOpen && "scale-0"} absolute right-10 text-gray-700 `}>
                  <MdNavigateNext />
                </div>
              </li>
            );
          })}
          <li className="flex items-center gap-3 mt-3 text-blue-500 hover:bg-gray-300 p-2 rounded-md">
            <FaStore />
            <div className={`${!isOpen && "hidden"}`} style={{ color: "rgb(156 163 175)" }}>
              Library
            </div>
          </li>
        </ul>
        <ul className="pt-8">
          <h1 className={`text-gray-600 font-semibold mt-5 ${!isOpen && "hidden"}`}>Settings & Schedules</h1>
          {settings.map((item, index) => {
            return (
              <li key={index} className={`flex rounded-md p-2 cursor-pointer hover:bg-gray-300 text-blue-500 text-base items-center gap-x-3 ${menu.gap ? "mt-8" : "mt-2"}`}>
                {item.icon}
                <div className={`${!isOpen && "hidden"} text-gray-400`}>{item.name}</div>
                <div className={`${!isOpen && "scale-0"} absolute right-10 text-gray-700 `}>
                  <MdNavigateNext />
                </div>
              </li>
            );
          })}
        </ul>
        <div className={`${!isOpen && "scale-0"} bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 rounded-xl relative flex flex-col mt-12 drop-shadow-xl`}>
          <div className="absolute ml-[94px] -top-7 rounded-full border-1 border-white drop-shadow-2xl">
            <img src={help} alt="question mark" className="w-16 h-16 rounded-full border-[13px] border-white  " />
          </div>
          <div className="mt-[70px]">
            <h1 className="text-center font-bold text-xl mb-6">Help Center</h1>
            <h1 className="text-center my-6 text-gray-500 text-base">
              Having trouble in Finti.
              <br /> Please contact us for more <br />
              questions.
            </h1>
          </div>
          <button type="button" className="bg-white rounded-2xl hover:bg-gradient-to-r from-green-200 via-green-300 to-blue-500 p-3 my-8 mx-7 font-semibold drop-shadow-lg">
            Go To Help Center
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
