import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Bar, Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import StepCountMood from "../components/StepCountMoodGraph";

import { images } from "../constants";

const { flyer1, flyer2, report1, report2, report3 } = images;

function ResearchDetails() {
  const { state } = useLocation();
  const [expandedImage, setExpandedImage] = useState(null);

  if (!state) {
    return <p className="py-8 text-center text-text">No publication data.</p>;
  }

  const renderGraph = (graphType) => {
    switch (graphType) {
      case "heart_rate_variation":
        return (
          <Line
            data={{
              labels: ["8 AM", "12 PM", "4 PM", "8 PM"],
              datasets: [
                {
                  label: "Heart Rate (bpm)",
                  data: [70, 85, 78, 72],
                  backgroundColor: "rgba(0, 123, 255, 0.5)",
                  borderColor: "rgba(0, 123, 255, 1)",
                },
              ],
            }}
            options={{ responsive: true }}
          />
        );
      case "dominant_sets_graph":
        return (
          <Bar
            data={{
              labels: ["Set 1", "Set 2", "Set 3"],
              datasets: [
                {
                  label: "Dominant Set Size",
                  data: [15, 22, 18],
                  backgroundColor: ["#007bff", "#6610f2", "#6f42c1"],
                },
              ],
            }}
            options={{ responsive: true }}
          />
        );
      case "adhd_diagnostic_framework":
        return (
          <img
            src="/path-to-adhd-framework-image.png"
            alt="ADHD Diagnostic Framework"
            className="rounded shadow-md"
          />
        );
      case "student_mental_health_stats":
        return (
          <Bar
            data={{
              labels: ["Anxiety", "Depression", "Resilience"],
              datasets: [
                {
                  label: "Percentage of Students",
                  data: [55, 60, 40],
                  backgroundColor: ["#dc3545", "#ffc107", "#28a745"],
                },
              ],
            }}
            options={{ responsive: true }}
          />
        );
      case "ai4sw-student-wellbeing":
        return (
          <div className="mt-6 space-y-4">
            <h2 className="text-2xl font-semibold text-text">
              Step Count and Mood Correlation
            </h2>
            <StepCountMood />
          </div>
        );
      default:
        return null;
    }
  };

  const reportImages = [report1, report2, report3];

  return (
    <div className="py-16 px-6 max-w-6xl mx-auto space-y-20">
      <header className="text-center space-y-4">
        <h1 className="text-5xl font-extrabold text-text">
          {state.title}
        </h1>
        {state.year && (
          <p className="text-lg italic text-text">
            {state.journal} ({state.year})
          </p>
        )}
        <p className="text-base text-text max-w-3xl mx-auto leading-relaxed">
          {state.summary}
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="text-3xl font-bold text-text border-b pb-2">
          About the Project
        </h2>
        <p className="text-text">
          AI4SW (AI for Student Wellbeing) is a pioneering research initiative
          from the University of Huddersfield. It uses wearable technology and
          AI to deliver real-time insights into students' mental wellbeing, by
          analyzing data such as heart rate, sleep patterns, and daily activity.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-3xl font-bold text-text border-b pb-2">
          Methodology
        </h2>
        <p className="text-text">
          Our AI model gathers anonymized data through a dedicated iOS app, with
          daily check-ins. We utilize machine learning techniques such as
          clustering and regression to interpret mental state trends over time.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-3xl font-bold text-text border-b pb-2">
          Outreach & Recruitment Strategy
        </h2>
        <ul className="list-disc list-inside text-text">
          <li>
            <strong>Freshers Fair:</strong> Interactive booth with flyers,
            posters, and giveaways.
          </li>
          <li>
            <strong>Wellbeing Booth:</strong> Live demos in high-footfall
            locations.
          </li>
          <li>
            <strong>Email Campaign:</strong> Outreach to targeted Computer
            Science cohorts.
          </li>
          <li>
            <strong>Social Media:</strong> SU Instagram promotion to 9,000+
            followers.
          </li>
          <li>
            <strong>Lecture Shout-outs:</strong> Announcements during induction
            lectures.
          </li>
          <li>
            <strong>Committee Networks:</strong> Support from student society
            committees.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-3xl font-bold text-text border-b pb-2">
          Why It Matters
        </h2>
        <p className="text-text">
          Mental health concerns among students are growing. AI4SW addresses
          this with early detection technology that benefits participants with
          actionable insights and monthly incentives such as Amazon vouchers.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-text mb-6 border-b pb-2">
          Visual Assets
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <img src={flyer1} alt="Flyer 1" className="rounded-xl shadow-xl" />
          <img src={flyer2} alt="Flyer 2" className="rounded-xl shadow-xl" />
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-text mb-6 border-b pb-2">
          Recruitment Result Highlights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reportImages.map((img, index) => (
            <div key={index} className="relative">
              <img
                src={img}
                alt={`Recruitment Chart ${index + 1}`}
                onClick={() => setExpandedImage(img)}
                className="cursor-pointer transition-transform duration-300 hover:scale-105 rounded-xl shadow-xl"
              />
            </div>
          ))}
        </div>

        {expandedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm transition-opacity"
            onClick={() => setExpandedImage(null)}
          >
            <img
              src={expandedImage}
              alt="Expanded View"
              className="max-w-3xl max-h-[90vh] rounded-2xl shadow-2xl border-4 border-white transition-all duration-300"
            />
          </div>
        )}
      </section>

      <section className="pt-12">{renderGraph(state.graph)}</section>

      {state.link && (
        <div className="text-center">
          <a
            href={state.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-10 !text-white bg-[#003976] hover:bg-blue-800 px-6 py-3 rounded-lg text-lg font-semibold shadow-md transition"
          >
            Learn More
          </a>
        </div>
      )}
    </div>
  );
}

export default ResearchDetails;
