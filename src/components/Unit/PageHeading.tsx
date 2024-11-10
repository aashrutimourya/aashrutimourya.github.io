interface PageHeadingProps {
  text: string;
}

const PageHeading: React.FC<PageHeadingProps> = ({ text }) => {
  return (
    <h1 className="md:text-6xl text-3xl font-semibold font-mono md:py-16 md:mb-0 mb-10 flex flex-row md:justify-start justify-center">
      {text}
    </h1>
  );
};

export default PageHeading;
