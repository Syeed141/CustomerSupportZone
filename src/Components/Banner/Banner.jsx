import React from "react";

const StatCard = ({ title, value, gradientClass }) => {
  return (
    <div className={`relative overflow-hidden rounded-xl p-8 ${gradientClass}`}>
     
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-25"
        viewBox="0 0 1200 300"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <g fill="none" stroke="white" strokeWidth="2">
          <path d="M-50 40 C 150 10, 300 120, 520 70 C 740 20, 820 160, 1050 110 C 1180 80, 1300 40, 1400 60" />
          <path d="M-50 90 C 160 60, 320 170, 540 120 C 760 70, 850 210, 1080 160 C 1210 130, 1320 90, 1420 110" />
          <path d="M-50 140 C 170 110, 340 220, 560 170 C 780 120, 880 260, 1110 210 C 1240 180, 1340 140, 1440 160" />
          <path d="M-50 190 C 180 160, 360 270, 580 220 C 800 170, 910 310, 1140 260 C 1270 230, 1360 190, 1460 210" />
        </g>
      </svg>

     
      <div className="relative flex flex-col items-center justify-center text-center text-white">
        <p className="text-sm font-medium opacity-90">{title}</p>
        <p className="mt-2 text-5xl font-semibold leading-none">{value}</p>
      </div>
    </div>
  );
};

export default function Banner({
  ResolvedTask,
  TaskState
}) {
  return (
    <div className="mx-auto w-full max-w-6xl px-4">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mt-10 mb-10">
        <StatCard
          title="In-Progress"
          value={TaskState}
          gradientClass="bg-gradient-to-r from-violet-600 to-purple-500"
        />
        <StatCard
          title="Resolved"
          value={ResolvedTask}
          gradientClass="bg-gradient-to-r from-emerald-500 to-teal-700"
        />
      </div>
    </div>
  );
}