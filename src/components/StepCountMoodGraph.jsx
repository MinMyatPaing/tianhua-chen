import React from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

const StepCountandMoodGraph = () => {
  const data = {
    labels: ["Bad", "Normal", "Good"],
    datasets: [
      {
        label: "Average Step Count",
        data: [4213, 5762, 6590], // Replace with real aggregated values if available
        backgroundColor: ["#EF4444", "#3B82F6", "#10B981"],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: "#fff",
        },
      },
      title: {
        display: true,
        text: "Correlation Between Step Count and Mood",
        color: "#fff",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: "#fff",
        },
        title: {
          display: true,
          text: "Average Step Count",
          color: "#fff",
        },
      },
      x: {
        ticks: {
          color: "#fff",
        },
      },
    },
  };

  return (
    <div className="h-96 w-full bg-white dark:bg-gray-800 p-4 rounded shadow">
      <Bar data={data} options={options} />
    </div>
  );
};

export default StepCountandMoodGraph;
