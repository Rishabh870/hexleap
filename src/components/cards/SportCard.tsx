import Image from "next/image";
import React from "react";

interface SportCardProps {
  img: string;
  name: string;
  eventNumber: number;
  sport: string;
}

const SportCard = ({ img, name, eventNumber, sport }: SportCardProps) => {
  return (
    <>
      <div className="max-w-md h-[460px] w-[220px] mx-auto bg-white dark:bg-[#3B3E47]  shadow-lg shadow-[#d1d1d1] dark:shadow-[#191a1b] mb-4 p-3">
        {/* dark:bg-[#3B3E47] */}

        {/* Top part for image */}
        <div className=" pb-0 relative h-[20rem]">
          <div className=" h-full">
            <img className="object-cover w-full h-full" src={img} alt={name} />
          </div>
        </div>
        {/* Bottom part for name, eventNumber, and sport */}
        <div className="my-4">
          <h2 className="text-[17px] m-0 font-semibold">{name}</h2>
        </div>
        <div className=" h-fit">
          {/* Name */}

          {/* Event Number and Sport */}
          <div className=" flex row-auto bg-[#F7F7F8] dark:bg-[#292B32] p-2 ">
            {/* dark:bg-[#292B32] */}

            {/* Event Number */}
            <div className=" w-full col-auto">
              <p className="font-medium pb-1 text-[12px] text-[#525965] dark:text-[#DFDFDF]">
                {/* dark:text-[#DFDFDF] */}
                Total Events
              </p>
              <p className="text-sm  font-semibold">{eventNumber} Event</p>
            </div>
            {/* Sport */}
            <div className=" w-full col-auto">
              <p className="font-medium text-[12px] pb-1 text-[#525965] dark:text-[#DFDFDF]">
                {/* dark:text-[#DFDFDF] */}
                Sport
              </p>
              <p className="text-sm   font-semibold">{sport}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SportCard;
