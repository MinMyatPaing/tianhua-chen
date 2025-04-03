import React from "react";
import { useLocation } from "react-router-dom";
import { Bar, Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import StepCountMood from "../components/StepCountMoodGraph";

function PublicationDetail() {
  const { state } = useLocation();

  if (!state) {
    return <p className="py-8 text-center text-lg">No publication data.</p>;
  }

  const renderGraph = (graphType) => {
    console.log("Type ==>", graphType);
    
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
            <h2 className="text-lg font-semibold text-[#003976] dark:text-blue-300">
              Step Count and Mood Correlation
            </h2>
            <StepCountMood />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="py-8 space-y-6 max-w-5xl mx-auto px-4">
      <h1 className="text-3xl font-bold text-[#003976]">{state.title}</h1>
      <p className="italic text-gray-700">
        {state.journal} ({state.year})
      </p>
      <p className="text-gray-800">{state.summary}</p>
      {renderGraph(state.graph)}
      {state.link && (
        <a
          href={state.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-4 text-blue-500 hover:underline"
        >
          Read Full Publication
        </a>
      )}
    </div>
  );
}

export default PublicationDetail;
