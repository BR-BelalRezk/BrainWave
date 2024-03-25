import { ReactNode } from "react";
import brackets from "../../public/assets/svg/Brackets";

export default function Tagline({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) {
  return (
    <div className={`tagline flex items-center ${className || ""}`}>
      {brackets("left")}
      <div className="mx-3 text-n-3">{children}</div>
      {brackets("right")}
    </div>
  );
}
