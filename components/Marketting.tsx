import Image from "next/image";

const Marketting = () => {
  return (
    <div className="w-full h-full bg-white p-3 rounded-xl">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold">Marketting</h3>
        <select className="text-slate-400 text-sm outline-none border-none">
          <option value="Option1">This Week</option>
          <option value="Option2">This Month</option>
          <option value="Option3">This Year</option>
        </select>
      </div>

      <ul className="flex justify-between text-sm text-slate-400 mb-4">
        <li className="flex items-center">
          <span className="w-1 h-1 bg-blue-1 rounded-full mr-1"></span>
          <span>Acquisition</span>
        </li>
        <li className="flex items-center">
          <span className="w-1 h-1 bg-blue-2 rounded-full mr-1"></span>
          <span>Purchase</span>
        </li>
        <li className="flex items-center">
          <span className="w-1 h-1 bg-peach-1 rounded-full mr-1"></span>
          <span>Retention</span>
        </li>
      </ul>

      <div className="flex justify-center">
        <Image
          src="/images/marketting.svg"
          alt="image"
          width={150}
          height={150}
        />
      </div>
    </div>
  );
};

export default Marketting;
