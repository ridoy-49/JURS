import React from "react";
import logo from "../assets/logo.png";
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <div className="px-6 md:px-12 w-full">
      <div className="flex md:flex-col  items-center">
        <div className="flex flex-col md:flex-row md:gap-25 gap-8 w-full">
          <div className="flex flex-col flex-1 w-full">
            <img src={logo} className="w-[48px] h-[43px]"></img>
            <p>Join our club</p>
            <div>
              <span className="flex flex-row gap-4">
                <input type="text" placeholder="Enter your email address"  className="rounded-none border-2 border-black" />
                <Button variant="outline" className="px-4 py-2 rounded-none border-2 border-black" > Join</Button>
              </span>
            </div>
            <p className="w-full">By joining, you consent to our Privacy Policy and agree to receive updates.</p>
          </div>
          <div className="flex-1 grid grid-cols-1 md:grid-cols-3">
            <div>
                <p>Resources Section</p>
                <p>Resources Section</p>
                <p>Resources Section</p>
                <p>Resources Section</p>
                <p>Resources Section</p>
            </div>
            <div>
                <p>Resources Section</p>
                <p>Resources Section</p>
                <p>Resources Section</p>
                <p>Resources Section</p>
                <p>Resources Section</p>
            </div>
            <div>
                <p>Resources Section</p>
                <p>Resources Section</p>
                <p>Resources Section</p>
                <p>Resources Section</p>
                <p>Resources Section</p>
            </div>

          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Footer;
