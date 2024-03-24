import { companyLogos } from "../constants";

export default function CompanyLogos({ className }: { className: string }) {
  return (
    <div className={`${className}`}>
      <h5 className="tagline mb-6 text-center text-n-1/50">
        HELPING PEOPLE CREATE BEAUTIFUL CONTENT AT
      </h5>
      <ul className="flex">
        {companyLogos.map((item, index) => (
          <li
            className="flex items-center justify-center flex-1 h-[8.5rem]"
            key={index}
          >
            <img src={item} alt="company logo" width={134} height={28} />
          </li>
        ))}
      </ul>
    </div>
  );
}
