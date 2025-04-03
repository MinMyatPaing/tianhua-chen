import React from 'react';

function Publications() {
  return (
    <div className="py-8">
      <h1 className="text-2xl font-bold mb-6">Selected Publications</h1>
      <ul className="space-y-4">
        <li className="border-l-4 border-[#003976] pl-4">
          Chen, T. (2024). <em>Can heart rate sequences from wearable devices predict day-long mental states…</em> <strong>Brain Informatics</strong>. <br />
          <a href="https://doi.org/10.1186/s40708-024-00243-w" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">DOI</a>
        </li>
        <li className="border-l-4 border-[#003976] pl-4">
          Chen, T. et al. (2023). <em>Diagnosing ADHD using artificial intelligence: a clinical study in the UK.</em> <strong>Frontiers in Psychiatry</strong>. <br />
          <a href="https://doi.org/10.3389/fpsyt.2023.1164433" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">DOI</a>
        </li>
        <li className="border-l-4 border-[#003976] pl-4">
          Chen, T. (2023). <em>Investigating the mental health of university students during the COVID-19 pandemic…</em> <strong>Brain Informatics</strong>. <br />
          <a href="https://doi.org/10.1186/s40708-023-00230-5" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">DOI</a>
        </li>
        <li className="border-l-4 border-[#003976] pl-4">
          Chen, T., et al. (2022). <em>The mental health of university students during COVID-19: an online survey in the UK.</em> <strong>PLOS ONE</strong>. <br />
          <a href="https://doi.org/10.1371/journal.pone.0262562" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">DOI</a>
        </li>
        <li className="border-l-4 border-[#003976] pl-4">
          Chen, T., et al. (2022). <em>Interpretable fuzzy system for dementia diagnosis.</em> <strong>Frontiers in Neuroscience</strong>. <br />
          <a href="https://doi.org/10.3389/fnins.2022.867664" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">DOI</a>
        </li>
      </ul>
    </div>
  );
}

export default Publications;
