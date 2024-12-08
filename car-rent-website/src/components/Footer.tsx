// import React from "react";

// // Fonts
// import { Plus_Jakarta_Sans } from "next/font/google";
// import { AvatarDemo } from "./Avatar";
// const PlusJakartaSans = Plus_Jakarta_Sans({
//   weight: "700",
//   display: "swap",
//   subsets: ["latin"],
// });
// const PlusJakartaSans500 = Plus_Jakarta_Sans({
//   weight: "500",
//   display: "swap",
//   subsets: ["latin"],
// });
// const PlusJakartaSans600 = Plus_Jakarta_Sans({
//   weight: "600",
//   display: "swap",
//   subsets: ["latin"],
// });

// const Footer = () => {
//   return (
//     <div className="lg:bg-white bg-transparent">
//       <div className="w-full h-[480px] pt-[50px] px-[110px]">
//         <div className="w-full h-[90%] grid grid-rows-[1fr,100px] grid-cols-2">
//           <div>
//             <div className=" lg:w-[292px] h-[108px] md:w-[250px]">
//               <h1
//                 className={`${PlusJakartaSans.className} lg:text-[32px] md:text-[25px] text-[#3563E9]`}
//               >
//                 MORENT
//               </h1>
//               <p
//                 className={`${PlusJakartaSans500.className} text-[16px] text-[#13131399] mt-2`}
//               >
//                 Our vision is to provide convenience and help increase your
//                 sales business.
//               </p>
//             </div>
//           </div>

//           {/* Footer-left-side */}
//           <div className="gap-8 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:justify-center justify-between">
//             {/* About */}
//             <div className="w-[152px] h-[244px]">
//               <h1
//                 className={`${PlusJakartaSans600.className} text-[20px] text-[#1A202C]`}
//               >
//                 About
//               </h1>
//               <div className="w-[152px] h-[188px] mt-[15px] leading-[45px] pt-4">
//                 <p>How it works</p>
//                 <p>Featured</p>
//                 <p>Partnership</p>
//                 <p>Bussiness Relation</p>
//               </div>
//             </div>

//             {/* Community */}
//             <div className="w-[152px] h-[244px]">
//               <h1
//                 className={`${PlusJakartaSans600.className} text-[20px] text-[#1A202C]`}
//               >
//                 Community
//               </h1>

//               <div className="w-[152px] h-[188px] mt-[15px] leading-[45px] pt-4">
//                 <p>Events</p>
//                 <p>Blog</p>
//                 <p>Podcast</p>
//                 <p>Invite a friend</p>
//               </div>
//             </div>

//             {/* Socials */}
//             <div className="w-[152px] h-[244px]">
//               <h1
//                 className={`${PlusJakartaSans600.className} text-[20px] text-[#1A202C]`}
//               >
//                 Socials
//               </h1>

//               <div className="w-[152px] h-[188px mt-[15px] leading-[45px] pt-4">
//                 <p>Discord</p>
//                 <p>Instagram</p>
//                 <p>Twitter</p>
//                 <p>Facebook</p>
//               </div>
//             </div>
//           </div>

//           <div className="col-span-2">
//             <div className="bg-[#13131329] w-full h-[1px] mt-2"></div>

//             <div className="mt-[40px] flex justify-between">
//               <h1
//                 className={`${PlusJakartaSans600.className} lg:text-[16px] text-[13px] text-[#1A202C] `}
//               >
//                 ©2022 MORENT. All rights reserved
//               </h1>

//               <div className="flex justify-between gap-[60px]">
//                 <h2
//                   className={`${PlusJakartaSans600.className} lg:text-[16px] text-[13px] text-[#1A202C] tracking-tighter`}
//                 >
//                   Privacy & Policy
//                 </h2>
//                 <h2
//                   className={`${PlusJakartaSans600.className} lg:text-[16px] text-[13px] text-[#1A202C] tracking-tighter`}
//                 >
//                   Terms & Condition
//                 </h2>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;



import React from "react";

// Fonts
import { Plus_Jakarta_Sans } from "next/font/google";
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
    <div className="lg:bg-white bg-transparent">
      <div className="w-full lg:h-[400px] h-[400px] pt-[50px] lg:px-[110px] px-8">
        <div className="w-full h-auto lg:grid lg:grid-rows-[1fr,100px] lg:grid-cols-2 flex flex-col gap-10 justify-center">
          {/* Logo and Description */}
          <div className="m-auto">
            <div className="lg:w-[292px] h-auto md:w-[500px] sm:text-center text-left">
              <h1
                className={`${PlusJakartaSans.className} lg:text-[32px] md:text-[40px] text-[24px] text-[#3563E9]`}
              >
                MORENT
              </h1>
              <p
                className={`${PlusJakartaSans500.className} text-[16px] lg:text-[#13131399] text-[#90A3BF] mt-2`}
              >
                Our vision is to provide convenience and help increase your
                sales business.
              </p>
            </div>
          </div>

          {/* Footer Links Section */}
          <div className="grid lg:gap-8 gap-4 lg:grid-cols-3 sm:grid-cols-3 grid-cols-2 lg:justify-center">
            {/* About */}
            <div className="w-auto h-auto">
              <h1
                className={`${PlusJakartaSans600.className} text-[20px] text-[#1A202C]`}
              >
                About
              </h1>
              <div className="mt-[15px] leading-[30px] pt-4 text-[14px] lg:text-[#13131399] text-[#90A3BF]">
                <p>How it works</p>
                <p>Featured</p>
                <p>Partnership</p>
                <p>Business Relation</p>
              </div>
            </div>

            {/* Community */}
            <div className="w-auto h-auto">
              <h1
                className={`${PlusJakartaSans600.className} text-[20px] text-[#1A202C]`}
              >
                Community
              </h1>
              <div className="mt-[15px] leading-[30px] pt-4 text-[14px] lg:text-[#13131399] text-[#90A3BF]">
                <p>Events</p>
                <p>Blog</p>
                <p>Podcast</p>
                <p>Invite a friend</p>
              </div>
            </div>

            {/* Socials */}
            <div className="w-auto h-auto">
              <h1
                className={`${PlusJakartaSans600.className} text-[20px] text-[#1A202C]`}
              >
                Socials
              </h1>
              <div className="mt-[15px] leading-[30px] pt-4 text-[14px] lg:text-[#13131399] text-[#90A3BF]">
                <p>Discord</p>
                <p>Instagram</p>
                <p>Twitter</p>
                <p>Facebook</p>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="col-span-2 w-full mt-5">
            <div className="bg-[#13131329] w-full h-[1px] mt-2 md:block hidden"></div>

            <div className="mt-[20px] flex flex-col md:flex-row justify-between items-center gap-4">
              <h1
                className={`${PlusJakartaSans600.className} lg:text-[16px] text-[13px] text-[#1A202C]`}
              >
                ©2022 MORENT. All rights reserved
              </h1>

              <div className="flex flex-wrap gap-4">
                <h2
                  className={`${PlusJakartaSans600.className} lg:text-[16px] text-[13px] text-[#1A202C] tracking-tighter`}
                >
                  Privacy & Policy
                </h2>
                <h2
                  className={`${PlusJakartaSans600.className} lg:text-[16px] text-[13px] text-[#1A202C] tracking-tighter`}
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

