import { ReactNode } from "react";
import ButtonSvg from "../../public/assets/svg/ButtonSvg";

type Props = {
  white?: boolean;
  px?: string;
  onClick?: () => void;
  className?: string;
  href?: string;
  children: ReactNode;
};

export default function Button({
  className,
  href,
  children,
  onClick,
  px,
  white,
}: Props) {
  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${
    px || "px-7"
  } ${white ? "text-n-8" : "text-n-1"}
    ${className || ""}`;
  const spanClasses = "relative z-10";
  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white || false)}
    </button>
  );
  const renderLink = () => (
    <a href={href} className={classes}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white || false)}
    </a>
  );
  return href ? renderLink() : renderButton();
}
