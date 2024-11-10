import { BIO } from "@/utils/consts";

const Bio = () => {
  return (
    <div className="md:max-w-[500px] max-w-[300px] gap-4 flex flex-col">
      <p className="font-mono text-5xl font-semibold">{BIO.name}</p>
      <div>
        <h1 className="text-lg font-medium text-gray-400 mb-4">About myself</h1>
        <h2 className="text text-justify">{BIO.intro}</h2>
      </div>
    </div>
  );
};

export default Bio;
