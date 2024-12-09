import React from "react";

// components
import { SliderDemo } from "@/components/Slider";

// Images
import Image from "next/image";
import mgzx from "../../../public/recomended/mgzx.png";
import Ad1Image from "../../../public/Ad1Image.png";
import View1 from "../../../public/detail/View1.png";
import View2 from "../../../public/detail/View2.png";
import View3 from "../../../public/detail/View3.png";
import review1 from "../../../public/review/review1.png";
import review2 from "../../../public/review/review2.png";
import Link from "next/link";

// Icons
import { MdFavorite } from "react-icons/md";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { TbSteeringWheel } from "react-icons/tb";
import { FaUserGroup } from "react-icons/fa6";
import { IoIosStar } from "react-icons/io";

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

const Detail = () => {
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

            <div className="w-[176px] h-[302px] ml-5">
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

            <div className="ml-5">
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
          {/* Detail (Start) */}
          <div>
            <section className="text-gray-600 body-font">
              <div className="container px-5 py-24 mx-auto flex flex-wrap">
                <div className="flex flex-wrap md:-m-2 -m-1">
                  <div className="flex flex-wrap w-1/2">
                    <div className="md:p-2 p-1 w-full">
                      <div className="bg-[url(/Ad1.jpeg)] bg-cover h-[360px] p-6 rounded-lg ">
                        <div
                          className="xl:w-[284px] lg:w-[240px] xl:h-[200px] lg:h-[180px]
              xs:h-[150px] h-[120px] text-white"
                        >
                          <div className="w-[350px] h-[50px]">
                            <h1
                              className={`${PlusJakartaSans600.className} md:text-[26px]  text-[22px]`}
                            >
                              Sports car with the best design and acceleration
                            </h1>
                          </div>

                          <div className="w-[284px] lg:h-[48px] mt-[100px]">
                            <p
                              className={`${PlusJakartaSans500.className} text-[16px]`}
                            >
                              Safety and comfort while driving a futuristic and
                              elegant sports car
                            </p>
                          </div>
                        </div>

                        <div className="w-[350px] h-[106px] mt-[20px] ml-[30px]">
                          <Image src={Ad1Image} alt="Ad1-Img" />
                        </div>
                      </div>
                    </div>

                    <div className="md:p-2 p-1 w-1/3">
                      <Image
                        src={View1}
                        alt="view-1"
                        className="w-full object-cover h-full object-center block"
                      />
                    </div>

                    <div className="md:p-2 p-1 w-1/3">
                      <Image
                        src={View2}
                        alt="view-1"
                        className="w-full object-cover h-full object-center block"
                      />
                    </div>
                    <div className="md:p-2 p-1 w-1/3">
                      <Image
                        src={View3}
                        alt="view-1"
                        className="w-full object-cover h-full object-center block"
                      />
                    </div>
                  </div>

                  {/* Left */}
                  <div className="flex flex-wrap w-1/2">
                    <div className="md:p-2 p-1 w-full">
                      <div className="w-full h-full object-cover object-center py-5 px-5 block bg-white rounded-lg">
                        <div className="w-[220px] h-[72px] ">
                          <h1
                            className={`${PlusJakartaSans700.className} text-[32px] text-[#1A202C]`}
                          >
                            Nissan GT - R
                          </h1>

                          <div className="flex">
                            <IoIosStar size={16} className="text-[#FBAD39]" />
                            <IoIosStar size={16} className="text-[#FBAD39]" />
                            <IoIosStar size={16} className="text-[#FBAD39]" />
                            <IoIosStar size={16} className="text-[#FBAD39]" />
                            <IoIosStar size={16} className="text-[#90A3BF]" />

                            <h2
                              className={`${PlusJakartaSans500.className} text-[14px] text-[#596780] ml-2`}
                            >
                              440+ Reviewer
                            </h2>
                          </div>
                        </div>

                        <div className="w-[444px] h-[100px] mt-8">
                          <p
                            className={`${PlusJakartaSans500.className} text-[18px] text-[#596780]`}
                          >
                            NISMO has become the embodiment of Nissan's
                            outstanding performance, inspired by the most
                            unforgiving proving ground, the "race track".
                          </p>
                        </div>

                        {/* Type */}
                        <div className="w-[444px] h-[72px]  mt-[60px] flex">
                          <div className="w-[222px] h-[72px]">
                            <div className="w-[200px] h-[30px] flex justify-between">
                              <h2
                                className={`${PlusJakartaSans500} text-[18px] text-[#90A3BF]`}
                              >
                                Type Car
                              </h2>
                              <h2
                                className={`${PlusJakartaSans600} text-[20px] text-[#596780]`}
                              >
                                Sport
                              </h2>
                            </div>
                            <div className="w-[200px] h-[30px] mt-3 flex justify-between">
                              <h2
                                className={`${PlusJakartaSans500} text-[18px] text-[#90A3BF]`}
                              >
                                Steering{" "}
                              </h2>
                              <h2
                                className={`${PlusJakartaSans600} text-[20px] text-[#596780]`}
                              >
                                Manual
                              </h2>
                            </div>
                          </div>

                          <div className="w-[222px] h-[72px]">
                            <div className="w-[200px] h-[30px] flex justify-between">
                              <h2
                                className={`${PlusJakartaSans500} text-[18px] text-[#90A3BF]`}
                              >
                                Type Car
                              </h2>
                              <h2
                                className={`${PlusJakartaSans600} text-[20px] text-[#596780]`}
                              >
                                Sport
                              </h2>
                            </div>
                            <div className="w-[200px] h-[30px] mt-3 flex justify-between">
                              <h2
                                className={`${PlusJakartaSans500} text-[18px] text-[#90A3BF]`}
                              >
                                Steering{" "}
                              </h2>
                              <h2
                                className={`${PlusJakartaSans600} text-[20px] text-[#596780]`}
                              >
                                Manual
                              </h2>
                            </div>
                          </div>
                        </div>

                        {/* Price */}
                        <div className="w-ful h-[56px] flex justify-between mt-[70px]">
                          <div className="w-[200px]">
                            <div>
                              <h1
                                className={`${PlusJakartaSans700.className} text-[25px] text-black`}
                              >
                                $80.00/{" "}
                                <span
                                  className={`${PlusJakartaSans600.className} text-[16px] text-[#90A3BF]`}
                                >
                                  days
                                </span>
                              </h1>
                            </div>
                            <div>
                              <h3
                                className={`${PlusJakartaSans700.className} text-[16px] text-[#90A3BF] line-through`}
                              >
                                $100.00
                              </h3>
                            </div>
                          </div>

                          <div className="w-[200px] bg-white flex items-center justify-end">
                            <button
                              className={`${PlusJakartaSans700} text-[16px] bg-[#3563E9] w-[140px] h-[56px] text-white rounded-[4px] mr-2`}
                            >
                             <Link href={'/detail/payment'}> Rent Now</Link>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          {/* Detail (End) */}

          {/* Review */}

          <div className="h-[452px] py-5 px-5">
            <div className="bg-white rounded-lg w-full h-full py-6 px-5">
              <div className="w-[136px] h-[28px] flex justify-between">
                <h1 className={`${PlusJakartaSans600.className} text-[20px]`}>
                  Reviews
                </h1>

                <button
                  className={`${PlusJakartaSans700.className} w-[44px] h-[28px] bg-[#3563E9] text-[14px]`}
                >
                  13
                </button>
              </div>

              {/* Review 1 */}
              <div className="w-[948px] h-[124px] mt-8">
                <div className="w-full h-[56px] flex justify-between">
                  <div className="w-[20%] flex justify-between">
                    <Image
                      src={review1}
                      alt="review-1"
                      className="h-[56px] w-[56px] rounded-full"
                    />
                    <div>
                      <h1
                        className={`${PlusJakartaSans700.className} text-[20px] text-[#1A202C]`}
                      >
                        Alex Stanton
                      </h1>
                      <h2
                        className={`${PlusJakartaSans500.className} text-[14px] text-[#90A3BF]`}
                      >
                        CEO at Bukalapak
                      </h2>
                    </div>
                  </div>

                  <div className=" w-[128px]">
                    <h2
                      className={`${PlusJakartaSans500.className} text-[14px] text-[#90A3BF] ml-[40px] mt-2`}
                    >
                      21 July 2022
                    </h2>
                    <div className="flex mt-1 ml-[40px]">
                      <IoIosStar size={16} className="text-[#FBAD39]" />
                      <IoIosStar size={16} className="text-[#FBAD39]" />
                      <IoIosStar size={16} className="text-[#FBAD39]" />
                      <IoIosStar size={16} className="text-[#FBAD39]" />
                      <IoIosStar size={16} className="text-[#90A3BF]" />
                    </div>
                  </div>
                </div>
                <div className="w-[876px] ml-[60px] mt-3">
                <p className={`${PlusJakartaSans500.className} text-[12px] text-[#596780]`}>We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.</p>
              </div>
              </div>

   {/* Review 2 */}
   <div className="w-[948px] h-[124px] mt-8">
                <div className="w-full h-[56px] flex justify-between">
                  <div className="w-[20%] flex justify-between">
                    <Image
                      src={review2}
                      alt="review-1"
                      className="h-[56px] w-[56px] rounded-full"
                    />
                    <div>
                      <h1
                        className={`${PlusJakartaSans700.className} text-[20px] text-[#1A202C]`}
                      >
                        Skylar Dias
                      </h1>
                      <h2
                        className={`${PlusJakartaSans500.className} text-[14px] text-[#90A3BF]`}
                      >
                       CEO at Amazon
                      </h2>
                    </div>
                  </div>

                  <div className=" w-[128px]">
                    <h2
                      className={`${PlusJakartaSans500.className} text-[14px] text-[#90A3BF] ml-[40px] mt-2`}
                    >
                      21 July 2022
                    </h2>
                    <div className="flex mt-1 ml-[40px]">
                      <IoIosStar size={16} className="text-[#FBAD39]" />
                      <IoIosStar size={16} className="text-[#FBAD39]" />
                      <IoIosStar size={16} className="text-[#FBAD39]" />
                      <IoIosStar size={16} className="text-[#FBAD39]" />
                      <IoIosStar size={16} className="text-[#90A3BF]" />
                    </div>
                  </div>
                </div>
                <div className="w-[876px] ml-[60px] mt-3">
                <p className={`${PlusJakartaSans500.className} text-[12px] text-[#596780]`}>We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.</p>
              </div>
              </div>
            
            </div>
          </div>
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
          </div>
          {/* Cars Section (End) */}
        </div>
      </div>
    </div>
  );
};

export default Detail;
