import CollectionSpotlight from "@/components/CollectionSpotlight";
import Sports from "@/components/Sports";
import { ModeToggle } from "@/components/theme/Toggler";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" bg-[#F7F7F8] dark:bg-[#292B32] h-full overflow-hidden w-full ">
      <div className=" fixed">
        <ModeToggle />
      </div>

      <Sports />
      <CollectionSpotlight />
    </div>
  );
}
