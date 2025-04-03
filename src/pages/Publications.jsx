// src/pages/Publications.jsx
// Lists selected publications with summaries and links to full articles.

import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const publications = [
  {
    id: 1,
    title: "AI4SW: Leveraging Artificial Intelligence to Support Student Wellbeing",
    journal: "Journal of Educational Technology",
    year: 2025,
    summary: "This study introduces the AI4SW project, which utilizes AI technologies to monitor and enhance student mental health through personalized interventions.",
    slug: "ai4sw-student-wellbeing",
    graph: "ai4sw-student-wellbeing",
    link: 'https://ai4sw.org/',
  },
  {
    id: 2,
    title: 'Can heart rate sequences from wearable devices predict day-long mental states in higher education students?',
    journal: 'Brain Informatics',
    year: 2024,
    summary: 'Explores the use of Apple Watch heart rate data to predict stress levels in university students.',
    slug: 'heart-rate-mental-states',
    link: 'https://braininformatics.springeropen.com/articles/10.1186/s40708-024-00243-w',
    graph: 'heart_rate_variation'
  },
  {
    id: 3,
    title: 'A dominant set-informed interpretable fuzzy system for automated diagnosis of dementia',
    journal: 'Frontiers in Neuroscience',
    year: 2022,
    summary: 'Proposes a novel fuzzy inference system using dominant sets for dementia diagnosis.',
    slug: 'fuzzy-system-dementia',
    link: 'https://www.frontiersin.org/articles/10.3389/fnins.2022.867664/full',
    graph: 'dominant_sets_graph'
  },
  {
    id: 4,
    title: 'Diagnosing attention-deficit hyperactivity disorder (ADHD) using artificial intelligence: a clinical study in the UK',
    journal: 'Frontiers in Psychiatry',
    year: 2023,
    summary: 'Develops a hybrid AI algorithm to assist in adult ADHD diagnosis within the UK NHS.',
    slug: 'adhd-ai-diagnosis',
    link: 'https://www.frontiersin.org/articles/10.3389/fpsyt.2023.1164433/full',
    graph: 'adhd_diagnostic_framework'
  },
  {
    id: 5,
    title: 'The mental health of university students during the COVID-19 pandemic: An online survey in the UK',
    journal: 'PLOS ONE',
    year: 2022,
    summary: 'Investigates the mental health status of university students during the early stages of the COVID-19 pandemic.',
    slug: 'covid19-student-mental-health',
    link: 'https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0262562',
    graph: 'student_mental_health_stats'
  },
];

function Publications() {
  const navigate = useNavigate();
  const location = useLocation();

  if (location.pathname !== '/publications') return null;

  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold mb-8 text-[#003976]">Selected Publications</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {publications.map(pub => (
          <div
            key={pub.id}
            onClick={() => navigate(`/publications/${pub.slug}`, { state: pub })}
            className="group cursor-pointer p-6 border border-blue-200 bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-gray-700 shadow-md rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <h2 className="text-xl font-semibold text-[#003976] group-hover:text-blue-800 dark:text-blue-300 dark:group-hover:text-blue-100 transition-colors duration-300">
              {pub.title}
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
              {pub.journal} ({pub.year})
            </p>
            <p className="mt-3 text-sm text-gray-800 dark:text-gray-200">
              {pub.summary}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Publications;