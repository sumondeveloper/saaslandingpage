import Logo from "@/public/icons/logosaas.svg";
import Menu from "@/public/icons/menu.svg";
import MaxWidthWrapper from "../shared/MaxWidthWrapper";
import Link from "next/link";
import Image from "next/image";
import Button from "../shared/Button";
import { NavItems } from "@/lib/constant";
const Navbar = () => {
  return (
    <header className="bg-black py-5 text-white">
      <MaxWidthWrapper>
        <div className="flex justify-between items-center">
          <div className="relative">
            <div className="absolute w-full top-2 bottom-0 bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#FFDD9B,#C2F0B1,#2FD8FE)] blur-md"></div>
            <Link
              href="#"
              className="h-10 w-10 rounded-lg inline-flex justify-center items-center"
            >
              <Image src={Logo} alt="logo saas" className="relative" />
            </Link>
          </div>
          <Link href="" className="md:hidden">
            <Image src={Menu} alt="" />
          </Link>
          <nav className="hidden md:flex gap-6 items-center">
            {NavItems.map((item, index) => (
              <Link
                key={index}
                href={item.path}
                className="text-white/60 hover:text-white/100"
              >
                {item.title}
              </Link>
            ))}

            <a href="#">
              <Button>Get for free</Button>
            </a>
          </nav>
        </div>
      </MaxWidthWrapper>
    </header>
  );
};
export default Navbar;
