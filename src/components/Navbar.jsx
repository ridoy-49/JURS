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
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full">
      {/* For medium device Navbar */}
      <div className="w-full max-w-[1600px] h-[72px] border-b border-gray-200 px-16 mx-auto fixed bg-white  hidden md:flex items-center justify-between shadow">
        <div className="flex flex-row flex-1 gap-4 items-center">
          <div>
            <Link to="/">
              <img
                onClick={() => {
                  scrollTo(0, 0);
                }}
                className="w-[48px] h-[43px] hover:cursor-pointer"
                src={logo}
              />
            </Link>
          </div>
          <div className="flex flex-row flex-1 gap-8 font">
            <p
              onClick={() => {
                scrollTo(0, 0);
              }}
              className="hover:underline p-2 hover:cursor-pointer roboto-nav"
            >
              Home Page
            </p>
            <a href="#about">
              <p className="hover:underline p-2 hover:cursor-pointer roboto-nav">
                About Us
              </p>
            </a>
            <a href="#event-calender">
              <p className="hover:underline p-2 hover:cursor-pointer roboto-nav">
                Events Calendar
              </p>
            </a>
            <a href="#research-areas">
              <p className="hover:underline p-2 hover:cursor-pointer roboto-nav">
              Research Areas
            </p>

            </a>

            
          </div>
        </div>
        <div>
          <a
            href="https://www.facebook.com/researchsociety.ju"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="rounded-none hover:cursor-pointer hover:bg-blue-500">
              Register Now
            </Button>
          </a>
        </div>
      </div>
      {/* For Mobile Navbar */}
      <div className="md:hidden  w-full fixed bg-white ">
        <div className="w-full max-w-[16000px] h-[72px] border-b border-gray-200 px-8 mx-auto flex items-center justify-between shadow">
          <div>
            <img
              onClick={() => {
                scrollTo(0, 0);
              }}
              src={logo}
              className="w-[48px] h-[43px] hover:cursor-pointer"
            />
          </div>
          <div>
            <Sheet>
              <SheetTrigger>
                <AlignJustify className="hover:cursor-pointer" />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <img
                    src={logo}
                    className="w-[30px] h-[30px] hover:cursor-pointer"
                  />
                </SheetHeader>
                <div className="flex flex-col flex-1">
                  <p
                    onClick={() => {
                      scrollTo(0, 0);
                    }}
                    className="border-2 m-1 p-2 rounded-2xl text-center hover:cursor-pointer hover:border-blue-500 roboto-nav"
                  >
                    Home Page
                  </p>
                  <a href="#about">
                    <p className="border-2 m-1 p-2 rounded-2xl text-center hover:cursor-pointer  hover:border-blue-500 roboto-nav">
                      About Us
                    </p>
                  </a>
                  <a href="#event-calender">
                    <p className="border-2 m-1 p-2 rounded-2xl text-center hover:cursor-pointer  hover:border-blue-500 roboto-nav">
                      Events Calendar
                    </p>
                  </a>

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
