import { FaqItems } from "@/lib/constant";
import MaxWidthWrapper from "../shared/MaxWidthWrapper";
import AccordionCard from "../cards/AccordionCard";

const Faqs = () => {
  return (
    <section className="bg-black text-white bg-gradient-to-b from-[#5D2CA8] to-black py-[72px] sm:py-24">
      <MaxWidthWrapper>
        <h2 className="text-center text-5xl lg:text-6xl font-bold tracking-tighter sm:text-6xl sm:max-w-[648px] mx-auto">
          Frequently asked questions
        </h2>
        <div className="mt-[48px] max-w-[648px] mx-auto">
          {FaqItems.map((item) => (
            <div key={item.question}>
              <AccordionCard question={item.question} answer={item.answer} />
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};
export default Faqs;
