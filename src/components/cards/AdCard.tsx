import React from "react";

const AdCard = () => {
  return (
    <div className="h-[460px] w-[220px]  bg-white dark:bg-[#3B3E47] p-3 shadow-[#d1d1d1] dark:shadow-[#191a1b] rounded overflow-hidden shadow-lg">
      <div className="relative w-full h-[12rem]">
        <img
          className=" object-cover object-center"
          src="https://s3-alpha-sig.figma.com/img/c724/731e/f71497e0e3af85c77fa47046bb1f23cb?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YfHZuev7WUagkCJeDUVdHbkG5bqC2YmjXKJSZLKbyymg8PLUCF1d-3ITeG2OSpcKgHjVq3lbGf7eLgT0-RWii9vAbSSrltvD7RI88jX3A1p0QZTvL~643uJOzylJw00w1DWQKzrTEHLkK2D4jxJ4n3C9D03B-Odrn9zVjUWBi9mqnU5op991kONICO-AT7eCWb2APcuZxUGYnj8xpoj5L5modFS2ABEy2X1gaT0HXJZoVu2276JkODvrtjnC3F4~lM3f7rLQQam1iI8a3frGTCuFQfbXM3VAQ7nfBJDVDCcyeJcyc4m1oPldx2ONzo2CGn5jRfonRO5RlD-OHbierA__"
          alt="Ad"
        />
        <div className="absolute top-0 right-0 dark:bg-gray-900 text-white font-semibold px-2 py-1">
          AD
        </div>
      </div>
      <div className=" py-4">
        <div className="font-bold text-xl mb-2">Ad Title</div>
        <p className="text-[#525965] dark:text-[#DFDFDF] text-xs line-clamp-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
};

export default AdCard;
