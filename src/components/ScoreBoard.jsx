import React from "react";

const ScoreBoard = ({ score }) => {
  return (
    <div className="flex justify-between w-full max-w-[320px] sm:max-w-[360px] px-4 py-3 mb-4 rounded-xl bg-[#1E293B] border border-[#334155] shadow-md text-lg font-semibold tracking-wide">
      <div className="text-[#38BDF8]">You (X): {score.X}</div>
      <div className="text-[#F87171]">AI (O): {score.O}</div>
    </div>
  );
};

export default ScoreBoard;
