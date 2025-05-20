import Image from "next/image";
import Button from "../shared/Button";
import MaxWidthWrapper from "../shared/MaxWidthWrapper";
import CtaImage from "@/public/cta1image.png";
import CtaGear from "@/public/Gear.png";

const CallToAction = () => {
  return (
    <section className="py-[72px] bg-black text-white text-center sm:py-24 overflow-clip">
      <MaxWidthWrapper className="relative">
        <h2 className="text-3xl font-semibold tracking-tighter sm:text-6xl">
          Get instant access
        </h2>
        <Image
          src={CtaImage}
          alt="cta image"
          className="absolute -top-[50px] -left-[140px] hidden sm:block lg:left-[100px]"
        />
        <Image
          src={CtaGear}
          alt="cta image"
          className="absolute top-10 -right-[80px] hidden sm:block lg:right-[150px] lg:top-10"
        />
        <p className="text-[#bbb] max-w-[330px] mx-auto mt-[20px] tracking-tight lg:max-w-lg">
          Celebrate the joy of accomplishment with an app designed to track your
          progress and motivate your efforts.
        </p>
        <form className="mt-10 flex flex-col gap-2.5 sm:flex-row sm:justify-center">
          <input
            type="text"
            placeholder="name@email.com"
            className="h-[48px] bg-white/20 rounded-lg px-5 font-medium placeholder:text-white/50 lg:px-25"
          />
          <Button className="w-full h-12 sm:w-fit sm:px-5">Get access</Button>
        </form>
      </MaxWidthWrapper>
    </section>
  );
};
export default CallToAction;
