import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGoogle } from 'react-icons/fa';

function Contact() {
  return (
    <div className="py-8 px-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-text">Contact</h1>

      {/* Contact Information Section */}
      <section className="space-y-4">
        <div className="flex items-center space-x-4">
          <FaEnvelope className="text-text w-6 h-6" />
          <a href="mailto:T.Chen@hud.ac.uk" className="text-lg text-text hover:text-[#003976]">
            T.Chen@hud.ac.uk
          </a>
        </div>

        <div className="flex items-center space-x-4">
          <FaPhone className="text-text w-6 h-6" />
          <span className="text-lg text-text">+44 (0)1484 473586</span>
        </div>

        <div className="flex items-center space-x-4">
          <FaMapMarkerAlt className="text-text w-6 h-6" />
          <span className="text-lg text-text">
            Department of Computer Science, School of Computing and Engineering, University of Huddersfield, Queensgate, Huddersfield, HD1 3DH, UK
          </span>
        </div>

        <div className="flex items-center space-x-4">
          <FaLinkedin className="text-text w-6 h-6" />
          <a href="https://uk.linkedin.com/in/tianhua-chen-1a083316b" target="_blank" rel="noopener noreferrer" className="text-lg text-text hover:text-[#003976]">
            LinkedIn Profile
          </a>
        </div>

        <div className="flex items-center space-x-4">
          <FaGoogle className="text-text w-6 h-6" />
          <a href="https://scholar.google.co.uk/citations?hl=en&user=GXJE7FQAAAAJ" target="_blank" rel="noopener noreferrer" className="text-lg text-text hover:text-[#003976]">
            Google Scholar Profile
          </a>
        </div>
      </section>
    </div>
  );
}

export default Contact;
