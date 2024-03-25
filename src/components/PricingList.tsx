import { check } from "../../public/assets";
import { pricing } from "../constants";
import Button from "./Button";

export default function PricingList() {
  return (
    <div className="flex gap-[1rem] max-lg:flex-wrap">
      {pricing.map((item) => (
        <div
          key={item.id}
          className="w-[19rem] max-lg:w-full h-full px-6 odd:my-5 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3 [&>h4]:first:text-color-2 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8"
        >
          <h4 className="h4 mb-4">{item.title}</h4>
          <p className="body-2 min-h=[4rem] mb-3 text-n-1/50">
            {item.description}
          </p>
          <div className="flex items-center h-[5.5rem] mb-6">
            {item.price && (
              <>
                <div className="h3">$</div>{" "}
                <div className="text-[5.5rem] leading-none font-bold">
                  {item.price}
                </div>
              </>
            )}
          </div>
          <Button className="w-full mb-6" white={!!item.price}>
            {item.price ? "Get started" : "Contact us"}
          </Button>
          <ul>
            {item.features.map((item, index) => (
              <li
                key={index}
                className="flex items-start py-5 border-t border-n-6"
              >
                <img src={check} alt="check" width={25} height={25} />
                <p className="body-2 ml-5">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
