export default function Heading({
  className,
  title,
  text,
}: {
  className?: string;
  title?: string;
  text?: string;
}) {
  return (
    <div className={`${className} max-w-[50rem] mx-auto mb-12 lg:mb-20`}>
      {title && <h2 className="h2 text-center">{title}</h2>}
      {text && <p className="body-2 mt-5 text-n-4 text-center">{text}</p>}
    </div>
  );
}
