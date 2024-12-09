// "use client"

// import React from "react";

// // Fonts
// import { Plus_Jakarta_Sans } from "next/font/google";
// const PlusJakartaSans600 = Plus_Jakarta_Sans({
//   weight: "600",
//   display: "swap",
//   subsets: ["latin"],
// });
// const PlusJakartaSans700 = Plus_Jakarta_Sans({
//   weight: "700",
//   display: "swap",
//   subsets: ["latin"],
// });
// const PlusJakartaSans500 = Plus_Jakarta_Sans({
//   weight: "500",
//   display: "swap",
//   subsets: ["latin"],
// });

// // Images
// import Image from "next/image";
// import first from "../../public/popularCars/first.png";
// import NissanGtR1 from "../../public/popularCars/NissanGtR1.png";
// import rollsRoyal from "../../public/popularCars/rollsRoyal.png";

// // Icos
// import { MdFavorite } from "react-icons/md";
// import { BsFillFuelPumpFill } from "react-icons/bs";
// import { TbSteeringWheel } from "react-icons/tb";
// import { FaUserGroup } from "react-icons/fa6";



// const Popular = () => {
//   return (
//     <div>
//       <section>
//         <div className="container px-2 py-24 mx-auto">
//           <div
//             className={`${PlusJakartaSans600.className} w-full h-[30px] mb-5 flex justify-between`}
//           >
//             <h1 className="text-[#90A3BF] text-[16px]">Popular Carr</h1>

//             <button className="text-[#3563E9] text-[16px]">View All</button>
//           </div>
//           <div className="flex flex-wrap gap-[18px] -m-4">
//             {/* Card 1 */}
//             <div className=" md:w-[304px] p-4 w-full bg-white rounded-lg">
//               <div className="w-[270px] h-[38px] flex justify-between">
//                 <h1
//                   className={`${PlusJakartaSans700.className} w-[128px] text-[20px] text-[#1A202C]`}
//                 >
//                   Koenigsegg
//                 </h1>
//                 <MdFavorite size={24} className="text-[#ED3F3F] mt-2" />
//               </div>
//               <h2
//                 className={`${PlusJakartaSans700} text-[14px] text-[#90A3BF]`}
//               >
//                 Sport
//               </h2>
//               <div className="w-[232px] h-[72px] mt-[50px] ml-5">
//                 <Image src={first} alt="Koenigsegg" />
//               </div>

//               <div className="w-[256px] h-[24px] ml-1 flex gap-3 mt-[50px]">
//                 {/* Fuel */}

//                 <div className="w-[58px] h-[24px] flex justify-between">
//                   <BsFillFuelPumpFill size={24} className="text-[#90A3BF]" />
//                   <h2
//                     className={`${PlusJakartaSans500.className} text-[#90A3BF] text-[15px] mt-[2px]`}
//                   >
//                     90L
//                   </h2>
//                 </div>

//                 {/* Manual */}
//                 <div className="w-[85px] h-[24px] flex justify-between">
//                   <TbSteeringWheel size={24} className="text-[#90A3BF]" />
//                   <h2
//                     className={`${PlusJakartaSans500.className} text-[#90A3BF] text-[15px] mt-[2px]`}
//                   >
//                     Manual
//                   </h2>
//                 </div>

//                 {/* People */}

//                 <div className="w-[100px] h-[24px] flex justify-between">
//                   <FaUserGroup size={24} className="text-[#90A3BF]" />
//                   <h2
//                     className={`${PlusJakartaSans500.className} text-[#90A3BF] text-[15px] mt-[2px]`}
//                   >
//                     2 People
//                   </h2>
//                 </div>
//               </div>
//               {/* Price & Button */}
//               <div className="w-[256px] h-[44px] ml-3 mt-[60px] flex justify-between">
//                 <h1 className={`${PlusJakartaSans700.className} text-[20px] `}>
//                   $99.00/{" "}
//                   <span className="text-[14px] text-[#90A3BF]"> day</span>
//                 </h1>

//                 <button
//                   className={`${PlusJakartaSans600.className} text-[16px] w-[116px] h-[44px]
//     bg-[#3563E9] rounded-sm`}
//                 >
//                   Rent Now
//                 </button>
//               </div>
//             </div>

