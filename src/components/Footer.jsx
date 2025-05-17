import React from "react";
import logo from "../assets/logo.png";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <div className="px-6 md:px-12 w-full my-10 ">
      <div className="flex flex-col  items-center">
        <div className="flex flex-col md:flex-row md:gap-25 gap-8 w-full">
          <div className="flex flex-col flex-2/5 w-full">
            <img src={logo} className="w-[48px] h-[43px] my-3"></img>
            <p className="text-[16px] leading-[150%]">Join our club</p>
            <div>
              <span className="flex md:flex-row gap-4 flex-col my-3">
                <input
                  type="text"
                  placeholder="Enter your email address"
                  className="rounded-none border-2 border-black p-2 md:px-2 md:py-0"
                />
                <Button
                  variant="outline"
                  className="px-4 py-2 rounded-none border-2 border-black hover:bg-blue-500"
                >
                  Join
                </Button>
              </span>
            </div>
            <p className="w-full text-[12px] leading-[150%] my-1 ">
              By joining, you consent to our Privacy Policy and agree to receive
              updates.
            </p>
          </div>
          <div className="flex-3/5 grid grid-cols-1 md:grid-cols-3 w-full items-start justify-start">
            <div className="py-3 md:py-0">
              <p className="text-[16px] leading-[150%] font-semibold py-4">
                Resources Section
              </p>
              <p className="text-[14px] leading-[150%] py-2">Blog Posts</p>
              <p className="text-[14px] leading-[150%] py-2">FAQs</p>
              <p className="text-[14px] leading-[150%] py-2">Case Studies</p>
              <p className="text-[14px] leading-[150%] py-2">Support Center</p>
              <p className="text-[14px] leading-[150%] py-2">Contact Us</p>
            </div>
            <div className="py-3 md:py-0">
              <p className="text-[16px] leading-[150%] font-semibold py-4">
                Connect With Us
              </p>
              <p className="text-[14px] leading-[150%] py-2">Webinars</p>
              <p className="text-[14px] leading-[150%] py-2">Newsletters</p>
              <p className="text-[14px] leading-[150%] py-2">Community</p>
              <p className="text-[14px] leading-[150%] py-2">Events</p>
              <p className="text-[14px] leading-[150%] py-2">Partnerships</p>
            </div>
            <div className="py-3 md:py-0">
              <div>
                <p className="text-[16px] leading-[150%] font-semibold py-4">
                  Stay Connected
                </p>
                <div className="flex flex-row  gap-3 py-2 items-center hover:cursor-pointer hover:underline">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="w-6 h-6 fill-[#232323]"
                    >
                      <path d="M22 12.3038C22 6.74719 17.5229 2.24268 12 2.24268C6.47715 2.24268 2 6.74719 2 12.3038C2 17.3255 5.65684 21.4879 10.4375 22.2427V15.2121H7.89844V12.3038H10.4375V10.0872C10.4375 7.56564 11.9305 6.1728 14.2146 6.1728C15.3088 6.1728 16.4531 6.36931 16.4531 6.36931V8.84529H15.1922C13.95 8.84529 13.5625 9.6209 13.5625 10.4166V12.3038H16.3359L15.8926 15.2121H13.5625V22.2427C18.3432 21.4879 22 17.3257 22 12.3038Z" />
                    </svg>
                  </span>
                  <p className="text-[14px] leading-[150%] ">Facebook</p>
                </div>
                <div className="flex flex-row  gap-3 py-2 items-center hover:cursor-pointer hover:underline">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="w-6 h-6 fill-[#232323]"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M16 3.24268H8C5.23858 3.24268 3 5.48126 3 8.24268V16.2427C3 19.0041 5.23858 21.2427 8 21.2427H16C18.7614 21.2427 21 19.0041 21 16.2427V8.24268C21 5.48126 18.7614 3.24268 16 3.24268ZM19.25 16.2427C19.2445 18.0353 17.7926 19.4872 16 19.4927H8C6.20735 19.4872 4.75549 18.0353 4.75 16.2427V8.24268C4.75549 6.45003 6.20735 4.99817 8 4.99268H16C17.7926 4.99817 19.2445 6.45003 19.25 8.24268V16.2427ZM16.75 8.49268C17.3023 8.49268 17.75 8.04496 17.75 7.49268C17.75 6.9404 17.3023 6.49268 16.75 6.49268C16.1977 6.49268 15.75 6.9404 15.75 7.49268C15.75 8.04496 16.1977 8.49268 16.75 8.49268ZM12 7.74268C9.51472 7.74268 7.5 9.7574 7.5 12.2427C7.5 14.728 9.51472 16.7427 12 16.7427C14.4853 16.7427 16.5 14.728 16.5 12.2427C16.5027 11.0484 16.0294 9.90225 15.1849 9.05776C14.3404 8.21327 13.1943 7.74002 12 7.74268ZM9.25 12.2427C9.25 13.7615 10.4812 14.9927 12 14.9927C13.5188 14.9927 14.75 13.7615 14.75 12.2427C14.75 10.7239 13.5188 9.49268 12 9.49268C10.4812 9.49268 9.25 10.7239 9.25 12.2427Z"
                      />
                    </svg>
                  </span>
                  <p className="text-[14px] leading-[150%] ">Instagram</p>
                </div>
                <div className="flex flex-row  gap-3 py-2 items-center hover:cursor-pointer hover:underline">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="w-6 h-6 fill-[#232323]"
                    >
                      <path d="M17.1761 4.24268H19.9362L13.9061 11.0201L21 20.2427H15.4456L11.0951 14.6493L6.11723 20.2427H3.35544L9.80517 12.9935L3 4.24268H8.69545L12.6279 9.3553L17.1761 4.24268ZM16.2073 18.6181H17.7368L7.86441 5.78196H6.2232L16.2073 18.6181Z" />
                    </svg>
                  </span>
                  <p className="text-[14px] leading-[150%] ">X</p>
                </div>
                <div className="flex flex-row  gap-3 py-2 items-center hover:cursor-pointer hover:underline">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 18 19"
                      className="w-[18px] h-[19px] fill-[#232323]"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1.5 0.242676C0.67157 0.242676 0 0.914246 0 1.74268V16.7427C0 17.5711 0.67157 18.2427 1.5 18.2427H16.5C17.3284 18.2427 18 17.5711 18 16.7427V1.74268C18 0.914246 17.3284 0.242676 16.5 0.242676H1.5ZM5.52076 4.2454C5.52639 5.20165 4.81061 5.79087 3.96123 5.78665C3.16107 5.78243 2.46357 5.1454 2.46779 4.24681C2.47201 3.40165 3.13998 2.72243 4.00764 2.74212C4.88795 2.76181 5.52639 3.40728 5.52076 4.2454ZM9.2797 7.00444H6.75971H6.7583V15.5643H9.4217V15.3646C9.4217 14.9847 9.4214 14.6047 9.4211 14.2246C9.4203 13.2108 9.4194 12.1959 9.4246 11.1824C9.426 10.9363 9.4372 10.6804 9.5005 10.4455C9.7381 9.56798 10.5271 9.00128 11.4074 9.14058C11.9727 9.22908 12.3467 9.55678 12.5042 10.0898C12.6013 10.423 12.6449 10.7816 12.6491 11.129C12.6605 12.1766 12.6589 13.2242 12.6573 14.2719C12.6567 14.6417 12.6561 15.0117 12.6561 15.3815V15.5629H15.328V15.3576C15.328 14.9056 15.3278 14.4537 15.3275 14.0018C15.327 12.8723 15.3264 11.7428 15.3294 10.6129C15.3308 10.1024 15.276 9.59898 15.1508 9.10538C14.9638 8.37128 14.5771 7.76378 13.9485 7.32508C13.5027 7.01287 13.0133 6.81178 12.4663 6.78928C12.404 6.78669 12.3412 6.7833 12.2781 6.77989C11.9984 6.76477 11.7141 6.74941 11.4467 6.80334C10.6817 6.95662 10.0096 7.30678 9.5019 7.92408C9.4429 7.99488 9.3852 8.06678 9.2991 8.17408L9.2797 8.19838V7.00444ZM2.68164 15.5671H5.33242V7.01001H2.68164V15.5671Z"
                      />
                    </svg>
                  </span>
                  <p className="text-[14px] leading-[150%] ">LinkedIn</p>
                </div>
                <div className="flex flex-row  gap-3 py-2 items-center hover:cursor-pointer hover:underline">
                  <span>
                    <svg
                      width="21"
                      height="15"
                      viewBox="0 0 21 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.5928 2.20301C20.4789 1.78041 20.2563 1.39501 19.9472 1.08518C19.6381 0.775338 19.2532 0.551868 18.8308 0.437007C17.2648 0.00700739 10.9998 7.59651e-06 10.9998 7.59651e-06C10.9998 7.59651e-06 4.73584 -0.00699261 3.16884 0.404007C2.74677 0.524154 2.36266 0.750785 2.05341 1.06214C1.74415 1.3735 1.52013 1.75913 1.40284 2.18201C0.989841 3.74801 0.985841 6.99601 0.985841 6.99601C0.985841 6.99601 0.981841 10.26 1.39184 11.81C1.62184 12.667 2.29684 13.344 3.15484 13.575C4.73684 14.005 10.9848 14.012 10.9848 14.012C10.9848 14.012 17.2498 14.019 18.8158 13.609C19.2383 13.4943 19.6236 13.2714 19.9335 12.9622C20.2434 12.653 20.4672 12.2682 20.5828 11.846C20.9968 10.281 20.9998 7.03401 20.9998 7.03401C20.9998 7.03401 21.0198 3.76901 20.5928 2.20301ZM8.99584 10.005L9.00084 4.00501L14.2078 7.01001L8.99584 10.005Z"
                        fill="#232323"
                      />
                    </svg>
                  </span>
                  <p className="text-[14px] leading-[150%]">YouTube</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t-2 w-full border-black my-10 ">
          <div className="flex md:flex-row flex-col-reverse justify-between py-8">
            <div className="py-6 md:py-0  ">
              <p className="text-[14px] leading-[150%]">
                © 2025 Jurs. All rights reserved.
              </p>
            </div>
            <div className="flex md:flex-row flex-col md:gap-8 gap-4">
              <p className="text-[14px] leading-[150%] underline">
                Privacy Policy
              </p>
              <p className="text-[14px] leading-[150%] underline">
                Terms of Service
              </p>
              <p className="text-[14px] leading-[150%] underline">
                Cookie Settings
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
