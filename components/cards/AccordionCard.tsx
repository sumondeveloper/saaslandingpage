"use client";

import { useState } from "react";
import PlusIcon from "@/public/icons/Vector.svg";
import clsx from "clsx";
import Image from "next/image";

interface AccordionCardProps {
  question: string;
  answer: string;
}

const AccordionCard = ({ question, answer }: AccordionCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleFaqs = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div
        className="flex w-full items-center py-7 border-b border-white/30 cursor-pointer"
        onClick={toggleFaqs}
      >
        <span className="text-lg font-bold flex-1">{question}</span>
        {isOpen ? (
          <span className="text-5xl"> - </span>
        ) : (
          <Image src={PlusIcon} alt="plusicon" />
        )}
      </div>
      <div className={clsx("mt-4", { hidden: !isOpen, "": isOpen === true })}>
        {answer}
      </div>
    </>
  );
};
export default AccordionCard;
