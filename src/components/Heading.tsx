import Tagline from "./Tagline";

export default function Heading({
  className,
  title,
  text,
  tag,
}: {
  className?: string;
  title?: string;
  text?: string;
  tag?: string;
}) {
  return (
    <div
      className={`${className} max-w-[50rem] mx-auto mb-12 lg:mb-20 md:text-center`}
    >
      {title && <h2 className="h2 text-center">{title}</h2>}
      {text && <p className="body-2 mt-5 text-n-4 text-center">{text}</p>}
      {tag && <Tagline className="mb-4 md:justify-center">{tag}</Tagline>}
    </div>
  );
}
