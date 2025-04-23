// This component renders the Publications page, listing selected publications with summaries and links.
import React from "react";
import { useLocation } from "react-router-dom";

import { publications } from "../constants";

function Publications() {
  const location = useLocation();

  if (location.pathname !== "/publications") return null;

  return (
    <div className="py-8">
      <h1 className="text-4xl font-bold text-text mb-2">
        Selected Academic Publications
      </h1>
      <p className="text-text text-base mb-8">
        A curated selection of peer-reviewed articles, conference papers, and
        contributions by Dr. Tianhua Chen.
      </p>

      <div className="flex flex-col gap-3">
        {publications.map((pub) => (
          <a
            key={pub.id}
            className="group cursor-pointer p-6 border border-blue-200 bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-gray-700 shadow-md rounded-lg transform transition-all duration-300 hover:scale-102 hover:shadow-xl"
            href={pub.link}
            target="_blank"
          >
            <h2 className="text-xl font-semibold text-text group-hover:text-blue-800 dark:text-blue-300 dark:group-hover:text-blue-100 transition-colors duration-300">
              {pub.title}
            </h2>
            <p className="text-sm text-text dark:text-gray-300 mt-1">
              {pub.journal} ({pub.year})
            </p>
            <p className="mt-3 text-sm text-text dark:text-gray-200">
              {pub.summary}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Publications;
