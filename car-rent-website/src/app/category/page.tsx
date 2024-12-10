import { SelectRent } from "@/components/Select_rent";
import { SliderDemo } from "@/components/Slider";
import { SelectDemo } from "@/components/Select";

// Image
import Image from "next/image";
import Switch from "../../../public/Switch.png";
import mgzx from "../../../public/recomended/mgzx.png";

// Icons
import { MdFavorite } from "react-icons/md";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { TbSteeringWheel } from "react-icons/tb";
import { FaUserGroup } from "react-icons/fa6";

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

export default function carRent() {
  return (
    <div>
      <div className="flex">
        {/* sidebar */}
        <div className="w-[25%]">
          <div className="bg-white h-full py-5 px-3 mt-3">
            <div className="w-[176px] h-[302px] ml-5 mt-5">
              <h1
                className={`${PlusJakartaSans600.className} text-[12px] text-[#90A3BF]`}
              >
                TYPE
              </h1>

              <div className="mt-3">
                <div>
                  <input type="checkbox" name="" id="" />
                  <label
                    htmlFor=""
                    className={`${PlusJakartaSans600.className} text-[20] ml-5`}
                  >
                    Sport
                  </label>
                </div>

                <div className="mt-3">
                  <input type="checkbox" name="" id="" />
                  <label
                    htmlFor=""
                    className={`${PlusJakartaSans600.className} text-[20] ml-5`}
                  >
                    SUV
                  </label>
                </div>

                <div className="mt-3">
                  <input type="checkbox" name="" id="" />
                  <label
                    htmlFor=""
                    className={`${PlusJakartaSans600.className} text-[20] ml-5`}
                  >
                    MPV
                  </label>
                </div>

                <div className="mt-3">
                  <input type="checkbox" name="" id="" />
                  <label
                    htmlFor=""
                    className={`${PlusJakartaSans600.className} text-[20] ml-5`}
                  >
                    Sedan
                  </label>
                </div>

                <div className="mt-3">
                  <input type="checkbox" name="" id="" />
                  <label
                    htmlFor=""
                    className={`${PlusJakartaSans600.className} text-[20] ml-5`}
                  >
                    Coupe
                  </label>
                </div>

                <div className="mt-3">
                  <input type="checkbox" name="" id="" />
                  <label
                    htmlFor=""
                    className={`${PlusJakartaSans600.className} text-[20] ml-5`}
                  >
                    Hetchback
                  </label>
                </div>
              </div>
            </div>

            <div className="w-[176px] h-[212px] ml-5">
              <h1
                className={`${PlusJakartaSans600.className} text-[12px] text-[#90A3BF]`}
              >
                C A P A C I T Y
              </h1>

              <div className="mt-3">
                <div>
                  <input type="checkbox" name="" id="one" />
                  <label
                    htmlFor="one"
                    className={`${PlusJakartaSans600.className} text-[20] ml-5`}
                  >
                    2 Person
                  </label>
                </div>

                <div className="mt-3">
                  <input type="checkbox" name="" id="two" />
                  <label
                    htmlFor="two"
                    className={`${PlusJakartaSans600.className} text-[20] ml-5`}
                  >
                    4 Person
                  </label>
                </div>

                <div className="mt-3">
                  <input type="checkbox" name="" id="three" />
                  <label
                    htmlFor="three"
                    className={`${PlusJakartaSans600.className} text-[20] ml-5`}
                  >
                    6 Person
                  </label>
                </div>

                <div className="mt-3">
                  <input type="checkbox" name="" id="four" />
                  <label
                    htmlFor="four"
                    className={`${PlusJakartaSans600.className} text-[20] ml-5`}
                  >
                    8 or More
                  </label>
                </div>
              </div>
            </div>

            <div className="ml-5 mt-0">
              <h1
                className={`${PlusJakartaSans600.className} text-[12px] text-[#90A3BF]`}
              >
                TYPE
              </h1>
              <SliderDemo className="mt-4" />
              <h2
                className={`${PlusJakartaSans600.className} text-[12px] text-black mt-4`}
              >
                Max. $100.00
              </h2>
            </div>
          </div>
        </div>

        {/* Dashboard */}
        <div className="w-[75%]">
          {/* Pick Up & Drop Up (Start) */}
          <div className="w-full h-[200px] py-9 px-5 grid grid-cols-[425px,1fr,425px]">
            <div className="bg-white xl:w-[425px] xl:h-[132px] lg:w-[90%] md:w-[85%] h-[132px] rounded-lg text-[100%] lg:text-[70%]">
              <div className="px-8 py-3">
                <input type="radio" />
                <label htmlFor="" className="ml-2">
                  Pick-Up
                </label>

                <div className="w-full h-[85px] grid grid-cols-[1fr,1fr,1fr]">
                  <div className=" border-[#C3D4E9] border-r-2 mt-3">
                    <h1
                      className={`${PlusJakartaSans700.className} text-[16px] text-[#1A202C]`}
                    >
                      Locations
                    </h1>

                    <div className=" h-[25px] mt-3">
                      <SelectRent />
                    </div>
                  </div>

                  <div className=" border-[#C3D4E9] border-r-2 ml-3 mt-3">
                    <h1
                      className={`${PlusJakartaSans700.className} text-[16px] text-[#1A202C]`}
                    >
                      Date
                    </h1>

                    <div className="w-126px h-[25px] mt-3">
                      <SelectDemo />
                    </div>
                  </div>
                  <div className="ml-2 mt-3">
                    <h1
                      className={`${PlusJakartaSans700.className} text-[16px] text-[#1A202C]`}
                    >
                      Time
                    </h1>

                    <div className="w-126px h-[25px] mt-3">
                      <SelectDemo />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Image
              src={Switch}
              alt="switch"
              className="mt-10 h-[80px] w-[80px]"
            />

            <div className="bg-white xl:w-[425px] xl:h-[132px] lg:w-[90%] md:w-[85%] h-[132px] rounded-lg text-[100%] lg:text-[70%]">
              <div className="px-8 py-3">
                <input type="radio" />
                <label htmlFor="" className="ml-2">
                  Pick-Up
                </label>

                <div className="w-full h-[85px] grid grid-cols-[1fr,1fr,1fr]">
                  <div className=" border-[#C3D4E9] border-r-2 mt-3">
                    <h1
                      className={`${PlusJakartaSans700.className} text-[16px] text-[#1A202C]`}
                    >
                      Locations
                    </h1>

                    <div className="w-106px h-[25px] mt-3">
                      <SelectRent />
                    </div>
                  </div>

                  <div className=" border-[#C3D4E9] border-r-2 ml-3 mt-3">
                    <h1
                      className={`${PlusJakartaSans700.className} text-[16px] text-[#1A202C]`}
                    >
                      Date
                    </h1>

                    <div className="w-126px h-[25px] mt-3">
                      <SelectDemo />
                    </div>
                  </div>
                  <div className="ml-2 mt-3">
                    <h1
                      className={`${PlusJakartaSans700.className} text-[16px] text-[#1A202C]`}
                    >
                      Time
                    </h1>

                    <div className="w-126px h-[25px] mt-3">
                      <SelectDemo />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Pick Up & Drop Up (End) */}

          {/* Cars Section (Start) */}

          <div className=" mt-5 grid xl:grid-cols-3 lg:grid-cols-2 justify-center grid-cols-1 px-2 py-5">
            {/* Card 1 */}
            <div className="w-full md:w-[304px] p-4 bg-white rounded-lg shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <h1
                  className={`${PlusJakartaSans700.className} text-[20px] text-[#1A202C]`}
                >
                  MG ZX Exclusice
                </h1>
                <MdFavorite size={24} className="text-[#ED3F3F]" />
              </div>
              <h2
                className={`${PlusJakartaSans500.className} text-[14px] text-[#90A3BF]`}
              >
                Hatchback
              </h2>
              <div className="w-full flex justify-center my-6">
                <Image
                  src={mgzx}
                  alt="Rolls Royce"
                  height={300}
                  width={300}
                  className="w-[232px]"
                />
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
                    4 People
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <h1
                  className={`${PlusJakartaSans700.className} text-[20px] text-[#1A202C]`}
                >
                  $74/ <span className="text-[14px] text-[#90A3BF]">day</span>
                </h1>
                <button
                  className={`${PlusJakartaSans600.className} bg-[#3563E9] text-white text-[16px] w-[116px] h-[44px] rounded-sm`}
                >
                  Rent Now
                </button>
              </div>
              <div
                className={`${PlusJakartaSans700.className} text-[14px] text-[#90A3BF] line-through mt-[-10px] `}
              >
                $80.00
              </div>
            </div>

            {/* Card 2 */}
            <div className="w-full md:w-[304px] p-4 bg-white rounded-lg shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <h1
                  className={`${PlusJakartaSans700.className} text-[20px] text-[#1A202C]`}
                >
                  MG ZX Exclusice
                </h1>
                <MdFavorite size={24} className="text-[#ED3F3F]" />
              </div>
              <h2
                className={`${PlusJakartaSans500.className} text-[14px] text-[#90A3BF]`}
              >
                Hatchback
              </h2>
              <div className="w-full flex justify-center my-6">
                <Image
                  src={mgzx}
                  alt="Rolls Royce"
                  height={300}
                  width={300}
                  className="w-[232px]"
                />
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
                    4 People
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <h1
                  className={`${PlusJakartaSans700.className} text-[20px] text-[#1A202C]`}
                >
                  $74/ <span className="text-[14px] text-[#90A3BF]">day</span>
                </h1>
                <button
                  className={`${PlusJakartaSans600.className} bg-[#3563E9] text-white text-[16px] w-[116px] h-[44px] rounded-sm`}
                >
                  Rent Now
                </button>
              </div>
              <div
                className={`${PlusJakartaSans700.className} text-[14px] text-[#90A3BF] line-through mt-[-10px] `}
              >
                $80.00
              </div>
            </div>

            {/* Card 3 */}
            <div className="w-full md:w-[304px] p-4 bg-white rounded-lg shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <h1
                  className={`${PlusJakartaSans700.className} text-[20px] text-[#1A202C]`}
                >
                  MG ZX Exclusice
                </h1>
                <MdFavorite size={24} className="text-[#ED3F3F]" />
              </div>
              <h2
                className={`${PlusJakartaSans500.className} text-[14px] text-[#90A3BF]`}
              >
                Hatchback
              </h2>
              <div className="w-full flex justify-center my-6">
                <Image
                  src={mgzx}
                  alt="Rolls Royce"
                  height={300}
                  width={300}
                  className="w-[232px]"
                />
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
                    4 People
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <h1
                  className={`${PlusJakartaSans700.className} text-[20px] text-[#1A202C]`}
                >
                  $74/ <span className="text-[14px] text-[#90A3BF]">day</span>
                </h1>
                <button
                  className={`${PlusJakartaSans600.className} bg-[#3563E9] text-white text-[16px] w-[116px] h-[44px] rounded-sm`}
                >
                  Rent Now
                </button>
              </div>
              <div
                className={`${PlusJakartaSans700.className} text-[14px] text-[#90A3BF] line-through mt-[-10px] `}
              >
                $80.00
              </div>
            </div>

            {/* Card 4 */}
            <div className="w-full md:w-[304px] mt-3 p-4 bg-white rounded-lg shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <h1
                  className={`${PlusJakartaSans700.className} text-[20px] text-[#1A202C]`}
                >
                  MG ZX Exclusice
                </h1>
                <MdFavorite size={24} className="text-[#ED3F3F]" />
              </div>
              <h2
                className={`${PlusJakartaSans500.className} text-[14px] text-[#90A3BF]`}
              >
                Hatchback
              </h2>
              <div className="w-full flex justify-center my-6">
                <Image
                  src={mgzx}
                  alt="Rolls Royce"
                  height={300}
                  width={300}
                  className="w-[232px]"
                />
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
                    4 People
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <h1
                  className={`${PlusJakartaSans700.className} text-[20px] text-[#1A202C]`}
                >
                  $74/ <span className="text-[14px] text-[#90A3BF]">day</span>
                </h1>
                <button
                  className={`${PlusJakartaSans600.className} bg-[#3563E9] text-white text-[16px] w-[116px] h-[44px] rounded-sm`}
                >
                  Rent Now
                </button>
              </div>
              <div
                className={`${PlusJakartaSans700.className} text-[14px] text-[#90A3BF] line-through mt-[-10px] `}
              >
                $80.00
              </div>
            </div>

            {/* Card 5 */}
            <div className="w-full md:w-[304px] mt-3 p-4 bg-white rounded-lg shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <h1
                  className={`${PlusJakartaSans700.className} text-[20px] text-[#1A202C]`}
                >
                  MG ZX Exclusice
                </h1>
                <MdFavorite size={24} className="text-[#ED3F3F]" />
              </div>
              <h2
                className={`${PlusJakartaSans500.className} text-[14px] text-[#90A3BF]`}
              >
                Hatchback
              </h2>
              <div className="w-full flex justify-center my-6">
                <Image
                  src={mgzx}
                  alt="Rolls Royce"
                  height={300}
                  width={300}
                  className="w-[232px]"
                />
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
                    4 People
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <h1
                  className={`${PlusJakartaSans700.className} text-[20px] text-[#1A202C]`}
                >
                  $74/ <span className="text-[14px] text-[#90A3BF]">day</span>
                </h1>
                <button
                  className={`${PlusJakartaSans600.className} bg-[#3563E9] text-white text-[16px] w-[116px] h-[44px] rounded-sm`}
                >
                  Rent Now
                </button>
              </div>
              <div
                className={`${PlusJakartaSans700.className} text-[14px] text-[#90A3BF] line-through mt-[-10px] `}
              >
                $80.00
              </div>
            </div>

            {/* Card 6 */}
            <div className="w-full md:w-[304px] mt-3 p-4 bg-white rounded-lg shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <h1
                  className={`${PlusJakartaSans700.className} text-[20px] text-[#1A202C]`}
                >
                  MG ZX Exclusice
                </h1>
                <MdFavorite size={24} className="text-[#ED3F3F]" />
              </div>
              <h2
                className={`${PlusJakartaSans500.className} text-[14px] text-[#90A3BF]`}
              >
                Hatchback
              </h2>
              <div className="w-full flex justify-center my-6">
                <Image
                  src={mgzx}
                  alt="Rolls Royce"
                  height={300}
                  width={300}
                  className="w-[232px]"
                />
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
                    4 People
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <h1
                  className={`${PlusJakartaSans700.className} text-[20px] text-[#1A202C]`}
                >
                  $74/ <span className="text-[14px] text-[#90A3BF]">day</span>
                </h1>
                <button
                  className={`${PlusJakartaSans600.className} bg-[#3563E9] text-white text-[16px] w-[116px] h-[44px] rounded-sm`}
                >
                  Rent Now
                </button>
              </div>
              <div
                className={`${PlusJakartaSans700.className} text-[14px] text-[#90A3BF] line-through mt-[-10px] `}
              >
                $80.00
              </div>
            </div>

            {/* Card 7 */}
            <div className="w-full md:w-[304px] mt-3 p-4 bg-white rounded-lg shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <h1
                  className={`${PlusJakartaSans700.className} text-[20px] text-[#1A202C]`}
                >
                  MG ZX Exclusice
                </h1>
                <MdFavorite size={24} className="text-[#ED3F3F]" />
              </div>
              <h2
                className={`${PlusJakartaSans500.className} text-[14px] text-[#90A3BF]`}
              >
                Hatchback
              </h2>
              <div className="w-full flex justify-center my-6">
                <Image
                  src={mgzx}
                  alt="Rolls Royce"
                  height={300}
                  width={300}
                  className="w-[232px]"
                />
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
                    4 People
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <h1
                  className={`${PlusJakartaSans700.className} text-[20px] text-[#1A202C]`}
                >
                  $74/ <span className="text-[14px] text-[#90A3BF]">day</span>
                </h1>
                <button
                  className={`${PlusJakartaSans600.className} bg-[#3563E9] text-white text-[16px] w-[116px] h-[44px] rounded-sm`}
                >
                  Rent Now
                </button>
              </div>
              <div
                className={`${PlusJakartaSans700.className} text-[14px] text-[#90A3BF] line-through mt-[-10px] `}
              >
                $80.00
              </div>
            </div>

            {/* Card 8 */}
            <div className="w-full md:w-[304px] mt-3 p-4 bg-white rounded-lg shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <h1
                  className={`${PlusJakartaSans700.className} text-[20px] text-[#1A202C]`}
                >
                  MG ZX Exclusice
                </h1>
                <MdFavorite size={24} className="text-[#ED3F3F]" />
              </div>
              <h2
                className={`${PlusJakartaSans500.className} text-[14px] text-[#90A3BF]`}
              >
                Hatchback
              </h2>
              <div className="w-full flex justify-center my-6">
                <Image
                  src={mgzx}
                  alt="Rolls Royce"
                  height={300}
                  width={300}
                  className="w-[232px]"
                />
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
                    4 People
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <h1
                  className={`${PlusJakartaSans700.className} text-[20px] text-[#1A202C]`}
                >
                  $74/ <span className="text-[14px] text-[#90A3BF]">day</span>
                </h1>
                <button
                  className={`${PlusJakartaSans600.className} bg-[#3563E9] text-white text-[16px] w-[116px] h-[44px] rounded-sm`}
                >
                  Rent Now
                </button>
              </div>
              <div
                className={`${PlusJakartaSans700.className} text-[14px] text-[#90A3BF] line-through mt-[-10px] `}
              >
                $80.00
              </div>
            </div>

            {/* Card 9 */}
            <div className="w-full md:w-[304px] mt-3 p-4 bg-white rounded-lg shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <h1
                  className={`${PlusJakartaSans700.className} text-[20px] text-[#1A202C]`}
                >
                  MG ZX Exclusice
                </h1>
                <MdFavorite size={24} className="text-[#ED3F3F]" />
              </div>
              <h2
                className={`${PlusJakartaSans500.className} text-[14px] text-[#90A3BF]`}
              >
                Hatchback
              </h2>
              <div className="w-full flex justify-center my-6">
                <Image
                  src={mgzx}
                  alt="Rolls Royce"
                  height={300}
                  width={300}
                  className="w-[232px]"
                />
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
                    4 People
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <h1
                  className={`${PlusJakartaSans700.className} text-[20px] text-[#1A202C]`}
                >
                  $74/ <span className="text-[14px] text-[#90A3BF]">day</span>
                </h1>
                <button
                  className={`${PlusJakartaSans600.className} bg-[#3563E9] text-white text-[16px] w-[116px] h-[44px] rounded-sm`}
                >
                  Rent Now
                </button>
              </div>
              <div
                className={`${PlusJakartaSans700.className} text-[14px] text-[#90A3BF] line-through mt-[-10px] `}
              >
                $80.00
              </div>
            </div>
          </div>
          {/* Cars Section (End) */}
        </div>
      </div>
    </div>
  );
}