//             {/* Card 2 */}
//             <div className=" md:w-[304px] p-4 w-full bg-white rounded-lg">
//               <div className="w-[270px] h-[38px] flex justify-between">
//                 <h1
//                   className={`${PlusJakartaSans700.className} w-[128px] text-[20px] text-[#1A202C]`}
//                 >
//                  Nissan GT - R
//                 </h1>
//                 <MdFavorite size={24} className="text-[#ED3F3F] mt-2" />
//               </div>
//               <h2
//                 className={`${PlusJakartaSans700} text-[14px] text-[#90A3BF]`}
//               >
//                 Sport
//               </h2>
//               <div className="w-[232px] h-[72px] mt-[50px] ml-5">
//                 <Image src={NissanGtR1} alt="Koenigsegg" />
//               </div>

//               <div className="w-[256px] h-[24px] ml-1 flex gap-3 mt-[50px]">
//                 {/* Fuel */}

//                 <div className="w-[58px] h-[24px] flex justify-between">
//                   <BsFillFuelPumpFill size={24} className="text-[#90A3BF]" />
//                   <h2
//                     className={`${PlusJakartaSans500.className} text-[#90A3BF] text-[15px] mt-[2px]`}
//                   >
//                     90L
//                   </h2>
//                 </div>

//                 {/* Manual */}
//                 <div className="w-[85px] h-[24px] flex justify-between">
//                   <TbSteeringWheel size={24} className="text-[#90A3BF]" />
//                   <h2
//                     className={`${PlusJakartaSans500.className} text-[#90A3BF] text-[15px] mt-[2px]`}
//                   >
//                     Manual
//                   </h2>
//                 </div>

//                 {/* People */}

//                 <div className="w-[100px] h-[24px] flex justify-between">
//                   <FaUserGroup size={24} className="text-[#90A3BF]" />
//                   <h2
//                     className={`${PlusJakartaSans500.className} text-[#90A3BF] text-[15px] mt-[2px]`}
//                   >
//                     2 People
//                   </h2>
//                 </div>
//               </div>
//               {/* Price & Button */}
//               <div className="w-[256px] h-[44px] ml-3 mt-[60px] flex justify-between">
//                 <h1 className={`${PlusJakartaSans700.className} text-[20px] `}>
//                   $80.00/{" "}
//                   <span className="text-[14px] text-[#90A3BF]"> day</span>
//                 </h1>

//                 <button
//                   className={`${PlusJakartaSans600.className} text-[16px] w-[116px] h-[44px]
//                 bg-[#3563E9] rounded-sm`}
//                 >
//                   Rent Now
//                 </button>
//               </div>
//               <h3
//                 className={`${PlusJakartaSans700.className} text-[14px] text-[#90A3BF] line-through ml-3 mt-[-8px]`}
//               >
//                 $100.00
//               </h3>
//             </div>

//             {/* Card 3 */}
//             <div className=" md:w-[304px] p-4 w-full bg-white rounded-lg">
//               <div className="w-[270px] h-[38px] flex justify-between">
//                 <h1
//                   className={`${PlusJakartaSans700.className} w-[128px] text-[20px] text-[#1A202C]`}
//                 >
//                 Rolls - Royce
//                 </h1>
//                 <MdFavorite size={24} className="text-[#ED3F3F] mt-2" />
//               </div>
//               <h2
//                 className={`${PlusJakartaSans700} text-[14px] text-[#90A3BF]`}
//               >
//                 Sport
//               </h2>
//               <div className="w-[232px] h-[72px] mt-[50px] ml-5">
//                 <Image src={rollsRoyal} alt="Koenigsegg" />
//               </div>

//               <div className="w-[256px] h-[24px] ml-1 flex gap-3 mt-[50px]">
//                 {/* Fuel */}

//                 <div className="w-[58px] h-[24px] flex justify-between">
//                   <BsFillFuelPumpFill size={24} className="text-[#90A3BF]" />
//                   <h2
//                     className={`${PlusJakartaSans500.className} text-[#90A3BF] text-[15px] mt-[2px]`}
//                   >
//                     90L
//                   </h2>
//                 </div>

