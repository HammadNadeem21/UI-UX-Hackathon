import React from 'react'


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


// Font
import { Plus_Jakarta_Sans } from "next/font/google";


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
      
      <div className='grid grid-cols-[25%,37.5%,37.5%] '>

        {/* Sidebar (Start) */}
<div className='bg-blue-200 py-6 px-8'>

<div className='bg-white w-[240px] h-[750px] '>
<h1 className={`${PlusJakartaSans600.className} text-[12px] text-[#94A7CB66]`}>M A I N  M E N U</h1>    



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


<h1 className={`${PlusJakartaSans600.className} text-[12px] text-[#94A7CB66] mt-5`}>P R E F E R E N C E S</h1>

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




</div>
</div>
<div className='bg-blue-400 h-[200px]'></div>
<div className='bg-blue-600 h-[200px]'></div>


      </div>
    </div>
  )
}

export default Admin
