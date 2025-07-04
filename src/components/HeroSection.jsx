import React from "react";
import { Button } from "@/components/ui/button";
import HeroImg from "../assets/Hero img.jpg";
import "../../src/App.css";

const HeroSection = () => {
  return (
    <div className="flex justify-center  items-start w-full">
      <div
        className=" flex w-screen  h-screen bg-cover bg-center "
        style={{ backgroundImage: `url(${HeroImg})` }}
      >
        <div className="flex md:justify-center items-center justify-start w-full h-full">
          <div className="flex flex-col justify-start items-start md:justify-center md:items-center  ">
            <div className="flex-1 md:max-w-[831px] md:h-[134px] p-4  w-full">
              <p className="font-bold md:text-[56px] text-[40px] leading-[120%] md:text-center text-start  text-white poppins-bold">
                Empowering Undergraduate Research
              </p>
            </div>
            <div className="flex-1 ">
              <div className="md:flex items-center justify-center hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 170 22"
                  className="w-[170px] h-[22px] fill-current text-white"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M128.166 0.0880819C104.266 0.338179 97.4321 0.500873 84.1711 1.13596C70.4286 1.79411 60.5937 2.45385 44.9889 3.76436C41.3714 4.06816 37.4979 4.35648 32.957 4.65986C16.2762 5.77429 13.0301 6.07126 7.63765 6.97582C4.96583 7.4241 2.65518 7.73432 1.36013 7.81888C0.208728 7.89396 0 7.94124 0 8.1269C0 8.29096 1.84151 8.4347 2.84874 8.3492C3.2097 8.31866 4.18763 8.24379 5.02202 8.18303C5.85641 8.12216 7.69258 7.95883 9.10241 7.82004C12.4223 7.49307 14.0162 7.38998 19.7219 7.13314C29.3136 6.70139 36.5595 6.2865 45.4597 5.65941C48.7397 5.42827 53.0948 5.12141 55.1376 4.97746C70.6309 3.88556 89.5561 2.91192 101.12 2.61191C115.154 2.24766 158.72 1.92564 157.984 2.19143C157.693 2.29684 152.708 3.08083 149.719 3.4913C146.974 3.8684 142.387 4.41229 136.745 5.02979C134.07 5.32275 130.397 5.72817 128.585 5.93078C121.775 6.69202 119.532 6.92811 115.663 7.29131C97.8402 8.96428 86.0671 10.4221 69.6805 12.985C59.9404 14.5083 51.957 16.2571 43.0477 18.8191C37.9824 20.2756 37.4888 20.5344 37.9874 21.4721C38.3118 22.0822 40.8676 22.1613 46.0225 21.7206C55.4431 20.9154 64.2958 20.2908 72.8716 19.8264C78.2508 19.5351 78.9633 19.4863 84.4327 19.0341C86.4755 18.8653 90.0066 18.6185 92.2796 18.4858L96.4123 18.2445L90.9195 18.1494C82.596 18.0053 73.6673 18.014 70.7268 18.1692C60.9916 18.6831 55.6965 19.0786 47.0474 19.9378C44.9859 20.1426 43.2467 20.2926 43.1825 20.2711C42.5631 20.0632 56.4267 16.9224 63.0403 15.7723C77.97 13.1758 93.3444 11.2385 116.971 8.97639C119.129 8.76978 123.461 8.31782 126.597 7.9721C129.733 7.62628 134.676 7.08186 137.582 6.76205C148.767 5.53136 152.1 5.07297 162.849 3.28648C169.734 2.14225 169.771 2.13246 169.958 1.37995C170.165 0.552579 169.613 0.177172 168.033 0.0698671C166.532 -0.0321727 138.428 -0.0193283 128.166 0.0880819ZM96.8582 18.161C96.9884 18.1862 97.1767 18.1852 97.2767 18.1589C97.3767 18.1326 97.2702 18.1119 97.04 18.1131C96.8099 18.1143 96.728 18.1359 96.8582 18.161Z"
                  />
                </svg>
              </div>
            </div>
            <div className="flex-1 md:max-w-[560px] md:h-[811px]  w-full p-4 ">
              <p className=" text-white md:text-[18px] text-[16px] leading-[150%] md:text-center text-start poppins-extralight ">
                Join us in fostering a vibrant community of undergraduate
                researchers. Together, we can explore innovative ideas and make
                impactful contributions to various fields.
              </p>
            </div>
            <div className="flex-1 gap-2 p-4 flex justify-start md:justify-center  ">
              <a
                href="https://www.facebook.com/researchsociety.ju"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="rounded-none h-[48px] w-[144px] hover:cursor-pointer text-black bg-white py-4 px-8 hover:bg-blue-400 border-[1px] ">
                  Register Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
