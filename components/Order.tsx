import { RecentOrderProps } from "@/types";
import Image from "next/image";

const Order = ({ imgUrl, name, price, date, status }: RecentOrderProps) => {
  return (
    <div className="flex justify-between mb-2">
      <div className="flex">
        <Image src={imgUrl} alt="image" width={60} height={60} />

        <div className="ml-4 flex flex-col justify-between">
          <span>{name}</span>
          <span className="text-semibold">{price}</span>
        </div>
      </div>
      <div className="flex flex-col justify-between items-end">
        <span className="text-sm text-slate-400">{date}</span>
        {status === true ? (
          <span className="px-4 py-[2px] rounded-full text-xs bg-red-100 text-red-600">
            Pending
          </span>
        ) : (
          <span className="px-4 py-[2px] rounded-full text-xs bg-green-50 text-green-600">
            Completed
          </span>
        )}
      </div>
    </div>
  );
};

export default Order;
