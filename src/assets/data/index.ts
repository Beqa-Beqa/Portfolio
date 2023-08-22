import * as img from "../images";
import { ProjectInt } from "./interface";

const ProjectData: ProjectInt[] = [
  {
    image: img.Audiophile,
    name: "Audiophile",
    madeWith: ["React", "TS", "React-Router", "CSS"],
    links: {
      live: "https://beqa-beqa.github.io/web-todo-5-test/",
      githubRepo: "https://github.com/Beqa-Beqa/web-todo-5-test/tree/master"
    },
    description: "Web application that offers an user interface for browsing and purchasing various products. The application has multiple sections, including home page, product categories such as earphones, headphones and speakers."
  },
  {
    image: img.DevFinder,
    name: "DevFinder",
    madeWith: ["React", "TS", "Axios", "CSS"],
    links: {
      live: "https://beqa-beqa.github.io/web-todo-4/",
      githubRepo: "https://github.com/Beqa-Beqa/web-todo-4/tree/master"
    },
    description: "Web application that shows an user interface with its functionality to search for github users with optional light or dark mode (github uses information is retrieved from github API) (See console log for usernames)"
  },
  {
    image: img.RespFront,
    name: "Responsive front",
    madeWith: ["React", "JS", "CSS"],
    links: {
      live: "https://beqa-beqa.github.io/web-todo-3/",
      githubRepo: "https://github.com/Beqa-Beqa/web-todo-3/tree/master"
    },
    description: "Responsive front"
  },
  {
    image: img.Splitter,
    name: "Bill Splitter",
    madeWith: ["React", "JS", "CSS"],
    links: {
      live: "https://beqa-beqa.github.io/web-todo-2/",
      githubRepo: "https://github.com/Beqa-Beqa/web-todo-2/tree/master"
    },
    description: "Web app called 'Splitter' that calculates total bill to pay for each person. They can either add tips or not"
  }
];

export default ProjectData;