export interface Paper {
  id: number;
  link: string;
  heading: string;
  content: string;
  image: string;
  imageCaption: string;
  pdfPath: string;
}

export interface Activity {
  startYear: number;
  endYear: number;
}

export interface EducationData extends Activity {
  degree: string;
  institute: string;
  detail?: string;
}

export interface PORType extends Activity {
  title: string;
  work: string;
}

export interface ProjectType extends Activity {
  title: string;
  detail: string;
  links?: Array<string>;
}
