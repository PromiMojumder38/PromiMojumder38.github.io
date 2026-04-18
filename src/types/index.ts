export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  image?: string;
}

export interface Research {
  title: string;
  status: string;
  description: string[];
  image?: string;
  secondaryImage?: string;
}

export interface Project {
  name: string;
  type: string;
  date: string;
  description: string[];
  tech: string[];
  image?: string;
  github?: string;
  youtube?: string;
  live?: string;
}

export interface ExtraCurricular {
  title: string;
  date?: string;
  image?: string;
}

export interface Education {
  institution: string;
  degree: string;
  result: string;
  details?: string;
  image?: string;
}

export interface Achievement {
  title: string;
  details?: string;
  image?: string;
  link?: string;
}

export interface Skill {
  name: string;
  category: string;
}
