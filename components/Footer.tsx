import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="pt-[3rem] pb-[3rem] bg-gray-800">
      <div className="w-[80%] border-b-[1.2px] pb-[2rem] border-b-slate-500 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[3rem]">
        <div>
          <h1 className="text-[25px] uppercase text-white mb-[1rem]">
            Science & Tech
          </h1>
          <p className="text-[14px] text-white opacity-60">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className="text-[14px] mt-[1.4rem] text-white opacity-80">
            +1 (718) 314 8147 - amaar5ali@gmail.com
          </p>
        </div>
        <div className="lg:mx-auto">
          <h1 className="text-[20px] text-white mb-[1.5rem]">Information</h1>
          <p className="footer__link">About Us</p>
          <p className="footer__link">Privacy Policy</p>
          <p className="footer__link">Return Policy</p>
          <p className="footer__link">Shipping Policy</p>
          <p className="footer__link">Dropshipping</p>
        </div>
        <div className="lg:mx-auto">
          <h1 className="text-[20px] text-white mb-[1.5rem]">Account</h1>
          <p className="footer__link">Dashboard</p>
          <p className="footer__link">My Orders</p>
          <p className="footer__link">Account Details</p>
          <p className="footer__link">Track My Orders</p>
        </div>
        <div className="lg:mx-auto">
          <h1 className="text-[20px] text-white mb-[1.5rem]">Shop</h1>
          <p className="footer__link">Affiliates</p>
          <p className="footer__link">Best Sellers</p>
          <p className="footer__link">Latest Products</p>
          <p className="footer__link">On Sale</p>
        </div>
      </div>
      <div className="mt-[2rem] grid grid-cols-1 gap-[1.4rem] sm:grid-cols-2 justify-between w-[80%] mx-auto">
        <p className="text-[14px] text-white opacity-60">
          &#169; Copyright - Amaar Ali - 2024
        </p>
        <Image
          src="/images/pay.png"
          alt="pay"
          width={100}
          height={100}
          className="object-contain sm:ml-auto rounded-full"
        />
      </div>
    </div>
  );
};

export default Footer;