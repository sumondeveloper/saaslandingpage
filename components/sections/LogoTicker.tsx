import { LogoItems } from "@/lib/constant";
import MaxWidthWrapper from "../shared/MaxWidthWrapper";
import Image from "next/image";
import * as motion from "motion/react-client";

const LogoTicker = () => {
  return (
    <div className="bg-black py-[72px]">
      <MaxWidthWrapper>
        <h2 className="text-xl text-center text-[#7A7A7A]">
          Trusted by the world’s most innovative teams
        </h2>

        <div className="overflow-hidden mt-9 before:content-[''] after:content-[''] before:absolute after:absolute before:z-10 before:h-full after:h-full before:w-5 after:w-5 relative after:right-0 before:left-0 before:top-0 after:to-0 before:bg-[linear-gradient(to_right,#000,rgb(0,0,0,0))] after:bg-[linear-gradient(to_left,#000,rgb(0,0,0,0))]">
          <motion.div
            initial={{ translateX: 0 }}
            animate={{ translateX: "-50%" }}
            transition={{ duration: 10, ease: "linear", repeat: Infinity }}
            className="flex gap-16 justify-center pr-16"
          >
            {LogoItems.map((item, index) => (
              <Image
                src={item}
                alt=""
                key={index * 5}
                className="h-8 w-auto flex-none"
              />
            ))}
            {LogoItems.map((item, index) => (
              <Image
                src={item}
                alt=""
                key={index * 5}
                className="h-8 w-auto flex-none"
              />
            ))}
          </motion.div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};
export default LogoTicker;
