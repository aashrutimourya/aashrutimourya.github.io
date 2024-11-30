import { Paper, EducationData, PORType, ProjectType } from "@/types";
import ProfilePic from "@/images/dummy.png";


export const BIO = {
  name: "Aashruti",
  email: "Lorem@ipsum.com",
  intro:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu",
};

export const LINKS = {
  github: "https://github.com",
  linkedIn: "https://linkedin.com",
};

export const PAPERS: Array<Paper> = [
  {
    id: 1,
    link: "https://google.com",
    heading: "This is my first paper",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu",
    image: ProfilePic.src,
    imageCaption: "This is a dummy caption",
    pdfPath: "paper_1.pdf",
  },
  {
    id: 2,
    link: "https://google.com",
    heading: "This is my second paper",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu",
    image: ProfilePic.src,
    imageCaption: "This is a dummy caption which is slightly longer",
    pdfPath: "paper_1.pdf",
  },
  {
    id: 3,
    link: "https://google.com",
    heading: "This is my third paper",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu",
    image: ProfilePic.src,
    imageCaption: "This is a dummy caption which is slightly longer",
    pdfPath: "paper_1.pdf",
  },
];

export const EDUCATION_DATA: Array<EducationData> = [
  {
    startYear: 2020,
    endYear: 2025,
    degree: "Ph.D. Geophysics",
    institute: "IISC, Bangalore",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    startYear: 2017,
    endYear: 2019,
    degree: "M.Sc. Applied Geophysics",
    institute: "IIT, Bombay",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    startYear: 2013,
    endYear: 2016,
    degree: "B.Sc. Physics(Hons)",
    institute: "Banaras Hindu University",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export const POR_DATA: Array<PORType> = [
  {
    startYear: 2017,
    endYear: 2019,
    title: "WEB Secy Hostel 10",
    work: "Fix cribs about internet ",
  },
  {
    startYear: 2017,
    endYear: 2019,
    title: "Lorem ipsum dolor sit amet,",
    work: "Lorem ipsum dolor sit amet,",
  },
  {
    startYear: 2017,
    endYear: 2019,
    title: "Lorem ipsum dolor sit amet,",
    work: "Lorem ipsum dolor sit amet,",
  },
];

export const PROJECT_DATA: Array<ProjectType> = [
  {
    startYear: 2017,
    endYear: 2018,
    title: "Lorem ipsum dolor,",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    links: ["google.com", "github.com"],
  },
  {
    startYear: 2017,
    endYear: 2018,
    title: "Lorem ipsum dolor,",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];
