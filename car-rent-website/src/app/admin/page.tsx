import React from "react";

// Icons
import { AiFillHome } from "react-icons/ai";
import { FaCarAlt } from "react-icons/fa";
import { MdSignalCellularAlt } from "react-icons/md";
import { RiPriceTag2Fill } from "react-icons/ri";
import { LuMessageSquareMore } from "react-icons/lu";
import { BiSolidCalendar } from "react-icons/bi";
import { RiSettingsFill } from "react-icons/ri";
import { MdErrorOutline } from "react-icons/md";
import { CgDarkMode } from "react-icons/cg";

// Components
// Switch button
import { SwitchDemo } from "@/components/Switch";

// Image
import Image from "next/image";
import Maps from "../../../public/Admin/Maps.png";
import View1 from "../../../public/Admin/View1.png";

// Font
import { Plus_Jakarta_Sans } from "next/font/google";
import { SelectAdmin } from "@/components/SelectAdmin";
import { Component } from "@/components/chart";

const PlusJakartaSans700 = Plus_Jakarta_Sans({
  weight: "700",
  display: "swap",
  subsets: ["latin"],
});
const PlusJakartaSans500 = Plus_Jakarta_Sans({
  weight: "500",
  display: "swap",
  subsets: ["latin"],
});
const PlusJakartaSans600 = Plus_Jakarta_Sans({
  weight: "600",
  display: "swap",
  subsets: ["latin"],
});

