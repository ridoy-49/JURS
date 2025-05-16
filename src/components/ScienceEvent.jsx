import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const ScienceEvent = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col py-8 my-2 hover:cursor-pointer">
      <div className="flex-1 grid md:grid-cols-12 grid-cols-1 border-t-2 py-5 border-black">
        <div className="border-2 border-black py-4 px-5 justify-items-center">
          <p className="text-[16px] text-[#232323] leading-1.5 py-1">Fri</p>
          <p className="font-bold text-[32px] leading-[120%]  py-1">09</p>
          <p className="text-[16px] leading-[120%]  py-1">Feb 2024</p>
        </div>
        <div className="col-span-10 md:px-6 ">
          <div className="py-2">
            <p className="font-bold text-[24px] leading-[140%] text-[#232323] ">
              Networking Mixer
            </p>
            <p className="text-[14px] leading-[150%] text-[#232323CC]">
              Library
            </p>
          </div>
          <p className="text-[16px] leading-[150%] font-nav py-1">
            Join us for our annual symposium showcasing innovative research by
            undergraduate students.
          </p>
        </div>
        <div className="py-3 flex justify-center items-center">
          <Button
            variant="outline"
            className="border-[#232323] px-5 py-3 w-full hover:bg-blue-500 cursor-pointer"
          >
            Save
          </Button>
        </div>
      </div>

      <div className="flex-1 grid md:grid-cols-12 grid-cols-1 border-t-2 py-5 border-black">
        <div className="border-2 border-black py-4 px-5 justify-items-center">
          <p className="text-[16px] text-[#232323] leading-1.5 py-1">Fri</p>
          <p className="font-bold text-[32px] leading-[120%]  py-1">09</p>
          <p className="text-[16px] leading-[120%]  py-1">Feb 2024</p>
        </div>
        <div className="col-span-10 md:px-6 ">
          <div className="py-2">
            <p className="font-bold text-[24px] leading-[140%] text-[#232323] ">
              Research Symposium
            </p>
            <p className="text-[14px] leading-[150%] text-[#232323CC]">
              Campus
            </p>
          </div>
          <p className="text-[16px] leading-[150%] font-nav py-1">
            Join us for our annual symposium showcasing innovative research by
            undergraduate students.
          </p>
        </div>
        <div className="py-3 flex justify-center items-center">
          <Button
            variant="outline"
            className="border-[#232323] px-5 py-3 w-full hover:bg-blue-500 cursor-pointer"
          >
            Save
          </Button>
        </div>
      </div>

      <div className="flex-1 grid md:grid-cols-12 grid-cols-1 border-t-2 py-5 border-black">
        <div className="border-2 border-black py-4 px-5 justify-items-center">
          <p className="text-[16px] text-[#232323] leading-1.5 py-1">Fri</p>
          <p className="font-bold text-[32px] leading-[120%]  py-1">09</p>
          <p className="text-[16px] leading-[120%]  py-1">Feb 2024</p>
        </div>
        <div className="col-span-10 md:px-6 ">
          <div className="py-2">
            <p className="font-bold text-[24px] leading-[140%] text-[#232323] ">
              Research Symposium
            </p>
            <p className="text-[14px] leading-[150%] text-[#232323CC]">
              Campus
            </p>
          </div>
          <p className="text-[16px] leading-[150%] font-nav py-1">
            Join us for our annual symposium showcasing innovative research by
            undergraduate students.
          </p>
        </div>
        <div className="py-3 flex justify-center items-center">
          <Button
            variant="outline"
            className="border-[#232323] px-5 py-3 w-full hover:bg-blue-500 cursor-pointer"
          >
            Save
          </Button>
        </div>
      </div>

      {isOpen && (
        <>
          {" "}
          <div className="flex-1 grid md:grid-cols-12 grid-cols-1 border-t-2 py-5 border-black">
            <div className="border-2 border-black py-4 px-5 justify-items-center">
              <p className="text-[16px] text-[#232323] leading-1.5 py-1">Fri</p>
              <p className="font-bold text-[32px] leading-[120%]  py-1">09</p>
              <p className="text-[16px] leading-[120%]  py-1">Feb 2024</p>
            </div>
            <div className="col-span-10 md:px-6 ">
              <div className="py-2">
                <p className="font-bold text-[24px] leading-[140%] text-[#232323] ">
                  Research Symposium
                </p>
                <p className="text-[14px] leading-[150%] text-[#232323CC]">
                  Campus
                </p>
              </div>
              <p className="text-[16px] leading-[150%] font-nav py-1">
                Join us for our annual symposium showcasing innovative research
                by undergraduate students.
              </p>
            </div>
            <div className="py-3 flex justify-center items-center">
              <Button
                variant="outline"
                className="border-[#232323] px-5 py-3 w-full hover:bg-blue-500 cursor-pointer"
              >
                Save
              </Button>
            </div>
          </div>
          <div className="flex-1 grid md:grid-cols-12 grid-cols-1 border-t-2 py-5 border-black">
            <div className="border-2 border-black py-4 px-5 justify-items-center">
              <p className="text-[16px] text-[#232323] leading-1.5 py-1">Fri</p>
              <p className="font-bold text-[32px] leading-[120%]  py-1">09</p>
              <p className="text-[16px] leading-[120%]  py-1">Feb 2024</p>
            </div>
            <div className="col-span-10 md:px-6 ">
              <div className="py-2">
                <p className="font-bold text-[24px] leading-[140%] text-[#232323] ">
                  Research Symposium
                </p>
                <p className="text-[14px] leading-[150%] text-[#232323CC]">
                  Campus
                </p>
              </div>
              <p className="text-[16px] leading-[150%] font-nav py-1">
                Join us for our annual symposium showcasing innovative research
                by undergraduate students.
              </p>
            </div>
            <div className="py-3 flex justify-center items-center">
              <Button
                variant="outline"
                className="border-[#232323] px-5 py-3 w-full hover:bg-blue-500 cursor-pointer"
              >
                Save
              </Button>
            </div>
          </div>
          <div className="flex-1 grid md:grid-cols-12 grid-cols-1 border-t-2 py-5 border-black">
            <div className="border-2 border-black py-4 px-5 justify-items-center">
              <p className="text-[16px] text-[#232323] leading-1.5 py-1">Fri</p>
              <p className="font-bold text-[32px] leading-[120%]  py-1">09</p>
              <p className="text-[16px] leading-[120%]  py-1">Feb 2024</p>
            </div>
            <div className="col-span-10 md:px-6 ">
              <div className="py-2">
                <p className="font-bold text-[24px] leading-[140%] text-[#232323] ">
                  Research Symposium
                </p>
                <p className="text-[14px] leading-[150%] text-[#232323CC]">
                  Campus
                </p>
              </div>
              <p className="text-[16px] leading-[150%] font-nav py-1">
                Join us for our annual symposium showcasing innovative research
                by undergraduate students.
              </p>
            </div>
            <div className="py-3 flex justify-center items-center">
              <Button
                variant="outline"
                className="border-[#232323] px-5 py-3 w-full hover:bg-blue-500 cursor-pointer"
              >
                Save
              </Button>
            </div>
          </div>
        </>
      )}
      <div className="flex justify-center ">
        <Button
          variant="ouline"
          className=" border-2 border-black hover:bg-blue-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "Hide Details ▲" : "Show Details ▼"}
        </Button>
      </div>
    </div>
  );
};

export default ScienceEvent;
