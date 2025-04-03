import React from "react";
import profilePic from "../assets/profile.webp";

function About() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 py-8">
      <img
        src={profilePic}
        alt="Tianhua Chen"
        className="w-40 h-40 rounded-full shadow-md"
      />
      <div>
        <h1 className="text-3xl font-bold mb-2">Dr. Tianhua Chen</h1>
        <h2 className="text-xl font-semibold text-[#003976] mb-4">
          Reader in Artificial Intelligence
        </h2>
        <p className="italic mb-4">
          Department of Computer Science, School of Computing and Engineering
          <br />
          University of Huddersfield
        </p>
        <p>
          Tianhua Chen received his Ph.D. in Computational Intelligence from
          Aberystwyth University in 2017. He is now a Reader (Associate
          Professor) in Artificial Intelligence at the University of
          Huddersfield. He leads the MSc Artificial Intelligence programs and
          the AI for Health and Wellbeing research team. His research focuses on
          probabilistic machine learning, sequence modelling, and affective
          computing applied to wellbeing and mental health. He has published
          over 60 peer-reviewed papers including a spotlight article in IEEE
          Transactions on Fuzzy Systems.
        </p>
      </div>
    </div>
  );
}

export default About;
