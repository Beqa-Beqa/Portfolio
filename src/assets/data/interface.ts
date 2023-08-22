export interface ProjectInt {
  image: string;
  name: string;
  madeWith: string[];
  links: {
    live: string;
    githubRepo: string;
  }
  description: string;
}