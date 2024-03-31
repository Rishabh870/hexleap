"use client";

import CollectionCard from "./cards/CollectionCards";
import data from "./data.json";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

const CollectionSpotlight = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const { resolvedTheme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Listen for theme changes
  useEffect(() => {
    setIsDarkMode(resolvedTheme === "dark");
  }, [resolvedTheme]);

  return (
    <div className=" w-full h-full 2xl:h-screen py-14 md:px-[3rem] xl:px-[5.5rem]">
      <div
        style={{
          background: `${
            isDarkMode
              ? "linear-gradient(to bottom, #18282A 100%, #221A2C 100%)"
              : ""
          }`,
        }}
        className="py-6 h-full max-w-[73rem] m-auto"
      >
        <div className=" w-full h-full flex flex-col items-center px-4 justify-evenly mx-auto">
          <div className=" w-full h-fit text-center">
            <h1 className="text-3xl font-bold">Collection Spotlight</h1>
            <p className="text-xs mt-3">
              Discover extraordinary moments with our Spotlight Collection
              metatickets—exclusive access to premium events for an
              unforgettable experience. Grab yours today!
            </p>
          </div>
          <div className="w-full h-fit text-center">
            <Carousel
              plugins={[plugin.current]}
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
              className="w-full md:w-[40rem] lg:w-[50rem]  mx-auto "
            >
              <CarouselContent className=" my-3">
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem
                    key={index}
                    className=" sm:basis-1/2 flex justify-center items-center lg:basis-1/3"
                  >
                    <div className="p-2">
                      <CollectionCard {...data?.CollectionData[index]} />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {/* Style the previous button */}
              <CarouselPrevious className=" rounded-none text-blue-500 border-2 border-blue-500 bg-transparent  py-5" />
              {/* Style the next button */}
              <CarouselNext className="rounded-none text-blue-500 border-2 border-blue-500 bg-transparent py-5" />
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionSpotlight;
