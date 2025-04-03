import React from 'react';

function Contact() {
  return (
    <div className="content-container">
      <h1>Contact</h1>
      <p><strong>Email:</strong> <a href="mailto:t.chen@hud.ac.uk">t.chen@hud.ac.uk</a></p>
      <p><strong>Phone:</strong> +44 (0)1484 256242</p>
      <p><strong>Office:</strong> Department of Computer Science, University of Huddersfield, HD1 3DH, UK</p>
      <p><strong>Profiles:</strong> 
        <a href="https://pure.hud.ac.uk/en/persons/tianhua-chen" target="_blank" rel="noreferrer"> Pure </a> | 
        <a href="https://scholar.google.com/citations?user=GXJE7FQAAAAJ" target="_blank" rel="noreferrer"> Google Scholar </a>
      </p>
    </div>
  );
}

export default Contact;
