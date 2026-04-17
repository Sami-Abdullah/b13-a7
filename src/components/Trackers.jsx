import React from 'react';

const Trackers = () => {
  return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-7/12">
        <div className="rounded-3xl flex flex-col items-center text-[#244d3fFF]  py-10 bg-white shadow-sm gap-2">
          <span className="text-4xl font-semibold">10</span>
          <span className="text-[#64748bFF] text-xl ">Total friend</span>
        </div>
        <div className="rounded-3xl flex flex-col items-center text-[#244d3fFF]  py-10 bg-white shadow-sm gap-2">
          <span className="text-4xl font-semibold">3</span>
          <span className="text-[#64748bFF] text-xl">On Track</span>
        </div>
        <div className="rounded-3xl flex flex-col items-center text-[#244d3fFF] py-10 bg-white shadow-sm gap-2">
          <span className="text-4xl font-semibold">6</span>
          <span className="text-[#64748bFF] text-xl">Need Attention</span>
        </div>
        <div className="rounded-3xl flex flex-col items-center text-[#244d3fFF]  py-10 bg-white shadow-sm gap-2">
          <span className="text-4xl font-semibold">12</span>
          <span className="text-[#64748bFF] text-xl">Interactions This Month</span>
        </div>
      </div>
  );
};

export default Trackers;