import React from "react";

function LeftSidebar() {
  return (
    <div className=" w-1/5 p-2 flex flex-col bg-slate-400 rounded-xl text-white">
      <button className="hover:bg-slate-700 p-2 rounded-xl ">Today</button>
      <button className="mt-10 hover:bg-slate-700 p-2 rounded-xl">
        Tomorrow
      </button>
      <button className="mt-10 hover:bg-slate-700 p-2 rounded-xl">
        Date
      </button>
      <button className="mt-10 hover:bg-slate-700 p-2 rounded-xl">
        Date
      </button>
      <button className="mt-10 hover:bg-slate-700 p-2 rounded-xl">
        Date
      </button>
      <button className="mt-10 hover:bg-slate-700 p-2 rounded-xl">
        Date
      </button>
      <button className="my-10 hover:bg-slate-700 p-2 rounded-xl">
        Date
      </button>
      <button className="hover:bg-slate-700 p-2 rounded-xl">Date</button>
    </div>
  );
}

export default LeftSidebar;
