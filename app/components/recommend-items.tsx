import React from "react";

const RecommendItems = () => {
  return (
    <div className="mt-3 flex flex-col items-center justify-center">
      <p>Maybe you need ...</p>
      <div className="w-[300px] flex justify-around items-center mt-3">
        <div className="text-3xl w-[80px] h-[80px] rounded-[20px] bg-indigo-200 flex items-center justify-center shadow-lg">
          🌂
        </div>
        <div className="text-3xl w-[80px] h-[80px] rounded-[20px] bg-indigo-200 flex items-center justify-center shadow-lg">
          🕶️
        </div>
        <div className="text-3xl w-[80px] h-[80px] rounded-[20px] bg-indigo-200 flex items-center justify-center shadow-lg">
          🧢
        </div>
      </div>
    </div>
  );
};

export default RecommendItems;
