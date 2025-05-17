import Link from "next/link";
import MaxWidthWrapper from "../shared/MaxWidthWrapper";
import Button from "../shared/Button";
import cursor from "@/public/cursor.webp";
import message from "@/public/message.webp";
import Image from "next/image";
const Hero = () => {
  return (
    <div className="bg-black py-[72px] sm:py-[96px] bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)]  overflow-clip relative">
      <div className="absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] lg:w-[2400px] lg:h-[1200px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#BE9AE7] bg-[radial-gradient(closest-side,#000_82%,#9C67F4)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)]"></div>
      <MaxWidthWrapper className="relative">
        <div className="text-sm font-medium flex justify-center gap-3 items-center">
          <Link
            href="#"
            className="border-[#222] rounded-lg flex gap-2 py-1 px-3 border-[2px]"
          >
            <span className="bg-gradient-to-r from-red-500 to-blue-500 text-transparent bg-clip-text ">
              Version 2.0 is here
            </span>
            <span className="text-white inline-flex items-center gap-1">
              <span>Read more</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
              >
                <path
                  d="M13.3245 8.42451L9.7245 12.0245C9.61178 12.1372 9.45891 12.2006 9.2995 12.2006C9.14009 12.2006 8.98722 12.1372 8.8745 12.0245C8.76178 11.9118 8.69846 11.7589 8.69846 11.5995C8.69846 11.4401 8.76178 11.2872 8.8745 11.1745L11.45 8.60001H4.1C3.94087 8.60001 3.78826 8.5368 3.67574 8.42428C3.56321 8.31176 3.5 8.15914 3.5 8.00001C3.5 7.84088 3.56321 7.68827 3.67574 7.57575C3.78826 7.46323 3.94087 7.40001 4.1 7.40001H11.45L8.8755 4.82401C8.76278 4.7113 8.69946 4.55842 8.69946 4.39901C8.69946 4.23961 8.76278 4.08673 8.8755 3.97401C8.98822 3.8613 9.14109 3.79797 9.3005 3.79797C9.45991 3.79797 9.61278 3.8613 9.7255 3.97401L13.3255 7.57401C13.3814 7.62983 13.4258 7.69615 13.4561 7.76916C13.4863 7.84218 13.5018 7.92044 13.5017 7.99947C13.5016 8.0785 13.4859 8.15673 13.4555 8.22967C13.4251 8.30261 13.3806 8.36883 13.3245 8.42451Z"
                  fill="white"
                />
              </svg>
            </span>
          </Link>
        </div>
        <div className="flex justify-center">
          <div className="inline-flex relative">
            <h1 className="text-7xl font-semibold tracking-tighter text-white text-center sm:text-[154px] inline-flex md:text-[165px] lg:font-bold lg:tracking-[-12.375px] lg:leading-[125px] sm:leading-[120px]">
              One Task <br />
              at a Time
            </h1>
            <Image
              src={cursor}
              alt=""
              height="200"
              width="200"
              className="absolute right-[550px] top-[50px] hidden sm:inline lg:right-[590px] lg:top-[130px]"
            />
            <Image
              src={message}
              alt=""
              height="200"
              width="200"
              className="absolute top-[56px] left-[580px] hidden sm:inline lg:left-[620px]"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <p className="text-[22px] leading-[31px] text-white text-center mt-8 md:max-w-[500px]">
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts, and celebrate your successes.
          </p>
        </div>
        <Link href="#" className="flex justify-center mt-8">
          <Button>Get for free</Button>
        </Link>
      </MaxWidthWrapper>
    </div>
  );
};
export default Hero;
