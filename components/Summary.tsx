"use client"

import { SetStateAction, useState } from "react";

const Summary = () => {
  const [selectedOption, setSelectedOption] = useState("Option1");

  const handleOptionChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div className="p-4 bg-white rounded-xl">
      <div className="flex justify-between items-center mb-4">
        <div className="flex flex-col sm:flex-row">
          <h3 className="mr-4 items-center mb-3 sm:mb-0">Summary</h3>
          <select className={`${selectedOption === "Option1" ? 'text-blue-1 bg-blue-3' : "text-black bg-peach-2 "} rounded-sm border-none outline-none text-sm`}
           onChange={handleOptionChange}
           value={selectedOption}
          >
            <option value="Option1">Sales</option>
            <option value="Option2">Customers</option>
            <option value="Option3">Orders</option>
          </select>
        </div>
        <select className="text-sm outline-none border-none">
          <option value="Option1">Last 7 Days</option>
          <option value="Option2">Last 30 Days</option>
          <option value="Option3">Last 90 Days</option>
        </select>
      </div>
      <div className="flex justify-between h-[180px]">
        <ul className="flex flex-col justify-between text-sm text-slate-400">
          <li>100k</li>
          <li>80k</li>
          <li>60k</li>
          <li>40k</li>
          <li>20k</li>
          <li> </li>
          <li> </li>
        </ul>
        <div className="flex flex-col items-center" title="Sept10">
          <span className={`w-3 h-full ${selectedOption === "Option1" ? "bg-blue-3" : "bg-peach-2"} rounded-full flex items-end mb-2`}>
            <span className={`w-3 h-4/5  ${selectedOption === "Option1" ? "bg-blue-1" : "bg-peach-1"} rounded-full`}></span>
          </span>
          <span className="text-sm text-slate-400 hidden sm:block">Sept10</span>
        </div>
        <div className="flex flex-col items-center" title="Sept11">
          <span className={`w-3 h-full ${selectedOption === "Option1" ? "bg-blue-3" : "bg-peach-2"} rounded-full flex items-end mb-2`}>
            <span className={`w-3 h-2/5  ${selectedOption === "Option1" ? "bg-blue-1" : "bg-peach-1"} rounded-full`}></span>
          </span>
          <span className="text-sm text-slate-400 hidden sm:block">Sept11</span>
        </div>
        <div className="flex flex-col items-center" title="Sept12">
          <span className={`w-3 h-full ${selectedOption === "Option1" ? "bg-blue-3" : "bg-peach-2"} rounded-full flex items-end mb-2`}>
            <span className={`w-3 h-3/5  ${selectedOption === "Option1" ? "bg-blue-1" : "bg-peach-1"} rounded-full`}></span>
          </span>
          <span className="text-sm text-slate-400 hidden sm:block">Sept12</span>
        </div>
        <div className="flex flex-col items-center" title="Sept13">
          <span className={`w-3 h-full ${selectedOption === "Option1" ? "bg-blue-3" : "bg-peach-2"} rounded-full flex items-end mb-2`}>
            <span className={`w-3 h-1/5  ${selectedOption === "Option1" ? "bg-blue-1" : "bg-peach-1"} rounded-full`}></span>
          </span>
          <span className="text-sm text-slate-400 hidden sm:block">Sept13</span>
        </div>
        <div className="flex flex-col items-center" title="Sept14">
          <span className={`w-3 h-full ${selectedOption === "Option1" ? "bg-blue-3" : "bg-peach-2"} rounded-full flex items-end mb-2`}>
            <span className={`w-3 h-4/5  ${selectedOption === "Option1" ? "bg-blue-1" : "bg-peach-1"} rounded-full`}></span>
          </span>
          <span className="text-sm text-slate-400 hidden sm:block">Sept14</span>
        </div>
        <div className="flex flex-col items-center" title="Sept15">
          <span className={`w-3 h-full ${selectedOption === "Option1" ? "bg-blue-3" : "bg-peach-2"} rounded-full flex items-end mb-2`}>
            <span className={`w-3 h-2/5  ${selectedOption === "Option1" ? "bg-blue-1" : "bg-peach-1"} rounded-full`}></span>
          </span>
          <span className="text-sm text-slate-400 hidden sm:block">Sept15</span>
        </div>
        <div className="flex flex-col items-center" title="Sept16">
          <span className={`w-3 h-full ${selectedOption === "Option1" ? "bg-blue-3" : "bg-peach-2"} rounded-full flex items-end mb-2`}>
            <span className={`w-3 h-4/5  ${selectedOption === "Option1" ? "bg-blue-1" : "bg-peach-1"} rounded-full`}></span>
          </span>
          <span className="text-sm text-slate-400 hidden sm:block">Sept16</span>
        </div>
      </div>
    </div>
  );
};

export default Summary;
