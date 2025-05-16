import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ButtonProps {
  className?: string;
  children: ReactNode;
}

const Button = ({ className, children }: ButtonProps) => {
  return (
    <div
      className={cn(
        "bg-white py-2.5 px-4 text-black rounded-[10px] cursor-pointer",
        className
      )}
    >
      {children}
    </div>
  );
};
export default Button;
