import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import sideheroimg from "../assets/sidehero.png";
import "../../src/App.css";
import HeroSection from "../components/HeroSection";
import ViewAllEvent from "../components/ViewAllEvent";
import ScienceEvent from "../components/ScienceEvent";
import ArtsEvent from "../components/ArtsEvent";
import BBAEvant from "../components/BBAEvant";

const HomePage = () => {
  const [faculty, setFaculty] = useState("View all");

  return (
    <>
      <div>
        <div>
          <HeroSection />
        </div>

        <div className="px-6 md:px-16 w-full">
          <div className="flex md:flex-row flex-col justify-between items-start px-6 py-5 md:pl-16  md:py-24 gap-2 md:max-w-[1312px] max-[191px]">
            <div className="flex-1  flex-col flex justify-start items-start">
              <div className="border rounded-2xl flex justify-center items-center">
                <p className="px-2 ">Foundation</p>
              </div>
              <div className="flex justify-start items-start py-2">
                <h2 className="poppins-semibold text-[40px] leading-[120%]">
                  Exploring horizons, surpassing every limit
                </h2>
              </div>
            </div>
            <div className="flex-1 py-2 md:ml-24 flex flex-col justify-center items-start ">
              <p className="roboto-nav overflow-auto">
                Founded on the principles of curiosity and collaboration, our
                research club aims to foster an environment where
                undergraduatestudents can explore their academic interests. Our
                mission is to empower young researchers by providing resources,
                mentorship, and a platform to share their findings with the
                world.
              </p>
              <Button className="mt-3 bg-white rounded-none text-black hover:cursor-pointer md:hover:border-2 hover:border-2 hover:border-blue-500 hover:bg-white border-black border-2 md:border-0">
                Explore
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 fill-current text-blue-500 "
                  viewBox="0 0 24 24"
                >
                  <path d="M9.70697 16.9496L15.414 11.2426L9.70697 5.53564L8.29297 6.94964L12.586 11.2426L8.29297 15.5356L9.70697 16.9496Z" />
                </svg>
              </Button>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 py-2 w-full">
          <h2 className=" text-center poppins-semibold text-[56px] leading-[120%] p-6">
            Up coming <span className="text-[#1976BB]">Events</span>
          </h2>
          <div className="flex flex-col md:flex-row">
            <div className="flex-1 flex mr-0">
              <img src={sideheroimg} className="w-screen h-auto" />
            </div>
            <div className="flex-1 px-16 flex flex-col justify-start items-start">
              <span className="flex flex-row border-2 border-black px-4 py-2 my-6 rounded-3xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 fill-current text-blue-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M7 11H9V13H7V11ZM7 15H9V17H7V15ZM11 11H13V13H11V11ZM11 15H13V17H11V15ZM15 11H17V13H15V11ZM15 15H17V17H15V15Z" />
                  <path d="M5 22H19C20.103 22 21 21.103 21 20V6C21 4.897 20.103 4 19 4H17V2H15V4H9V2H7V4H5C3.897 4 3 4.897 3 6V20C3 21.103 3.897 22 5 22ZM19 8L19.001 20H5V8H19Z" />
                </svg>
                <span className="poppins-semibold text-[16px] leading-[150%] ml-2">
                  21 February, 2025
                </span>
              </span>
              <h2 className="text-[56px] leading-[120%] poppins-semibold py-4">
                Heavy metal in river sediments
              </h2>
              <p className="text-[18px] leading-[150%] py-4 poppins-extralight">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Suspendisse varius enim in eros
                elementum tristique. Duis cursus, mi quis viverra ornare, eros
                dolor interdum nulla, ut commodo diam libero vitae erat.
              </p>
              <p className="flex flex-row py-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 fill-current text-blue-600"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.0001 14C14.2061 14 16.0001 12.206 16.0001 10C16.0001 7.794 14.2061 6 12.0001 6C9.79406 6 8.00006 7.794 8.00006 10C8.00006 12.206 9.79406 14 12.0001 14ZM12.0001 8C13.1031 8 14.0001 8.897 14.0001 10C14.0001 11.103 13.1031 12 12.0001 12C10.8971 12 10.0001 11.103 10.0001 10C10.0001 8.897 10.8971 8 12.0001 8Z" />
                  <path d="M11.4201 21.814C11.5893 21.9349 11.7921 21.9998 12.0001 21.9998C12.2081 21.9998 12.4108 21.9349 12.5801 21.814C12.8841 21.599 20.0291 16.44 20.0001 10C20.0001 5.589 16.4111 2 12.0001 2C7.58909 2 4.00009 5.589 4.00009 9.995C3.97109 16.44 11.1161 21.599 11.4201 21.814ZM12.0001 4C15.3091 4 18.0001 6.691 18.0001 10.005C18.0211 14.443 13.6121 18.428 12.0001 19.735C10.3891 18.427 5.97909 14.441 6.00009 10C6.00009 6.691 8.69109 4 12.0001 4Z" />
                </svg>
                <span className="ml-2">Location: TSC, JU</span>
              </p>
              <Button className="w-[144px] h-[48px] border border-gray-300 px-6 py-3 rounded-none my-4 hover:bg-blue-500 hover:cursor-pointer">
                Register Now
              </Button>
            </div>
          </div>
        </div>

        <div className="px-6 md:px-16 w-full">
          <div className="flex md:flex-row flex-col justify-between items-start px-6 py-5 md:pl-16  md:py-24 gap-2 md:max-w-[1312px] max-[191px]">
            <div className="flex-1  flex-col flex justify-start items-start">
              <div className="border rounded-2xl flex justify-center items-center">
                <p className="px-2">Achievment</p>
              </div>
              <div className="flex justify-start items-start py-2">
                <h2 className="poppins-semibold text-[40px] leading-[120%]">
                  Celebrating Our Milestones and Successes
                </h2>
              </div>
            </div>
            <div className="flex-1 py-2 md:ml-24 flex flex-col justify-center items-start ">
              <p className="roboto-nav overflow-auto">
                Our club has made significant strides in promoting undergraduate
                research. From publishing papers to winning competitions, our
                members have showcased their talents and dedication. Join us in
                celebrating the hard work and achievements of our community.
              </p>
              <Button className="mt-3 bg-white rounded-none text-black hover:cursor-pointer md:hover:border-2 hover:border-2 hover:border-blue-500 hover:bg-white border-black border-2 md:border-0">
                Explore
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 fill-current text-blue-500 "
                  viewBox="0 0 24 24"
                >
                  <path d="M9.70697 16.9496L15.414 11.2426L9.70697 5.53564L8.29297 6.94964L12.586 11.2426L8.29297 15.5356L9.70697 16.9496Z" />
                </svg>
              </Button>
            </div>
          </div>
        </div>

        {/* same X padding */}
        <div className="px-6 md:px-10 w-full">
          {/* no.1 div*/}
          <div className="grid grid-cols-1 md:grid-cols-3 ">
            <div className="my-6 md:mr-12 ">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.8385 29.573L7.26251 45.0549C7.15177 45.5237 7.18501 46.0149 7.35789 46.4646C7.53077 46.9142 7.83525 47.3012 8.23156 47.5751C8.62786 47.849 9.09758 47.9971 9.57936 48C10.0611 48.0028 10.5326 47.8604 10.9321 47.5912L24.0002 38.8808L37.0683 47.5912C37.4771 47.8625 37.9592 48.0022 38.4498 47.9915C38.9404 47.9807 39.4159 47.82 39.8124 47.531C40.209 47.242 40.5074 46.8385 40.6677 46.3748C40.828 45.9111 40.8425 45.4094 40.7091 44.9373L36.3195 29.5802L47.2059 19.7853C47.5546 19.4714 47.8036 19.0622 47.9221 18.6084C48.0407 18.1545 48.0236 17.6758 47.8729 17.2316C47.7222 16.7873 47.4446 16.397 47.0744 16.1088C46.7042 15.8206 46.2576 15.6472 45.7899 15.6101L32.1074 14.5207L26.1866 1.41685C25.9978 0.994903 25.6909 0.636603 25.303 0.385191C24.915 0.133779 24.4625 0 24.0002 0C23.5379 0 23.0854 0.133779 22.6974 0.385191C22.3095 0.636603 22.0026 0.994903 21.8138 1.41685L15.893 14.5207L2.21048 15.6077C1.75077 15.6441 1.31128 15.8122 0.9446 16.0918C0.577919 16.3714 0.299568 16.7507 0.142847 17.1843C-0.013873 17.6179 -0.0423265 18.0875 0.0608912 18.5368C0.164109 18.9862 0.394627 19.3963 0.724867 19.7181L10.8385 29.573ZM17.6858 19.1926C18.1142 19.1589 18.5256 19.0105 18.8769 18.7631C19.2282 18.5157 19.5065 18.1784 19.6826 17.7865L24.0002 8.23394L28.3178 17.7865C28.4939 18.1784 28.7722 18.5157 29.1235 18.7631C29.4748 19.0105 29.8862 19.1589 30.3146 19.1926L39.8475 19.9485L31.997 27.0127C31.3154 27.627 31.0442 28.5724 31.2938 29.4555L34.3011 39.9774L25.3346 34.0002C24.941 33.7361 24.4778 33.5951 24.0038 33.5951C23.5298 33.5951 23.0666 33.7361 22.673 34.0002L13.3033 40.2462L15.8234 29.3379C15.9158 28.9367 15.9034 28.5185 15.7873 28.1234C15.6713 27.7284 15.4556 27.3699 15.161 27.0823L7.86971 19.9749L17.6858 19.1926Z"
                  fill="#232323"
                />
              </svg>
              <h1 className="poppins-bold text-[32px] leading-[130%] py-4">
                Notable Awards and Recognitions
              </h1>
              <p className="poppins-light text-[16px] leading-[150%] py-2 ">
                We are proud recipients of multiple academic awards.
              </p>
            </div>
            <div className="my-6 md:mr-12 ">
              <svg
                width="33"
                height="42"
                viewBox="0 0 33 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.9214 18.18C24.5854 17.654 25.2174 17.096 25.8154 16.5L26.0874 16.216C26.6534 15.63 27.1914 15.02 27.6894 14.378L27.8134 14.228C28.3234 13.558 28.7854 12.852 29.2174 12.13L29.4734 11.69C29.8834 10.962 30.2634 10.216 30.5914 9.444C30.6314 9.35 30.6614 9.254 30.7014 9.16C30.9954 8.438 31.2494 7.698 31.4674 6.942C31.5094 6.802 31.5554 6.662 31.5934 6.52C31.8074 5.716 31.9714 4.894 32.0954 4.062C32.1214 3.888 32.1374 3.712 32.1594 3.536C32.2614 2.672 32.3334 1.798 32.3334 0.914V0H28.3334V0.914C28.3334 1.282 28.2714 1.636 28.2494 2H4.37737C4.35737 1.638 4.33337 1.28 4.33337 0.914V0H0.333374V0.914C0.333374 10.666 6.87137 19.35 16.2374 22.052L16.2934 22.07C22.0554 23.716 26.4054 28.362 27.8314 34H4.83537L6.43337 30H21.6474C20.546 28.4104 19.1443 27.0516 17.5214 26H9.52137C10.4114 25.152 11.4334 24.452 12.5034 23.82C11.0424 23.3086 9.6462 22.6279 8.34337 21.792C3.43337 25.624 0.333374 31.558 0.333374 38.03V42H4.33337V38.03L4.33537 38H28.3314L28.3334 38.03V42H32.3334V38.03C32.3334 30.37 28.0154 23.424 21.4474 19.89C22.1898 19.4462 22.9057 18.9594 23.5914 18.432C23.7014 18.348 23.8114 18.268 23.9214 18.18ZM21.5414 14.972C20.136 16.0997 18.5683 17.0086 16.8914 17.668C16.7074 17.74 16.5214 17.804 16.3354 17.872C13.9781 17.0376 11.8218 15.7186 10.0054 14H22.5894C22.2474 14.322 21.9254 14.666 21.5554 14.96L21.5414 14.972ZM27.5714 6C27.5614 6.032 27.5574 6.066 27.5474 6.098L27.4594 6.4C27.1801 7.259 26.8371 8.09598 26.4334 8.904C26.2414 9.284 26.0074 9.634 25.7914 10H6.83137C6.09183 8.74164 5.50693 7.39859 5.08937 6H27.5714Z"
                  fill="#232323"
                />
              </svg>

              <h1 className="poppins-bold text-[32px] leading-[130%] py-4">
                Research Contributions to the Community
              </h1>
              <p className="poppins-light text-[16px] leading-[150%] py-2 ">
                Our research has positively impacted local initiatives.
              </p>
            </div>
            <div className="my-6  ">
              <svg
                width="41"
                height="32"
                viewBox="0 0 41 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.6667 19.9999H32.6667V23.9999H20.6667V19.9999ZM9.25269 11.4139L13.8387 15.9999L9.25269 20.5859L12.0807 23.4139L19.4947 15.9999L12.0807 8.58594L9.25269 11.4139Z"
                  fill="#232323"
                />
                <path
                  d="M36.6666 0H4.66663C2.46063 0 0.666626 1.794 0.666626 4V28C0.666626 30.206 2.46063 32 4.66663 32H36.6666C38.8726 32 40.6666 30.206 40.6666 28V4C40.6666 1.794 38.8726 0 36.6666 0ZM4.66663 28V4H36.6666L36.6706 28H4.66663Z"
                  fill="#232323"
                />
              </svg>

              <h1 className="poppins-bold text-[32px] leading-[130%] py-4">
                Programming Contest 2025
              </h1>
              <p className="poppins-light text-[16px] leading-[150%] py-2 ">
                We partner with leading universities for research projects.
              </p>
            </div>
          </div>

          {/* no.2 div */}
          <div className="py-6 md:py-18 flex flex-col justify-start items-start">
            <div className="my-3">
              <span className="px-3 border border-[#232323] rounded-2xl">
                Future
              </span>
              <p className="poppins-bold py-2 text-[48px]">Events</p>
              <p className="font-xs ">
                Fostering innovation, empowering education, and advancing
                research together for a brighter future.
              </p>
            </div>

            <div className="flex flex-col py-6">
              <div className="justify-start hidden md:flex flex-row items-start gap-4">
                <button
                  className={`px-3 py-2  ${
                    faculty === "View all"
                      ? "bg-blue-600 text-white"
                      : "border-2 border-black"
                  }`}
                  onClick={() => setFaculty("View all")}
                >
                  View all
                </button>
                <button
                  className={`px-3 py-2  ${
                    faculty === "Science"
                      ? "bg-blue-600 text-white"
                      : "border-2 border-black"
                  }`}
                  onClick={() => setFaculty("Science")}
                >
                  Science
                </button>
                <button
                  className={`px-3 py-2  ${
                    faculty === "Arts"
                      ? "bg-blue-600 text-white"
                      : "border-2 border-black"
                  }`}
                  onClick={() => setFaculty("Arts")}
                >
                  Arts
                </button>
                <button
                  className={`px-3 py-2  ${
                    faculty === "BBA"
                      ? "bg-blue-500 text-white"
                      : "border-2 border-black"
                  }`}
                  onClick={() => setFaculty("BBA")}
                >
                  BBA
                </button>
              </div>
              <div className="flext justify-start items-center md:hidden">
                <button
                  className={`px-3 py-2 border-2`}
                  onClick={() => setFaculty("View all")}
                >
                  View all
                </button>
              </div>
              <div>
                {faculty === "View all" ? (
                  <ViewAllEvent />
                ) : faculty === "Science" ? (
                  <ScienceEvent />
                ) : faculty === "Arts" ? (
                  <ArtsEvent />
                ) : (
                  <BBAEvant />
                )}
              </div>
            </div>
          </div>
          {/* no.3 div */}
          <div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
