import React from "react";

const TopBar = () => {
  return (
    <div className="bg-third border-b" >
      <nav className="xl:max-w-[1800px] mx-auto py-2 px-5">
        <div className="flex justify-between items-center">
          <h1 className="font-semibold text-lg leading-10">
            Introducing Airbnb Rooms and 50+ features
          </h1>
          <div className="flex items-center">
            <img
              src="/assets/house_thumb.png"
              className="w-12 h-12 object-contain mr-3"
            />
            <h3 className="text-gray-500 font-normal text-md">
              Watch the Rooms film
            </h3>
            <div className="w-1 h-7 ml-3 mr-3 border-1 border-l-2 opacity-10 border-gray-600" />
            <h3 className="text-gray-500 font- text-md">Learn more</h3>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default TopBar;
