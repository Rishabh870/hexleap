"use client";

import SportCard from "./cards/SportCard";

const sportData = [
  {
    img: "https://s3-alpha-sig.figma.com/img/a24a/d1e0/76e2b366b2456bbd169b0c3c9525252c?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nkp1Is~dcRKVSVj8GNhxNLMJ7gTEzNDkf8VtD-OryJ0sykh1lwmV-ewiigHPS4njhKjcfYNYHzNtka9sa6DQdjxPUZR6L9ziTFWXse30L5RapCCt5H7T5jsZsMoP09PSNj4-HiVCjoqXwVAVEAhZm~f924bZogIfzfxFc0gC3OPjXnfM2b3~W2jRmsFQJYQxHVAHE2c0YUjzBlbFgDwCD5VY6C~tF71RtERjrsoOZMrojXSQzoPhqcCyNZY5lTX7IFlGbpi-1d4QbKSqih3hrizl6afTuUEfMU-y2fpz3lLyQ3EWMCMLQ8RwiBLAvOcsMkDiPhzFhKCJR0~L6GgGBQ__",
    name: "Sacramento River Cats",
    eventNumber: 123,
    sport: "Baseball",
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/ceed/8067/dc33760174d3f67737f6e318d0f118ff?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gRi10t64DHbb7CKAQ32uZ8r5GgEveA16AhaoyJEq5xxP-SI1b7CiBLkszXQXdS713LL7XKUWF8lKLmJUBIHFgNwgoxU7Q9nUnTlunB5FYP~lcjUv94Cz3te24QyiQnWAXIYz8fW7GX3EBT4Fm9fCAf3N4UG9T9VBZmPdj48aJydkpc4ghL1a~Vxl2ffVb60sIf7aGozJWUMLb19ldALA1PIcnDhX4fLianO0lSzhCaZqBocge45saoIJsWh-Namu5euhcgWNzj4jjaLFrh40McHoPYSz2FJkcgSqcfGTQhpa9-5YidZ0H6j-Uo2C~uB2DgFW5uPwJWNq~9Ow~j12qQ__",
    name: "Las Vegas Aviators",
    eventNumber: 99,
    sport: "Baseball",
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/a24a/d1e0/76e2b366b2456bbd169b0c3c9525252c?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nkp1Is~dcRKVSVj8GNhxNLMJ7gTEzNDkf8VtD-OryJ0sykh1lwmV-ewiigHPS4njhKjcfYNYHzNtka9sa6DQdjxPUZR6L9ziTFWXse30L5RapCCt5H7T5jsZsMoP09PSNj4-HiVCjoqXwVAVEAhZm~f924bZogIfzfxFc0gC3OPjXnfM2b3~W2jRmsFQJYQxHVAHE2c0YUjzBlbFgDwCD5VY6C~tF71RtERjrsoOZMrojXSQzoPhqcCyNZY5lTX7IFlGbpi-1d4QbKSqih3hrizl6afTuUEfMU-y2fpz3lLyQ3EWMCMLQ8RwiBLAvOcsMkDiPhzFhKCJR0~L6GgGBQ__",
    name: "New Jersey Devils",
    eventNumber: 123,
    sport: "Baseball",
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/ceed/8067/dc33760174d3f67737f6e318d0f118ff?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gRi10t64DHbb7CKAQ32uZ8r5GgEveA16AhaoyJEq5xxP-SI1b7CiBLkszXQXdS713LL7XKUWF8lKLmJUBIHFgNwgoxU7Q9nUnTlunB5FYP~lcjUv94Cz3te24QyiQnWAXIYz8fW7GX3EBT4Fm9fCAf3N4UG9T9VBZmPdj48aJydkpc4ghL1a~Vxl2ffVb60sIf7aGozJWUMLb19ldALA1PIcnDhX4fLianO0lSzhCaZqBocge45saoIJsWh-Namu5euhcgWNzj4jjaLFrh40McHoPYSz2FJkcgSqcfGTQhpa9-5YidZ0H6j-Uo2C~uB2DgFW5uPwJWNq~9Ow~j12qQ__",
    name: "Las Vegas Aviators",
    eventNumber: 123,
    sport: "Baseball",
  },
];

const Sports = () => {
  return (
    <div className="h-full py-10 md:py-3 lg:h-screen w-full flex justify-evenly flex-col items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {sportData.map((sport, index) => (
          <SportCard key={index} {...sport} />
        ))}
      </div>
      <button className="text-white text-sm bg-[#2C9CF0] rounded-sm px-6 py-3">
        See More
      </button>
    </div>
  );
};

export default Sports;
