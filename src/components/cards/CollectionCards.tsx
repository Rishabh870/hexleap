import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

interface CollectionCardProps {
  img: string;
  title: string;
  dateTime: string;
  address: string;
}

const CollectionCard: React.FC<CollectionCardProps> = ({
  img,
  title,
  dateTime,
  address,
}) => {
  // Use state to manage dark mode
  const { resolvedTheme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Listen for theme changes
  useEffect(() => {
    setIsDarkMode(resolvedTheme === "dark");
  }, [resolvedTheme]);
  return (
    <div
      className={`${isDarkMode ? "dark-cut" : "cut"} h-[30rem] w-[13rem]   `}
    >
      {/* First Part: Image */}
      <div className="p-3 pb-0 relative h-[19.6rem]">
        <div className=" h-full">
          <img className="object-cover w-full h-full" src={img} alt={title} />
        </div>
      </div>

      {/* Second Part: Divider */}
      <div className=" px-3 relative my-[.8rem] rounded-lg flex items-center justify-center">
        <div className="relative w-full h-0 border-t-2 mt-[.05rem]  border-spacing-3 border-dashed border-[#adadad] dark:border-[#F7F7F8] "></div>
      </div>

      {/* Third Part: Text */}
      <div className="pb-2 px-3 h-2/5">
        <h3 className="text-sm font-semibold text-gray-800  dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-xs text-gray-700  dark:text-white mb-2">
          {dateTime}
        </p>
        <p className="text-xs text-gray-600  dark:text-[#DFDFDF] mb-2">
          {address}
        </p>

        {/* Fourth Part: Button */}
        <button className="bg-black text-white text-sm py-2 px-4 w-full">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default CollectionCard;