const Admin = () => {
  return (
    <div>
      <div className="grid grid-cols-[25%,37.5%,37.5%] ">
        {/* Sidebar (Start) */}
        <div className="bg-white py-6 px-8">
          <div className="w-[240px] h-[750px] ">
            <h1
              className={`${PlusJakartaSans600.className} text-[12px] text-[#94A7CB66]`}
            >
              M A I N M E N U
            </h1>

            {/* Dashboard */}
            <div className="w-[200px] h-[45px] flex items-center mt-5 rounded-[10px] cursor-pointer group hover:bg-[#3563E9]">
              <AiFillHome
                size={24}
                className="text-[#90A3BF] ml-3 group-hover:text-white"
              />
              <h1
                className={`${PlusJakartaSans500.className} text-[16px] text-[#90A3BF] ml-3 group-hover:text-white`}
              >
                Dashboard
              </h1>
            </div>

            {/* Car-Rent */}
            <div className="w-[200px] h-[45px] flex items-center mt-5 rounded-[10px] cursor-pointer group hover:bg-[#3563E9]">
              <FaCarAlt
                size={24}
                className="text-[#90A3BF] ml-3 group-hover:text-white"
              />
              <h1
                className={`${PlusJakartaSans500.className} text-[16px] text-[#90A3BF] ml-3 group-hover:text-white`}
              >
                Car Rent
              </h1>
            </div>

            {/* Insight */}
            <div className="w-[200px] h-[45px] flex items-center mt-5 rounded-[10px] cursor-pointer group hover:bg-[#3563E9]">
              <MdSignalCellularAlt
                size={24}
                className="text-[#90A3BF] ml-3 group-hover:text-white"
              />
              <h1
                className={`${PlusJakartaSans500.className} text-[16px] text-[#90A3BF] ml-3 group-hover:text-white`}
              >
                Insight
              </h1>
            </div>

            {/* Reimburse */}
            <div className="w-[200px] h-[45px] flex items-center mt-5 rounded-[10px] cursor-pointer group hover:bg-[#3563E9]">
              <RiPriceTag2Fill
                size={24}
                className="text-[#90A3BF] ml-3 group-hover:text-white"
              />
              <h1
                className={`${PlusJakartaSans500.className} text-[16px] text-[#90A3BF] ml-3 group-hover:text-white`}
              >
                Reimburse
              </h1>
            </div>

            {/*Inbox */}
            <div className="w-[200px] h-[45px] flex items-center mt-5 rounded-[10px] cursor-pointer group hover:bg-[#3563E9]">
              <LuMessageSquareMore
                size={24}
                className="text-[#90A3BF] ml-3 group-hover:text-white"
              />
              <h1
                className={`${PlusJakartaSans500.className} text-[16px] text-[#90A3BF] ml-3 group-hover:text-white`}
              >
                Inbox
              </h1>
            </div>

            {/* Calender */}
            <div className="w-[200px] h-[45px] flex items-center mt-5 rounded-[10px] cursor-pointer group hover:bg-[#3563E9]">
              <BiSolidCalendar
                size={24}
                className="text-[#90A3BF] ml-3 group-hover:text-white"
              />
              <h1
                className={`${PlusJakartaSans500.className} text-[16px] text-[#90A3BF] ml-3 group-hover:text-white`}
              >
                Calender
              </h1>
            </div>

            <h1
              className={`${PlusJakartaSans600.className} text-[12px] text-[#94A7CB66] mt-5`}
            >
              P R E F E R E N C E S
            </h1>

            {/* Setting */}
            <div className="w-[200px] h-[45px] flex items-center mt-5 rounded-[10px] cursor-pointer group hover:bg-[#3563E9]">
              <RiSettingsFill
                size={24}
                className="text-[#90A3BF] ml-3 group-hover:text-white"
              />
              <h1
                className={`${PlusJakartaSans500.className} text-[16px] text-[#90A3BF] ml-3 group-hover:text-white`}
              >
                Setting
              </h1>
            </div>

            {/*Help & Center */}
            <div className="w-[200px] h-[45px] flex items-center mt-5 rounded-[10px] cursor-pointer group hover:bg-[#3563E9]">
              <MdErrorOutline
                size={24}
                className="text-[#90A3BF] ml-3 group-hover:text-white"
              />
              <h1
                className={`${PlusJakartaSans500.className} text-[16px] text-[#90A3BF] ml-3 group-hover:text-white`}
              >
                Help & Center
              </h1>
            </div>

            {/* Dark Mode */}
            <div className="w-[150px] h-[45px] flex items-center mt-5 rounded-[10px] cursor-pointer group hover:bg-[#3563E9]">
              <CgDarkMode
                size={24}
                className="text-[#90A3BF] ml-3 group-hover:text-white"
              />
              <h1
                className={`${PlusJakartaSans500.className} text-[16px] text-[#90A3BF] ml-3 group-hover:text-white`}
              >
                Dark Mode
              </h1>
            </div>

            <div className="ml-[160px] mt-[-30px]">
              <SwitchDemo />
            </div>
          </div>
        </div>
        {/* Sidebar (End) */}

        {/* Detail Rental Card */}
        <div className="bg-blue-400 h-[807px] py-[13px] px-5">
          <div className="w-[464px] h-[780px] bg-white rounded-[10px] px-[15px] py-[10px]">
            <div className="w-[434px] h-[760px] ">
              <h1
                className={`${PlusJakartaSans700.className} text-[20px] text-[#1A202C]`}
              >
                Details Rental
              </h1>

              {/* Map Picture */}
              <Image
                src={Maps}
                alt="Maps"
                height={300}
                width={300}
                className="w-[434px] h-[272px] mt-4 rounded-[10px]"
              />

              {/* Car Name */}
              <div className="w-full h-[68px] mt-[30px] flex justify-between">
                <div className="w-[60%] flex justify-between">
                  <Image
                    src={View1}
                    alt="car"
                    height={300}
                    width={300}
                    className="w-[102px] h-[68px]"
                  />

                  <div className=" py-2">
                    <h1
                      className={`${PlusJakartaSans700.className} text-[20px] text-[#1A202C]`}
                    >
                      Nissan GT - R
                    </h1>
                    <h2
                      className={`${PlusJakartaSans500.className} text-[#1A202C] text-[12px]`}
                    >
                      Sport Car
                    </h2>
                  </div>
                </div>
                <div className="w-[30%] flex justify-end">
                  <h2
                    className={`${PlusJakartaSans500.className} text-[14px] text-[#3D5278] mt-1`}
                  >
                    #9761
                  </h2>
                </div>
              </div>

              {/* Pick up & Drop off */}

              <div className="mt-6">
                <input type="radio" name="pick" id="pick" />
                <label
                  htmlFor="pick"
                  className={`${PlusJakartaSans600.className} text-[16px] text-[#1A202C] ml-3`}
                >
                  Pick - Up
                </label>
              </div>

              <div className="w-full h-[48px] gap-2 mt-3 grid grid-cols-3">

                <div className="border-[#C3D4E9] border-r-2">
                  <h1
                    className={`${PlusJakartaSans700.className} text-[16px] text-[#1A202C]`}
                  >
                    Locations
                  </h1>
                  <SelectAdmin name="Karachi" opt1="Lahore" opt2="Quetta" />
                </div>


                <div className="">
                <div className="border-[#C3D4E9] border-r-2">
                  <h1
                    className={`${PlusJakartaSans700.className} text-[16px] text-[#1A202C]`}
                  >
                    Date
                  </h1>
                  <SelectAdmin name="10 Dec 2024" opt1="11 Dec 2024" opt2="17 Dec 2024" />
                </div>
                </div>


                <div>
                <div>
                  <h1
                    className={`${PlusJakartaSans700.className} text-[16px] text-[#1A202C]`}
                  >
                    Time
                  </h1>
                  <SelectAdmin name="07:00" opt1="12:00" opt2="04:00" />
                </div>
                </div>
              </div>


              <div className="mt-6">
                <input type="radio" name="pick" id="drop" />
                <label
                  htmlFor="drop"
                  className={`${PlusJakartaSans600.className} text-[16px] text-[#1A202C] ml-3`}
                >
                  Drop - Off                  
                </label>
              </div>

              <div className="w-full h-[48px] gap-2 mt-3 grid grid-cols-3">

                <div className="border-[#C3D4E9] border-r-2">
                  <h1
                    className={`${PlusJakartaSans700.className} text-[16px] text-[#1A202C]`}
                  >
                    Locations
                  </h1>
                  <SelectAdmin name="Karachi" opt1="Lahore" opt2="Quetta" />
                </div>


                <div className="">
                <div className="border-[#C3D4E9] border-r-2">
                  <h1
                    className={`${PlusJakartaSans700.className} text-[16px] text-[#1A202C]`}
                  >
                    Date
                  </h1>
                  <SelectAdmin name="10 Dec 2024" opt1="11 Dec 2024" opt2="17 Dec 2024" />
                </div>
                </div>


                <div>
                <div>
                  <h1
                    className={`${PlusJakartaSans700.className} text-[16px] text-[#1A202C]`}
                  >
                    Time
                  </h1>
                  <SelectAdmin name="07:00" opt1="12:00" opt2="04:00" />
                </div>
                </div>
              </div>


              <div className="h-[2px] w-full bg-[#C3D4E966] mt-8"></div>


              <div className="w-full h-[48px]  mt-8 flex">

                <div className="w-[70%] ">
                  <h1 className={`${PlusJakartaSans700.className} text-[18px] text-[#1A202C]`}>Total Rental Price</h1>
                  <h2 className={`${PlusJakartaSans500.className} text-[13px] text-[#90A3BF]`}>Overall price and includes rental discount</h2>
                </div>
                <div className="w-[30%] ">
                  <h1 className={`${PlusJakartaSans700.className} text-[30px] text-[#1A202C]`}>$80.00</h1>
                </div>
              </div>

            </div>
          </div>
        </div>


{/* chart */}
        <div className="bg-blue-600 h-[807px] py-[13px] px-5">

          <div className="rounded-[10px] px-[15px] pt-[10px] w-[464px] h-[300px] bg-purple-300">
          <h1
                className={`${PlusJakartaSans700.className} text-[20px] text-[#1A202C]`}
              >
                Top 5 Car Rental
              </h1>

              <div>
                <Component/>
              </div>
          </div>


        </div>


      </div>

    </div>
  );
};

export default Admin;
