// This component renders the Research page, showcasing Dr. Tianhua Chen's research areas and projects.
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { researchProjects } from "../constants";

function Research() {
  const navigate = useNavigate();
  const location = useLocation();

  if (location.pathname !== "/research") return null;

  return (
    <div className="py-8">
      <h1 className="text-4xl font-bold text-text mb-2">
        Ongoing & Past Research
      </h1>
      <p className="text-text mb-8">
        Selected academic and collaborative research projects by Dr. Tianhua
        Chen, University of Huddersfield.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {researchProjects.map((project) => (
          <div
            key={project.id}
            onClick={() =>
              navigate(`/research/${project.slug}`, { state: project })
            }
            className="group cursor-pointer p-6 border border-blue-200 bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-gray-700 shadow-md rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <h2 className="text-xl font-semibold text-[#003976] group-hover:text-blue-800 dark:text-blue-300 dark:group-hover:text-blue-100 transition-colors duration-300">
              {project.title}
            </h2>
            {project.year && (
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                {project.journal} ({project.year})
              </p>
            )}
            <p className="mt-3 text-sm text-gray-800 dark:text-gray-200">
              {project.summary}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Research;
