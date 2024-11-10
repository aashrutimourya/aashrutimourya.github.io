import Paper from "@/components/paper/Paper";
import PageHeading from "@/components/Unit/PageHeading";
import { PAPERS } from "@/utils/consts";

const Research = () => {
  return (
    <div className="md:w-4/5 w-full  ">
      <PageHeading text="Research" />
      <div className="flex flex-col gap-16 md:px-8 items-center">
        {PAPERS.map((paper) => (
          <div
            key={paper.id}
            className={`${paper.id % 2 === 0 ? "lg:w-4/5 w-full" : "w-full"}`}
          >
            <Paper {...paper} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Research;
