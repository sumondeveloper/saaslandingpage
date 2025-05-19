import Image from "next/image";
import MaxWidthWrapper from "../shared/MaxWidthWrapper";
import ProductBanner from "@/public/productshowcasebanner.webp";
const ProductShowCase = () => {
  return (
    <section className="bg-black bg-gradient-to-b from-black to-[#5D2CA8] py-[72px] sm:py-24">
      <MaxWidthWrapper>
        <h2 className="text-center text-[32px] leading-[60px] tracking-tigher font-semibold text-white sm:text-[54px] sm:font-bold sm:leading-[60px] sm:tracking-[-3.24px]">
          Intuitive interface
        </h2>
        <div className="max-w-xl mx-auto">
          <p className="text-center text-xl tracking-tighter text-white/60">
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts, and celebrate your successes,
            one task at a time.
          </p>
        </div>
        <div className="flex justify-center">
          <Image
            src={ProductBanner}
            alt=""
            className="mt-14 sm:h-[437px] sm:w-[704px] lg:w-[1092px] lg:h-[678px] object-cover"
          />
        </div>
      </MaxWidthWrapper>
    </section>
  );
};
export default ProductShowCase;
