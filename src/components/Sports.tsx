"use client";

import AdCard from "./cards/AdCard";
import SportCard from "./cards/SportCard";
import data from "./data.json";

const Sports = () => {
  return (
    <div className="h-full py-10 2xl:h-screen  w-full flex justify-evenly flex-col items-center md:p-7">
      <div className=" w-fit mx-auto">
        <h1 className="text-2xl border-b-4 border-blue-500 font-bold w-fit">
          Sports
        </h1>
        <div className="flex justify-evenly flex-col items-center mt-3 w-full h-full">
          <div className="grid grid-cols-1 md:grid-cols-2 mb-5 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {data?.SportData.map((sport, index) => (
              <SportCard key={index} {...sport} />
            ))}
            <AdCard />
          </div>
          <button className="text-white text-sm bg-[#2C9CF0] rounded-sm px-6 py-3">
            See More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sports;
