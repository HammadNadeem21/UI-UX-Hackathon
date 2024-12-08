import React from "react";

// Fonts
import { Plus_Jakarta_Sans } from "next/font/google";
import { AvatarDemo } from "./Avatar";
const PlusJakartaSans = Plus_Jakarta_Sans({
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

const Footer = () => {
  return (
    <div className="md:bg-white bg-transparent">
      <div className="w-full h-[480px] pt-[50px] px-[110px]">
        <div className="w-full h-[90%] grid grid-rows-[1fr,100px] grid-cols-2">
          <div>
            <div className=" w-[292px] h-[108px]">
              <h1
                className={`${PlusJakartaSans.className} text-[32px] text-[#3563E9]`}
              >
                MORENT
              </h1>
              <p
                className={`${PlusJakartaSans500.className} text-[16px] text-[#13131399] mt-2`}
              >
                Our vision is to provide convenience and help increase your
                sales business.
              </p>
            </div>
          </div>

          {/* Footer-left-side */}
          <div className="flex gap-8">
            {/* About */}
            <div className="w-[152px] h-[244px]">
              <h1
                className={`${PlusJakartaSans600.className} text-[20px] text-[#1A202C]`}
              >
                About
              </h1>
              <div className="w-[152px] h-[188px] mt-[15px] leading-[45px] pt-4">
                <p>How it works</p>
                <p>Featured</p>
                <p>Partnership</p>
                <p>Bussiness Relation</p>
              </div>
            </div>

            {/* Community */}
            <div className="w-[152px] h-[244px]">
              <h1
                className={`${PlusJakartaSans600.className} text-[20px] text-[#1A202C]`}
              >
                Community
              </h1>

              <div className="w-[152px] h-[188px] mt-[15px] leading-[45px] pt-4">
                <p>Events</p>
                <p>Blog</p>
                <p>Podcast</p>
                <p>Invite a friend</p>
              </div>
            </div>

            {/* Socials */}
            <div className="w-[152px] h-[244px]">
              <h1
                className={`${PlusJakartaSans600.className} text-[20px] text-[#1A202C]`}
              >
                Socials
              </h1>

              <div className="w-[152px] h-[188px mt-[15px] leading-[45px] pt-4">
                <p>Discord</p>
                <p>Instagram</p>
                <p>Twitter</p>
                <p>Facebook</p>
              </div>
            </div>
          </div>

          <div className=" col-span-2">
            <div className="bg-[#13131329] w-full h-[1px] mt-2"></div>

            <div className="mt-[40px] flex justify-between">
              <h1
                className={`${PlusJakartaSans600.className} text-[16px] text-[#1A202C] `}
              >
                ©2022 MORENT. All rights reserved
              </h1>

              <div className="flex justify-between gap-[60px]">
                <h2
                  className={`${PlusJakartaSans600.className} text-[16px] text-[#1A202C] tracking-tighter`}
                >
                  Privacy & Policy
                </h2>
                <h2
                  className={`${PlusJakartaSans600.className} text-[16px] text-[#1A202C] tracking-tighter`}
                >
                  Terms & Condition
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
