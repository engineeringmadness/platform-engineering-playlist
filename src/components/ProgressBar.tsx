
import React from 'react';

interface ProgressBarProps {
  completed: number;
  total: number;
}

const ProgressBar = ({ completed, total }: ProgressBarProps) => {
  const percentage = (completed / total) * 100;

  return (
    <div className="w-full mb-8">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-[#9aa7bd]">Progress</span>
        <span className="text-sm font-medium text-[#9aa7bd]">{completed} of {total} videos completed</span>
      </div>
      <div className="w-full bg-[#1f2a44] rounded-full h-2.5">
        <div
          className="bg-[#22d3ee] h-2.5 rounded-full transition-all duration-300 ease-in-out"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
