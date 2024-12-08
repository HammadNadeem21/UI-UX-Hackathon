// Navbar Component
import React from "react";

import Image from "next/image";

// Icons
// filter-Icon
import filter from "../../public/icon/filter.png";
// Search-Icon
import { CiSearch } from "react-icons/ci";
// Favourite-Icon
import { MdFavorite } from "react-icons/md";
// Notification-Icon
import { IoNotifications } from "react-icons/io5";
// Setting-Icons
import { IoMdSettings } from "react-icons/io";

// Fonts
import { Plus_Jakarta_Sans } from "next/font/google";
import { AvatarDemo } from "./Avatar";
const PlusJakartaSans = Plus_Jakarta_Sans({
  weight: "700",
  display: "swap",
  subsets: ["latin"],
});

const Navbar = () => {
  return (
    <div className="bg-white">
      <div className="w-full h-[124px] border-[1px] border-[#C3D4E966] flex pt-[40px] px-[50px]">
        <div className="w-[55%] h-[50px] flex justify-between ">
          <h1
            className={`${PlusJakartaSans.className} text-[32px] font-[700] text-[#3563E9] cursor-pointer tracking-tighter`}
          >
            MORENT
          </h1>

          {/* Search-bar */}
          <div className="flex items-center  rounded-full border px-4 py-2 2xl::w-[492px] 2xl:h-[44px] w-[420px] h-[44px] mt-1">
            {/* Search Icon */}
            <CiSearch size={24} className="text-[#596780] cursor-pointer" />

            {/* Input Field */}
            <input
              type="text"
              placeholder="Search something here"
              className="flex-grow outline-none text-gray-700 ml-3"
            />

            {/* Filter Icon */}
            <Image
              src={filter}
              alt="filter"
              className="w-[24px] h-[24px] cursor-pointer"
            />
          </div>
        </div>

        <div className="w-[45%] h-[50px] flex justify-end py-[3px]">
          <div className=" w-[236px] h-[44px] flex gap-[20px]">
            {/* Favourite-icon */}
            <div className="2xl:w-[45px] 2xl:h-[45px] lg:w-[40px] lg:h-[40px] border border-[#C3D4E966] rounded-full py-[3.5px] px-[4px]">
            <MdFavorite className="text-[#717e96] 2xl:w-[35px] 2xl:h-[35px] w-[30px] h-[30px] " />
            </div>
            {/* Notification-icon */}


            {/* <div className="2xl:w-[45px] 2xl:h-[45px] lg:w-[40px] lg:h-[40px] border border-[#C3D4E966] rounded-full py-[3.5px] px-[4px]">
            <IoNotifications className="text-[#717e96] 2xl:w-[35px] 2xl:h-[35px] w-[30px] h-[30px] " />
            </div> */}

<div className="relative 2xl:w-[45px] 2xl:h-[45px] lg:w-[40px] lg:h-[40px] border border-[#C3D4E966] rounded-full py-[3.5px] px-[4px]">
  {/* Notification Icon */}
  <IoNotifications className="text-[#717e96] 2xl:w-[35px] 2xl:h-[35px] w-[30px] h-[30px]" />

  {/* Notification Dot */}
  <span className="absolute top-[-2px] right-1 w-[11px] h-[11px] bg-[#FF4423] rounded-full border-2 border-white"></span>
</div>


            {/* Setting-icon */}
            <div className="2xl:w-[45px] 2xl:h-[45px] lg:w-[40px] lg:h-[40px] border border-[#C3D4E966] rounded-full py-[3.5px] px-[4px]">
            <IoMdSettings className="text-[#717e96] 2xl:w-[35px] 2xl:h-[35px] w-[30px] h-[30px] " />
            </div>

            {/* Avatar */}
            <AvatarDemo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
