import Link from "next/link";
import Image from "next/image";
import ArrowRight from "@/public/icons/Icons.svg";
const Banner = () => {
  return (
    <div className="text-center py-3.5 bg-[linear-gradient(to_right,#FEECFF,#FECAFF,#FEB5FF,#FFDBE7,#FFF4D6,#F3FCD7,#D2F5EE,#C3EFFF,#FBEFFF)]">
      <div className="flex justify-center gap-2">
        <p className="hidden md:block text-lg font-medium">
          This page is included in a free SaaS Website Kit.
        </p>

        <Link
          href="/"
          className="text-black md:underline underline-offset-4 font-medium inline-flex items-center"
        >
          View the complete Kit
          <span>
            <Image src={ArrowRight} alt="" />
          </span>
        </Link>
      </div>
    </div>
  );
};
export default Banner;
