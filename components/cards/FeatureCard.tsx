import FeatureIcon from "@/public/icons/featureicons.svg";
import Image from "next/image";
interface FeatureCardProps {
  title: string;
  description: string;
}
const FeatureCard = ({ title, description }: FeatureCardProps) => {
  return (
    <div className="border rounded-2xl border-white/20 p-10 h-[300px]">
      {/* image */}
      <div>
        <div className="flex justify-center">
          <div className="bg-white flex items-center justify-center w-fit p-4 rounded-xl">
            <Image src={FeatureIcon} alt="feature logo" />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-center mt-6">{title}</h2>
        <p className="text-center text-lg mt-2 leading-[23px]">{description}</p>
      </div>
    </div>
  );
};
export default FeatureCard;
