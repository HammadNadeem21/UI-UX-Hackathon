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
<div className='bg-white w-[240px] h-[644px] '>
<h1 className={`${PlusJakartaSans600.className} text-[12px] text-[#94A7CB66]`}>M A I N  M E N U</h1>    

<div className='w-[132px] h-[28px] bg-slate-300'>
<AiFillHome/>
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
