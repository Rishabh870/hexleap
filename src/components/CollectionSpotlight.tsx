"use client";

import CollectionCard from "./cards/CollectionCards";
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

const data = [
  {
    img: "https://s3-alpha-sig.figma.com/img/bc7b/d2d1/a2c7e5def5b347470305864869a894b6?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BZDcos--1UzSQRlT-N9cx65GfMLCdY1bDgUpPVGWaSaeNFqn5f3mWqPPavOC3dwIVAQ5LSFSV87f4nqFWTL47SpM9SAoK-Hik~QDb9r9ZcMQi0f2bLc~CwVSIVqTWUUErwccA~nln3KASNGTwveym6PUgIPSqPuS0TzUtzpGFgI80gg31qkC0KXNRC--XF6vFtVP5szniy~A5-hhak8Ct-WgvgQLqVThJm~LXpDkB0NIVZ8NQ9O2y6whQDm0gf7Ex7i03oFtipY19gbTtPAr6mzV-0RZKivl-0woyvGsK-aA1JzKvWYgzExzhjqGFCca1yvb2KbomyjjpZHxtvZV-A__",
    title: "Las Vegas Aviators",
    dateTime: "Feb 25 | Fri | 10:00 AM",
    address: "1234 Example St 22, City, Country",
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/3de4/4e83/b6e3aeda879dc6f22f94711c788789b5?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nUF~1EVyrZGHV5Y2m287PwrLOJlkr894fLVacxtljXvPD4wxG9g4D2HNAj17sY960ZApdFZ7vZXHvZjq0~7Vb0wM3nF3b6Vi4SHLk4ztO3tAouszbmpZp~d~lEZl3-95hpbTXgrwtNGB8ujsBxQL5KUsZwG3wCPXLt61kJIpz2pmCQcmY9vS-JuNgfHT13F0ObY4jJSYeFrRcihRJfTmLxzOCbyXqncFRQhnBCuL50D-E1XAHNLFOX5AXJVnBoisGHVAYJbjfoz3UWH0g-bApbnLTUyR5vEZUBdIwoQISiaSttjGTQD6NhpHyKXKHWuE3yVUN2jmWzVwOnvPzn1nEA__",
    title: "New Jersey Devils",
    dateTime: "May 26 | Sat | 2:00 PM",
    address: "5678 Test Ave 22, Town, Country",
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/bc7b/d2d1/a2c7e5def5b347470305864869a894b6?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BZDcos--1UzSQRlT-N9cx65GfMLCdY1bDgUpPVGWaSaeNFqn5f3mWqPPavOC3dwIVAQ5LSFSV87f4nqFWTL47SpM9SAoK-Hik~QDb9r9ZcMQi0f2bLc~CwVSIVqTWUUErwccA~nln3KASNGTwveym6PUgIPSqPuS0TzUtzpGFgI80gg31qkC0KXNRC--XF6vFtVP5szniy~A5-hhak8Ct-WgvgQLqVThJm~LXpDkB0NIVZ8NQ9O2y6whQDm0gf7Ex7i03oFtipY19gbTtPAr6mzV-0RZKivl-0woyvGsK-aA1JzKvWYgzExzhjqGFCca1yvb2KbomyjjpZHxtvZV-A__",
    title: "Sacramento River Cats",
    dateTime: "Jan 27 | Sun | 5:00 PM",
    address: "9012 Demo Blvd, Village, Country",
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/3de4/4e83/b6e3aeda879dc6f22f94711c788789b5?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nUF~1EVyrZGHV5Y2m287PwrLOJlkr894fLVacxtljXvPD4wxG9g4D2HNAj17sY960ZApdFZ7vZXHvZjq0~7Vb0wM3nF3b6Vi4SHLk4ztO3tAouszbmpZp~d~lEZl3-95hpbTXgrwtNGB8ujsBxQL5KUsZwG3wCPXLt61kJIpz2pmCQcmY9vS-JuNgfHT13F0ObY4jJSYeFrRcihRJfTmLxzOCbyXqncFRQhnBCuL50D-E1XAHNLFOX5AXJVnBoisGHVAYJbjfoz3UWH0g-bApbnLTUyR5vEZUBdIwoQISiaSttjGTQD6NhpHyKXKHWuE3yVUN2jmWzVwOnvPzn1nEA__",
    title: "Las Vegas Aviators",
    dateTime: "April 26 | Sat | 2:00 PM",
    address: "5678 Test Ave 22, Town, Country",
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/bc7b/d2d1/a2c7e5def5b347470305864869a894b6?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BZDcos--1UzSQRlT-N9cx65GfMLCdY1bDgUpPVGWaSaeNFqn5f3mWqPPavOC3dwIVAQ5LSFSV87f4nqFWTL47SpM9SAoK-Hik~QDb9r9ZcMQi0f2bLc~CwVSIVqTWUUErwccA~nln3KASNGTwveym6PUgIPSqPuS0TzUtzpGFgI80gg31qkC0KXNRC--XF6vFtVP5szniy~A5-hhak8Ct-WgvgQLqVThJm~LXpDkB0NIVZ8NQ9O2y6whQDm0gf7Ex7i03oFtipY19gbTtPAr6mzV-0RZKivl-0woyvGsK-aA1JzKvWYgzExzhjqGFCca1yvb2KbomyjjpZHxtvZV-A__",
    title: "Sacramento River Cats",
    dateTime: "March 27 | Mon | 5:00 PM",
    address: "9012 Demo Blvd, Village, Country",
  },
];

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
                    className=" md:basis-1/2 flex justify-center items-center lg:basis-1/3"
                  >
                    <div className="p-2">
                      <CollectionCard {...data[index]} />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className=" rounded-none text-blue-500 border-2 border-blue-500 bg-transparent py-5" />
              {/* Style the previous button */}
              <CarouselNext className="rounded-none text-blue-500 border-2 border-blue-500 bg-transparent py-5" />
              {/* Style the next button */}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionSpotlight;
