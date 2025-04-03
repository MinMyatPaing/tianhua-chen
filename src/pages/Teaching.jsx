// src/pages/Teaching.jsx
// Provides details about Dr. Tianhua Chen's teaching contributions, including courses and modules.

import React from 'react';

function Teaching() {
  return (
    <div className="py-8 px-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-[#003976]">Teaching</h1>

      {/* Course Leadership Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-[#003976]">Course Leadership</h2>
        <div className="space-y-4">
          <div className="p-4 border-l-4 border-blue-500 bg-blue-50 rounded">
            <h3 className="text-xl font-medium">MSc Artificial Intelligence</h3>
            <p className="text-gray-700">
              As the Course Leader, Dr. Chen oversees the curriculum, ensuring it aligns with current industry standards and advancements in AI.
            </p>
          </div>
          <div className="p-4 border-l-4 border-blue-500 bg-blue-50 rounded">
            <h3 className="text-xl font-medium">MSc Applied Artificial Intelligence</h3>
            <p className="text-gray-700">
              Dr. Chen leads this program, focusing on the practical applications of AI across various sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Module Leadership Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-[#003976]">Module Leadership</h2>
        <div className="space-y-4">
          <div className="p-4 border-l-4 border-green-500 bg-green-50 rounded">
            <h3 className="text-xl font-medium">Machine Learning (CMS3503)</h3>
            <p className="text-gray-700">
              This module delves into algorithms and statistical models that enable computers to perform tasks without explicit instructions.
            </p>
          </div>
          <div className="p-4 border-l-4 border-green-500 bg-green-50 rounded">
            <h3 className="text-xl font-medium">Case Study in Data Analytics and Artificial Intelligence (CMI3506)</h3>
            <p className="text-gray-700">
              A practical module where students analyze real-world scenarios, applying data analytics and AI techniques to derive insights.
            </p>
          </div>
        </div>
      </section>

      {/* Module Tutoring Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-[#003976]">Module Tutoring</h2>
        <div className="p-4 border-l-4 border-yellow-500 bg-yellow-50 rounded">
          <h3 className="text-xl font-medium">Artificial Intelligence (CHA2555)</h3>
          <p className="text-gray-700">
            Dr. Chen contributes to this undergraduate module, introducing students to foundational AI concepts and methodologies.
          </p>
        </div>
      </section>

      {/* Supervision Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-[#003976]">Supervision</h2>
        <p className="text-gray-700 mb-4">
          Dr. Chen is open to supervising PhD candidates interested in areas such as:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li className="text-gray-700">Probabilistic Machine Learning</li>
          <li className="text-gray-700">Sequence Modelling</li>
          <li className="text-gray-700">Affective Computing</li>
          <li className="text-gray-700">AI Applications in Wellbeing and Mental Health</li>
        </ul>
        <p className="text-gray-700 mt-4">
          Prospective students are encouraged to reach out via email to discuss potential research opportunities.
        </p>
      </section>

      {/* Contact Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-[#003976]">Contact</h2>
        <p className="text-gray-700">
          For more information on courses or supervision opportunities, please contact Dr. Chen at{' '}
          <a href="mailto:T.Chen@hud.ac.uk" className="text-blue-600 hover:underline">
            T.Chen@hud.ac.uk
          </a>
          .
        </p>
      </section>
    </div>
  );
}

export default Teaching;
