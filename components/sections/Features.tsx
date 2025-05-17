import { FeaturesItems } from "@/lib/constant";
import FeatureCard from "../cards/FeatureCard";
import MaxWidthWrapper from "../shared/MaxWidthWrapper";

const Features = () => {
  return (
    <section className="py-[72px] bg-black text-white sm:py-24">
      <MaxWidthWrapper>
        <h2 className="text-center text-[32px] font-semibold leading-[60px] tracking-tighter sm:text-5xl">
          Everything you need
        </h2>
        <div className="max-w-xl mx-auto">
          <p className="text-center text-xl mt-[10px]">
            Enjoy customizable lists, team work tools, and smart tracking all in
            one place. Set tasks, get reminders, and see your progress simply
            and quickly.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-4 justify-center sm:grid-cols-2">
          {FeaturesItems.map((item, index) => (
            <FeatureCard
              title={item.title}
              description={item.description}
              key={index * 794}
            />
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};
export default Features;
