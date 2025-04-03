import React from 'react';

function Contact() {
  return (
    <div className="py-8">
      <h1 className="text-2xl font-bold mb-6">Contact</h1>
      <div className="space-y-4">
        <p><strong>Email:</strong> <a href="mailto:t.chen@hud.ac.uk" className="text-blue-600 hover:underline">t.chen@hud.ac.uk</a></p>
        <p><strong>Phone:</strong> +44 (0)1484 256242</p>
        <p><strong>Office:</strong> Department of Computer Science, University of Huddersfield, HD1 3DH, UK</p>
        <p><strong>Profiles:</strong> 
          <a href="https://pure.hud.ac.uk/en/persons/tianhua-chen" className="text-blue-600 hover:underline ml-1" target="_blank">Pure</a> | 
          <a href="https://scholar.google.com/citations?user=GXJE7FQAAAAJ" className="text-blue-600 hover:underline ml-1" target="_blank">Google Scholar</a>
        </p>
      </div>
    </div>
  );
}

export default Contact;