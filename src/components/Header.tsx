import { useLocation } from "react-router-dom";
import { brainwave } from "../../public/assets";
import { navigation } from "../app/constants";
import Button from "./Button";
import { useState } from "react";
import { HamburgerMenu } from "../design/Header";
import MenuSvg from "../../public/assets/svg/MenuSvg";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

export default function Header() {
  const pathname = useLocation().hash;
  const [toggle, setToggle] = useState(false);
  const toggleMenu = () => {
    if (toggle) {
      setToggle(false);
      enablePageScroll();
    } else {
      setToggle(true);
      disablePageScroll();
    }
  };
  const handleClick = () => {
    if (!toggle) return;
    enablePageScroll();
    setToggle(true);
  };
  return (
    <header
      className={`fixed top-0 left-0 w-full z-50  border-b border-n-6 ${
        toggle ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a href="#hero" className="block w-[12rem] xl:mr-8">
          <img src={brainwave} alt="brainwave logo" width={190} height={40} />
        </a>
        <nav
          className={` ${
            toggle ? "flex" : "hidden"
          } hidden fixed top-[5rem] right-0 bottom-0 left-0 bg-n-8  lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <ul className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <li
                onClick={handleClick}
                key={item.id}
                className={`leading-5 lg:hover:text-n-1 xl:px-12 block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 p-5 md:py-10 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                  item.onlyMobile ? "lg:hidden" : ""
                } ${
                  item.url === pathname ? "z-2 lg:text-n-1" : "lg:text-n-1/50"
                }`}
              >
                <a href={item.url}>{item.title}</a>
              </li>
            ))}
          </ul>
          <HamburgerMenu />
        </nav>
        <a
          href="#signup"
          className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block"
        >
          New account
        </a>
        <Button className="hidden lg:flex" href="#login">
          Sign in
        </Button>
        <Button className="ml-auto lg:hidden" px="px-3" onClick={toggleMenu}>
          <MenuSvg openNavigation={toggle} />
        </Button>
      </div>
    </header>
  );
}
