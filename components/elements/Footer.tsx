import { SocialItems } from "@/lib/constant";
import MaxWidthWrapper from "../shared/MaxWidthWrapper";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-black text-[#808080] text-center py-5 sm:py-10">
      <MaxWidthWrapper className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h3 className="text-base sm:mt-2">
          @ 2024 Your Company, Inc. All rights reserved
        </h3>
        <ul className="flex justify-center mt-3 gap-[11px]">
          {SocialItems.map((item, index) => (
            <li key={index * 8}>
              <Link href={item.path}>
                <Image src={item.icon} alt="" />
              </Link>
            </li>
          ))}
        </ul>
      </MaxWidthWrapper>
    </footer>
  );
};
export default Footer;
