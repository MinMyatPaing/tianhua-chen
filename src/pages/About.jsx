// src/pages/About.jsx
// Displays Dr. Tianhua Chen's biography, research interests, and professional affiliations.

import React from 'react';
import profileImg from '../assets/profile.webp';

function About() {
  return (
    <div className="py-8 px-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-[#003976]">About Dr. Tianhua Chen</h1>

      {/* Profile Image */}
      <div className="flex justify-center mb-6">
        <img
          src={profileImg} // Ensure the image is placed in the public directory or adjust the path accordingly
          alt="Dr. Tianhua Chen"
          className="w-48 h-48 rounded-full shadow-lg object-cover"
        />
      </div>

      {/* Biography Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-[#003976]">Biography</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Dr. Tianhua Chen received his Ph.D. in Computational Intelligence from Aberystwyth University, UK, in 2017. He then joined the University of Huddersfield as a Research Fellow and has since progressed to Lecturer, Senior Lecturer, and now Reader (equivalent to Associate Professor) in Artificial Intelligence. Dr. Chen leads the MSc Artificial Intelligence and MSc Applied Artificial Intelligence programs and heads the AI for Health and Wellbeing team within the Centre for Autonomous and Intelligent Systems.
        </p>
      </section>

      {/* Research Interests Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-[#003976]">Research Interests</h2>
        <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed">
          <li>Probabilistic Machine Learning</li>
          <li>Sequence Modelling</li>
          <li>Affective Computing</li>
          <li>Applications of AI in Wellbeing and Mental Health</li>
        </ul>
        <p className="text-lg text-gray-700 leading-relaxed mt-4">
          Dr. Chen has authored over 60 peer-reviewed papers in leading international journals and conferences. Notably, one of his lead-authored papers was selected as an IEEE Transactions on Fuzzy Systems Publication Spotlight Article by the IEEE Computational Intelligence Society.
        </p>
      </section>

      {/* Professional Affiliations Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-[#003976]">Professional Affiliations</h2>
        <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed">
          <li>Editorial Board Member of Elsevier and Springer journals</li>
          <li>Member of the Centre for Planning, Autonomy and Representation of Knowledge</li>
          <li>Member of the Centre of Artificial Intelligence for Mental Health</li>
          <li>Member of the Centre for Climate Resilient Societies</li>
          <li>Member of the Centre for Autonomous and Intelligent Systems</li>
        </ul>
      </section>

    </div>
  );
}

export default About;
