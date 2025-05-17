import { LogoItems } from "@/lib/constant";
import MaxWidthWrapper from "../shared/MaxWidthWrapper";
import Image from "next/image";

const LogoTicker = () => {
  return (
    <div className="bg-black py-[72px]">
      <MaxWidthWrapper>
        <h2 className="text-xl text-center text-[#7A7A7A]">
          Trusted by the world’s most innovative teams
        </h2>

        <div className="overflow-hidden mt-9 before:content-[''] after:content-[''] before:absolute after:absolute before:h-full after:h-full before:w-5 after:w-5 relative after:right-0 before:left-0 before:top-0 after:to-0 before:bg-[linear-gradient(to_right,#000,rgb(0,0,0,0))] after:bg-[linear-gradient(to_left,#000,rgb(0,0,0,0))]">
          <div className="flex gap-16 justify-center">
            {LogoItems.map((item, index) => (
              <Image
                src={item}
                alt=""
                key={index * 5}
                className="h-8 w-auto flex-none"
              />
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};
export default LogoTicker;