//                 {/* Manual */}
//                 <div className="w-[85px] h-[24px] flex justify-between">
//                   <TbSteeringWheel size={24} className="text-[#90A3BF]" />
//                   <h2
//                     className={`${PlusJakartaSans500.className} text-[#90A3BF] text-[15px] mt-[2px]`}
//                   >
//                     Manual
//                   </h2>
//                 </div>

//                 {/* People */}

//                 <div className="w-[100px] h-[24px] flex justify-between">
//                   <FaUserGroup size={24} className="text-[#90A3BF]" />
//                   <h2
//                     className={`${PlusJakartaSans500.className} text-[#90A3BF] text-[15px] mt-[2px]`}
//                   >
//                     2 People
//                   </h2>
//                 </div>
//               </div>
//               {/* Price & Button */}
//               <div className="w-[256px] h-[44px] ml-3 mt-[60px] flex justify-between">
//                 <h1 className={`${PlusJakartaSans700.className} text-[20px] `}>
//                   $96.00/{" "}
//                   <span className="text-[14px] text-[#90A3BF]"> day</span>
//                 </h1>

//                 <button
//                   className={`${PlusJakartaSans600.className} text-[16px] w-[116px] h-[44px]
//     bg-[#3563E9] rounded-sm`}
//                 >
//                   Rent Now
//                 </button>
//               </div>
//             </div>

//             {/* Card 4 */}
//             <div className=" md:w-[304px] p-4 w-full bg-white rounded-lg">
//               <div className="w-[270px] h-[38px] flex justify-between">
//                 <h1
//                   className={`${PlusJakartaSans700.className} w-[128px] text-[20px] text-[#1A202C]`}
//                 >
//                  Nissan GT - R
//                 </h1>
//                 <MdFavorite size={24} className="text-[#ED3F3F] mt-2" />
//               </div>
//               <h2
//                 className={`${PlusJakartaSans700} text-[14px] text-[#90A3BF]`}
//               >
//                 Sport
//               </h2>
//               <div className="w-[232px] h-[72px] mt-[50px] ml-5">
//                 <Image src={NissanGtR1} alt="Koenigsegg" />
//               </div>

//               <div className="w-[256px] h-[24px] ml-1 flex gap-3 mt-[50px]">
//                 {/* Fuel */}

//                 <div className="w-[58px] h-[24px] flex justify-between">
//                   <BsFillFuelPumpFill size={24} className="text-[#90A3BF]" />
//                   <h2
//                     className={`${PlusJakartaSans500.className} text-[#90A3BF] text-[15px] mt-[2px]`}
//                   >
//                     90L
//                   </h2>
//                 </div>

//                 {/* Manual */}
//                 <div className="w-[85px] h-[24px] flex justify-between">
//                   <TbSteeringWheel size={24} className="text-[#90A3BF]" />
//                   <h2
//                     className={`${PlusJakartaSans500.className} text-[#90A3BF] text-[15px] mt-[2px]`}
//                   >
//                     Manual
//                   </h2>
//                 </div>

//                 {/* People */}

//                 <div className="w-[100px] h-[24px] flex justify-between">
//                   <FaUserGroup size={24} className="text-[#90A3BF]" />
//                   <h2
//                     className={`${PlusJakartaSans500.className} text-[#90A3BF] text-[15px] mt-[2px]`}
//                   >
//                     2 People
//                   </h2>
//                 </div>
//               </div>
//               {/* Price & Button */}
//               <div className="w-[256px] h-[44px] ml-3 mt-[60px] flex justify-between">
//                 <h1 className={`${PlusJakartaSans700.className} text-[20px] `}>
//                   $80.00/{" "}
//                   <span className="text-[14px] text-[#90A3BF]"> day</span>
//                 </h1>

//                 <button
//                   className={`${PlusJakartaSans600.className} text-[16px] w-[116px] h-[44px]
//                 bg-[#3563E9] rounded-sm`}
//                 >
//                   Rent Now
//                 </button>
//               </div>
//               <h3
//                 className={`${PlusJakartaSans700.className} text-[14px] text-[#90A3BF] line-through ml-3 mt-[-8px]`}
//               >
//                 $100.00
//               </h3>
//             </div>

//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Popular;




"use client";

import React from "react";

