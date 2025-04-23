// This component renders the Teaching page, detailing courses and modules led or tutored by Dr. Tianhua Chen.
// src/pages/Teaching.jsx
// Provides details about Dr. Tianhua Chen's teaching contributions, including courses and modules.

import React from 'react';

function Teaching() {
  return (
    <div className="py-8 px-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-text">Teaching</h1>

      {/* Course Leadership Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-text">Course Leadership</h2>
        <div className="space-y-4">
          <div className="p-4 border-l-4 border-blue-500 bg-blue-50 rounded">
            <h3 className="text-xl font-medium text-black">MSc Artificial Intelligence</h3>
            <p className="text-gray-700">
              As the Course Leader, Dr. Chen oversees the curriculum, ensuring it aligns with current industry standards and advancements in AI.
            </p>
          </div>
          <div className="p-4 border-l-4 border-blue-500 bg-blue-50 rounded">
            <h3 className="text-xl font-medium text-black">MSc Applied Artificial Intelligence</h3>
            <p className="text-gray-700">
              Dr. Chen leads this program, focusing on the practical applications of AI across various sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Module Leadership Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-text">Module Leadership</h2>
        <div className="space-y-4">
          <div className="p-4 border-l-4 border-green-500 bg-green-50 rounded">
            <h3 className="text-xl font-medium text-black">Machine Learning (CMS3503)</h3>
            <p className="text-gray-700">
              This module delves into algorithms and statistical models that enable computers to perform tasks without explicit instructions.
            </p>
          </div>
          <div className="p-4 border-l-4 border-green-500 bg-green-50 rounded">
            <h3 className="text-xl font-medium text-black">Case Study in Data Analytics and Artificial Intelligence (CMI3506)</h3>
            <p className="text-gray-700">
              A practical module where students analyze real-world scenarios, applying data analytics and AI techniques to derive insights.
            </p>
          </div>
        </div>
      </section>

      {/* Module Tutoring Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-text">Module Tutoring</h2>
        <div className="p-4 border-l-4 border-yellow-500 bg-yellow-50 rounded">
          <h3 className="text-xl font-medium text-black">Artificial Intelligence (CHA2555)</h3>
          <p className="text-gray-700">
            Dr. Chen contributes to this undergraduate module, introducing students to foundational AI concepts and methodologies.
          </p>
        </div>
      </section>

      {/* Supervision Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-text">Supervision</h2>
        <p className="text-text mb-4">
          Dr. Chen is open to supervising PhD candidates interested in areas such as:
        </p>
        <ul className="list-disc list-inside text-text space-y-2">
          <li>Probabilistic Machine Learning</li>
          <li>Sequence Modelling</li>
          <li>Affective Computing</li>
          <li>AI Applications in Wellbeing and Mental Health</li>
        </ul>
        <p className="text-text mt-4">
          Prospective students are encouraged to reach out via email to discuss potential research opportunities.
        </p>
      </section>

      {/* Contact Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-text">Contact</h2>
        <p className="text-text">
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
