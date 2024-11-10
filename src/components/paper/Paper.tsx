import { Paper } from "@/types";
import Image from "next/image";
import Link from "next/link";

const PaperDetails: React.FC<Paper> = ({
  link,
  heading,
  content,
  image,
  imageCaption,
  pdfPath,
}) => {
  return (
    <div className="flex md:flex-row flex-col md:justify-between md:items-start text-justify lg:gap-10 gap-4 justify-center items-center">
      <div className=" flex flex-col gap-4">
        <div className="flex flex-col gap-4 max-w-[400px]">
          <a className="text-2xl font-semibold underline" href={link}>
            {heading}
          </a>
          <p className="text-gray-300">{content}</p>
        </div>
        <Link
          href={`/pdfs/${pdfPath}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="flex flex-row border-[1px] items-center rounded-full px-4 py-1">
            View
          </button>
        </Link>
      </div>

      <div className="flex flex-col gap-4 items-center justify-center text-center">
        <Image
          className="rounded-lg"
          src={image}
          alt="Next.js logo"
          width={200}
          height={200}
          priority
        />
        <p className="max-w-[200px]">{imageCaption}</p>
      </div>
    </div>
  );
};

export default PaperDetails;
