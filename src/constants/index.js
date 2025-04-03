import flyer1 from "../assets/Flyer Example 1.png";
import flyer2 from "../assets/Flyer Example 2.png";
import report1 from "../assets/Report 1.png";
import report2 from "../assets/Report 2.png";
import report3 from "../assets/Report 3.png";

export const images = {
  flyer1,
  flyer2,
  report1,
  report2,
  report3,
};

export const publications = [
  {
    id: 1,
    title:
      "Can heart rate sequences from wearable devices predict day-long mental states in higher education students?",
    journal: "Brain Informatics",
    year: 2024,
    summary:
      "Explores the use of Apple Watch heart rate data to predict stress levels in university students.",
    slug: "heart-rate-mental-states",
    link: "https://braininformatics.springeropen.com/articles/10.1186/s40708-024-00243-w",
  },
  {
    id: 2,
    title:
      "A dominant set-informed interpretable fuzzy system for automated diagnosis of dementia",
    journal: "Frontiers in Neuroscience",
    year: 2022,
    summary:
      "Proposes a novel fuzzy inference system using dominant sets for dementia diagnosis.",
    slug: "fuzzy-system-dementia",
    link: "https://www.frontiersin.org/articles/10.3389/fnins.2022.867664/full",
  },
  {
    id: 3,
    title:
      "Diagnosing attention-deficit hyperactivity disorder (ADHD) using artificial intelligence: a clinical study in the UK",
    journal: "Frontiers in Psychiatry",
    year: 2023,
    summary:
      "Develops a hybrid AI algorithm to assist in adult ADHD diagnosis within the UK NHS.",
    slug: "adhd-ai-diagnosis",
    link: "https://www.frontiersin.org/articles/10.3389/fpsyt.2023.1164433/full",
  },
  {
    id: 4,
    title:
      "The mental health of university students during the COVID-19 pandemic: An online survey in the UK",
    journal: "PLOS ONE",
    year: 2022,
    summary:
      "Investigates the mental health status of university students during the early stages of the COVID-19 pandemic.",
    slug: "covid19-student-mental-health",
    link: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0262562",
  },
];

export const researchProjects = [
  {
    id: 1,
    title:
      "AI4SW: Leveraging Artificial Intelligence to Support Student Wellbeing",
    summary:
      "This study introduces the AI4SW project, which utilizes AI technologies to monitor and enhance student mental health through personalized interventions.",
    slug: "ai4sw-student-wellbeing",
    graph: "ai4sw-student-wellbeing",
    link: "https://ai4sw.org/",
  },
];
