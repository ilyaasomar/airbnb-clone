import React from "react";
import { HiGlobeAlt, HiMenu, HiOutlineSearch } from "react-icons/hi";
const Navbar = () => {
  return (
    <section className="xl:max-w-[1800px] mx-auto py-3 px-5">
      {/* upper part */}
      <div className="flex justify-between items-center">
        {/* logo */}
        <div>
          <img src="/assets/logo.png" className="w-28 h-16 object-contain" />
        </div>
        {/* center part */}
        <div className="flex justify-between items-center border-[1.5px] py-2 px-4 border-gray-300 rounded-full hover:shadow-md">
          <h3>Anywhere</h3>
          <div className="w-1 h-7 ml-3 mr-3 border-1 border-l-2 opacity-10 border-gray-600" />
          <h3>Any Week</h3>
          <div className="w-1 h-7 ml-3 mr-3 border-1 border-l-2 opacity-10 border-gray-600" />
          <button>Add Guests</button>
          <div className="w-8 h-8 bg-secondary rounded-full ml-3 flex items-center justify-center">
            <HiOutlineSearch color="white" className="font-bold w-5 h-5" />
          </div>
        </div>
        {/* right part */}
        <div className="flex items-center gap-5">
          <h3>Switch to Hosting</h3>
          <HiGlobeAlt className="w-5 h-5" />
          <div className="border-[1.5px] py-2 px-3 border-gray-300 rounded-full flex items-center gap-3">
            <HiMenu />
            {/* <div className=""> */}
            <img src="assets/avatar.avif" className="w-7 h-7 " />
            {/* </div> */}
          </div>
        </div>
      </div>
      <div className="w-full border-b mt-2" />
      {/* button part */}
      <div></div>
    </section>
  );
};

export default Navbar;
