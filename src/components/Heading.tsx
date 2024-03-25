export default function Heading({
  className,
  title,
}: {
  className: string;
  title: string;
}) {
  return (
    <div className={`${className} max-w-[50rem] mx-auto mb-12 lg:mb-20`}>
      {title && <h2 className="h2 text-center">{title}</h2>}
    </div>
  );
}