// Fonts
import { Plus_Jakarta_Sans } from "next/font/google";
const PlusJakartaSans600 = Plus_Jakarta_Sans({
  weight: "600",
  display: "swap",
  subsets: ["latin"],
});
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

// Images
import Image from "next/image";
import first from "../../public/popularCars/first.png";
import NissanGtR1 from "../../public/popularCars/NissanGtR1.png";
import rollsRoyal from "../../public/popularCars/rollsRoyal.png";

// Icons
import { MdFavorite } from "react-icons/md";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { TbSteeringWheel } from "react-icons/tb";
import { FaUserGroup } from "react-icons/fa6";

const Popular = () => {
  return (
    <div>
      <section>
        <div className="container px-4 py-24 mx-auto">
          {/* Header */}
          <div
            className={`${PlusJakartaSans600.className} w-full h-[30px] mb-5 flex justify-between`}
          >
            <h1 className="text-[#90A3BF] text-[16px]">Popular Cars</h1>
            <button className="text-[#3563E9] text-[16px]">View All</button>
          </div>

          {/* Cards Container */}
          <div className="flex xl:flex-nowrap flex-wrap gap-6 justify-center">
            {/* Card 1 */}
            <div className="w-full md:w-[304px] p-4 bg-white rounded-lg shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <h1
                  className={`${PlusJakartaSans700.className} text-[20px] text-[#1A202C]`}
                >
                  Koenigsegg
                </h1>
                <MdFavorite size={24} className="text-[#ED3F3F]" />
              </div>
              <h2
                className={`${PlusJakartaSans500.className} text-[14px] text-[#90A3BF]`}
              >
                Sport
              </h2>
              <div className="w-full flex justify-center my-6">
                <Image src={first} alt="Koenigsegg" height={300} width={300} className="w-[232px]" />
              </div>
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center">
                  <BsFillFuelPumpFill size={24} className="text-[#90A3BF]" />
                  <p
                    className={`${PlusJakartaSans500.className} text-[#90A3BF] text-[15px] ml-2`}
                  >
                    90L
                  </p>
                </div>
                <div className="flex items-center">
                  <TbSteeringWheel size={24} className="text-[#90A3BF]" />
                  <p
                    className={`${PlusJakartaSans500.className} text-[#90A3BF] text-[15px] ml-2`}
                  >
                    Manual
                  </p>
                </div>
                <div className="flex items-center">
                  <FaUserGroup size={24} className="text-[#90A3BF]" />
                  <p
                    className={`${PlusJakartaSans500.className} text-[#90A3BF] text-[15px] ml-2`}
                  >
                    2 People
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <h1
                  className={`${PlusJakartaSans700.className} text-[20px] text-[#1A202C]`}
                >
                  $99.00/ <span className="text-[14px] text-[#90A3BF]">day</span>
                </h1>
                <button
                  className={`${PlusJakartaSans600.className} bg-[#3563E9] text-white text-[16px] w-[116px] h-[44px] rounded-sm`}
                >
                  Rent Now
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="w-full md:w-[304px] p-4 bg-white rounded-lg shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <h1
                  className={`${PlusJakartaSans700.className} text-[20px] text-[#1A202C]`}
                >
                  Nissan GT-R
                </h1>
                <MdFavorite size={24} className="text-[#ED3F3F]" />
              </div>
              <h2
                className={`${PlusJakartaSans500.className} text-[14px] text-[#90A3BF]`}
              >
                Sport
              </h2>
              <div className="w-full flex justify-center my-6">
                <Image src={NissanGtR1} alt="Nissan GT-R" height={300} width={300} className="w-[232px]" />
              </div>
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center">
                  <BsFillFuelPumpFill size={24} className="text-[#90A3BF]" />
                  <p
                    className={`${PlusJakartaSans500.className} text-[#90A3BF] text-[15px] ml-2`}
                  >
                    80L
                  </p>
                </div>
                <div className="flex items-center">
                  <TbSteeringWheel size={24} className="text-[#90A3BF]" />
                  <p
                    className={`${PlusJakartaSans500.className} text-[#90A3BF] text-[15px] ml-2`}
                  >
                    Manual
                  </p>
                </div>
                <div className="flex items-center">
                  <FaUserGroup size={24} className="text-[#90A3BF]" />
                  <p
                    className={`${PlusJakartaSans500.className} text-[#90A3BF] text-[15px] ml-2`}
                  >
                    2 People
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <h1
                  className={`${PlusJakartaSans700.className} text-[20px] text-[#1A202C]`}
                >
                  $80.00/ <span className="text-[14px] text-[#90A3BF]">day</span>
                </h1>
                <button
                  className={`${PlusJakartaSans600.className} bg-[#3563E9] text-white text-[16px] w-[116px] h-[44px] rounded-sm`}
                >
                  Rent Now
                </button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="w-full md:w-[304px] p-4 bg-white rounded-lg shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <h1
                  className={`${PlusJakartaSans700.className} text-[20px] text-[#1A202C]`}
                >
                  Rolls Royce
                </h1>
                <MdFavorite size={24} className="text-[#ED3F3F]" />
              </div>
              <h2
                className={`${PlusJakartaSans500.className} text-[14px] text-[#90A3BF]`}
              >
                Sedan
              </h2>
              <div className="w-full flex justify-center my-6">
                <Image src={rollsRoyal} alt="Rolls Royce" height={300} width={300} className="w-[232px]" />
              </div>
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center">
                  <BsFillFuelPumpFill size={24} className="text-[#90A3BF]" />
                  <p
                    className={`${PlusJakartaSans500.className} text-[#90A3BF] text-[15px] ml-2`}
                  >
                    85L
                  </p>
                </div>
                <div className="flex items-center">
                  <TbSteeringWheel size={24} className="text-[#90A3BF]" />
                  <p
                    className={`${PlusJakartaSans500.className} text-[#90A3BF] text-[15px] ml-2`}
                  >
                    Automatic
                  </p>
                </div>
                <div className="flex items-center">
                  <FaUserGroup size={24} className="text-[#90A3BF]" />
                  <p
                    className={`${PlusJakartaSans500.className} text-[#90A3BF] text-[15px] ml-2`}
                  >
                    4 People
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <h1
                  className={`${PlusJakartaSans700.className} text-[20px] text-[#1A202C]`}
                >
                  $96.00/ <span className="text-[14px] text-[#90A3BF]">day</span>
                </h1>
                <button
                  className={`${PlusJakartaSans600.className} bg-[#3563E9] text-white text-[16px] w-[116px] h-[44px] rounded-sm`}
                >
                  Rent Now
                </button>
              </div>
            </div>

               {/* Card 4 */}
               <div className="w-full md:w-[304px] p-4 bg-white rounded-lg shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <h1
                  className={`${PlusJakartaSans700.className} text-[20px] text-[#1A202C]`}
                >
                  Nissan GT - R
                </h1>
                <MdFavorite size={24} className="text-[#ED3F3F]" />
              </div>
              <h2
                className={`${PlusJakartaSans500.className} text-[14px] text-[#90A3BF]`}
              >
                Sport
              </h2>
              <div className="w-full flex justify-center my-6">
                <Image src={NissanGtR1} alt="Rolls Royce" height={300} width={300} className="w-[232px]" />
              </div>
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center">
                  <BsFillFuelPumpFill size={24} className="text-[#90A3BF]" />
                  <p
                    className={`${PlusJakartaSans500.className} text-[#90A3BF] text-[15px] ml-2`}
                  >
                    85L
                  </p>
                </div>
                <div className="flex items-center">
                  <TbSteeringWheel size={24} className="text-[#90A3BF]" />
                  <p
                    className={`${PlusJakartaSans500.className} text-[#90A3BF] text-[15px] ml-2`}
                  >
                    Automatic
                  </p>
                </div>
                <div className="flex items-center">
                  <FaUserGroup size={24} className="text-[#90A3BF]" />
                  <p
                    className={`${PlusJakartaSans500.className} text-[#90A3BF] text-[15px] ml-2`}
                  >
                    4 People
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <h1
                  className={`${PlusJakartaSans700.className} text-[20px] text-[#1A202C]`}
                >
                  $96.00/ <span className="text-[14px] text-[#90A3BF]">day</span>
                </h1>
                <button
                  className={`${PlusJakartaSans600.className} bg-[#3563E9] text-white text-[16px] w-[116px] h-[44px] rounded-sm`}
                >
                  Rent Now
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Popular;


