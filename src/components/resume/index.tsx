"use client";

import { CopyIcon, ExternalLinkIcon } from "@radix-ui/react-icons";
import { EducationData, PORType, ProjectType } from "@/types";
import Link from "next/link";
import { useState } from "react";

export const Heading: React.FC<{ text: string }> = ({ text }) => {
  const headingId = text.toLowerCase().replace(" ", "_");

  const copy = () => {
    window.navigator.clipboard.writeText(`${window.location}#${headingId}`);
  };

  return (
    <div className="md:text-4xl text-2xl cursor-pointer" id={headingId}>
      <h2 className=" group flex flex-row gap-4 items-baseline" onClick={copy}>
        {text}
        <CopyIcon
          width={25}
          height={25}
          className="group-hover:visible invisible"
        />
      </h2>
      <Separator />
    </div>
  );
};

export const Content: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <div className="md:pl-8 flex flex-col">{children}</div>;
};

export const Separator: React.FC = () => {
  return <div className="border-b w-full md:my-8 my-6"></div>;
};

const MainText: React.FC<{ text: string }> = ({ text }) => {
  return (
    <h3 className="font-sans md:text-4xl text-2xl font-semibold text-gray-300 leading-8 ">
      {text}
    </h3>
  );
};

const SubText: React.FC<{ text: string }> = ({ text }) => {
  return (
    <h4 className="font-extralight md:text-2xl text-xl text-gray-300 my-2 italic">
      {text}
    </h4>
  );
};

const Duration: React.FC<{ endYear: number }> = ({ endYear }) => {
  return (
    <div className="font-semibold md:text-2xl text-lg italic">
      <p>{endYear}</p>
    </div>
  );
};

export const Detail: React.FC<{ text?: string; maxLength?: number }> = ({
  text,
  maxLength = 100,
}) => {
  const [expanded, setIsExpanded] = useState<boolean>(false);
  if (!text) {
    return null;
  }

  const shouldTruncate = text?.length > maxLength;

  const truncatedText = text.slice(0, maxLength) + "...";

  return (
    <p className="md:max-w-[50vw] max-w-[70vw] text-gray-50 md:text-lg">
      {shouldTruncate && !expanded ? truncatedText : text}&nbsp;
      {shouldTruncate ? (
        <span
          className="font-bold cursor-pointer text-sky-300 underline underline-offset-2"
          onClick={() => setIsExpanded(!expanded)}
        >
          Read&nbsp;{expanded ? "Less" : "More"}
        </span>
      ) : null}
    </p>
  );
};

const ExternalLink: React.FC<{ href: string }> = ({ href }) => {
  return (
    <div>
      <Link href={href} target="_blank" rel="noreferrer noopener">
        <p className="text-xs md:text-base flex flex-row gap-1 items-center text-blue-400">
          Ref. {<ExternalLinkIcon />}
        </p>
      </Link>
    </div>
  );
};

const Dot = () => {
  return <div className="md:h-4 md:w-4 w-2 h-2 rounded-full bg-white"></div>;
};

export const TimeLine: React.FC<{
  endYear: number;
  children: React.ReactNode;
}> = ({ endYear, children }) => {
  return (
    <div className="flex flex-row items-stretch">
      <div className="border-r-2 mx-6 flex flex-col items-start justify-start">
        <div className="flex flex-row items-center md:translate-x-2 translate-x-1 gap-6">
          <Duration endYear={endYear} />
          <Dot />
        </div>
      </div>
      <div className="pb-6">{children}</div>
    </div>
  );
};

export const Education: React.FC<EducationData> = ({
  endYear,
  degree,
  institute,
  detail,
}) => {
  return (
    <TimeLine endYear={endYear}>
      <MainText text={degree} />
      <SubText text={institute} />
      <Detail text={detail} />
    </TimeLine>
  );
};

export const PORDetail: React.FC<PORType> = ({ endYear, title, work }) => {
  return (
    <TimeLine endYear={endYear}>
      <MainText text={title} />
      <Detail text={work} />
    </TimeLine>
  );
};

export const Project: React.FC<ProjectType> = ({
  title,
  endYear,
  detail,
  links,
}) => {
  return (
    <TimeLine endYear={endYear}>
      <MainText text={title} />
      <Detail text={detail} />
      <div className="flex flex-row gap-2">
        {links?.map((link) => (
          <ExternalLink key={link} href={link} />
        ))}
      </div>
    </TimeLine>
  );
};

export const Section: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return <section>{children}</section>;
};
