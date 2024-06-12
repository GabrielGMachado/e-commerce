import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
  ImgSrc: string
  Dark?: boolean
}

const Phone = ({ImgSrc, className, Dark = false, ...props}: PhoneProps) => {
  return(
    <div className={cn("relative pointer-events-none z-50 overflow-hidden", className)}
    {...props}>
      <img src={Dark 
        ? "/phone-template-dark-edges.png" 
        : "/phone-template-white-edges.png"
      } 
        className="pointer-events-none z-50 select-none"
        alt="Phone image"
        />

        <div className="absolute -z-10 inset-0">
          <img src={ImgSrc} 
          alt="Overlaying phone image" 
          className="object-cover"/>
        </div>
      </div>
  );
}

export default Phone