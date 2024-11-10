import {
  Education,
  Heading,
  PORDetail,
  Project,
  Content,
  Section,
} from "@/components/resume";
import PageHeading from "@/components/Unit/PageHeading";
import { EDUCATION_DATA, POR_DATA, PROJECT_DATA } from "@/utils/consts";

const Resume = () => {
  return (
    <div className="md:w-4/5 w-full">
      <PageHeading text="Resume" />
      <div className="flex flex-col md:gap-12 gap-8">
        <Section>
          <Heading text={"Education"} />
          <Content>
            {EDUCATION_DATA.map((education) => (
              <Education {...education} key={education.institute} />
            ))}
          </Content>
        </Section>
        <Section>
          <Heading text="Projects" />
          <Content>
            {PROJECT_DATA.map((project, index) => (
              <Project {...project} key={`${project.title}_${index}`} />
            ))}
          </Content>
        </Section>
        <Section>
          <Heading text="PORs" />
          <Content>
            {POR_DATA.map((por, key) => (
              <PORDetail {...por} key={`${por.title}_${key}`} />
            ))}
          </Content>
        </Section>
      </div>
    </div>
  );
};
export default Resume;
