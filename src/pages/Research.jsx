import React from 'react';

function Research() {
  return (
    <div className="py-8">
      <h1 className="text-2xl font-bold mb-4">Research Areas</h1>
      <p className="mb-4">My research spans several areas of Artificial Intelligence, particularly:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Explainable AI & Fuzzy Systems:</strong> Designing interpretable AI models, including fuzzy logic systems, that provide transparent decision-making.
        </li>
        <li>
          <strong>Probabilistic Machine Learning:</strong> Developing probabilistic models and sequence learning techniques for complex temporal data.
        </li>
        <li>
          <strong>Digital Mental Health:</strong> AI applications in wellbeing and mental health, such as predictive models for mental state monitoring and digital therapy support.
        </li>
        <li>
          <strong>Affective Computing:</strong> Analyzing and modeling human emotions and affective states using computational techniques.
        </li>
      </ul>
    </div>
  );
}

export default Research;
