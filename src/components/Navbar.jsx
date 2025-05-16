import React from "react";
import { Button } from "@/components/ui/button";
import logo from "../assets/logo.png";
import "../../src/App.css";
import { AlignJustify } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  return (
    <div className="w-full">
      {/* For medium device Navbar */}
      <div className="w-full max-w-[1440px] h-[72px] border-b border-gray-200 px-16 mx-auto sticky top-0 hidden md:flex items-center justify-between shadow">
        <div className="flex flex-row flex-1 gap-4 items-center">
          <div>
            <img
              className="w-[48px] h-[43px] hover:cursor-pointer"
              src={logo}
            />
          </div>
          <div className="flex flex-row flex-1 gap-8 font">
            <p className="hover:underline p-2 hover:cursor-pointer roboto-nav">
              Home Page
            </p>
            <p className="hover:underline p-2 hover:cursor-pointer roboto-nav">
              About Us
            </p>
            <p className="hover:underline p-2 hover:cursor-pointer roboto-nav">
              Events Calendar
            </p>
            <p className="hover:underline p-2 hover:cursor-pointer roboto-nav">
              Research Areas
            </p>
          </div>
        </div>
        <div>
          <Button className="rounded-none hover:cursor-pointer hover:bg-blue-500"> Register Now</Button>
        </div>
      </div>
      {/* For Mobile Navbar */}
      <div className="md:hidden  w-full">
        <div className="w-full max-w-[1440px] h-[72px] border-b border-gray-200 px-8 mx-auto flex items-center justify-between shadow">
          <div>
            <img src={logo} className="w-[48px] h-[43px] hover:cursor-pointer" />
          </div>
          <div>
            <Sheet>
              <SheetTrigger>
                <AlignJustify className="hover:cursor-pointer"/>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <img src={logo} className="w-[30px] h-[30px] hover:cursor-pointer"/>
                </SheetHeader>
                <div className="flex flex-col flex-1">
                  <p className="border-2 m-1 p-2 rounded-2xl text-center hover:cursor-pointer hover:border-blue-500 roboto-nav">
                    Home Page
                  </p>
                  <p className="border-2 m-1 p-2 rounded-2xl text-center hover:cursor-pointer  hover:border-blue-500 roboto-nav">
                    About Us
                  </p>
                  <p className="border-2 m-1 p-2 rounded-2xl text-center hover:cursor-pointer  hover:border-blue-500 roboto-nav">
                    Events Calendar
                  </p>
                  <p className="border-2 m-1 p-2 rounded-2xl text-center hover:cursor-pointer  hover:border-blue-500 roboto-nav">
                    Research Areas
                  </p>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
