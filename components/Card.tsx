import Image from "next/image";
import { CardProps } from "@/types";
import CardText from "./CardText";

const Card = ({ imgUrl, special, Ctitle1, CtitleColor1, Cvalue1, Csuperscript1, Ctitle2, CtitleColor2, Cvalue2, Csuperscript2, Ctitle3, CtitleColor3, Cvalue3, Csuperscript3 }: CardProps) => {
  return (
    <div className="w-full h-full bg-white p-3 rounded-xl">
      <div className="flex justify-between items-center">
        <Image src={imgUrl} alt="icon" width={36} height={36} />
        <select className="text-slate-400 text-sm outline-none border-none">
          <option value="Option1">This Week</option>
          <option value="Option2">This Month</option>
          <option value="Option3">This Year</option>
        </select>
      </div>
      <div className="flex items-center mt-4">
        <CardText
          title={Ctitle1}
          titleColor={CtitleColor1}
          value={Cvalue1}
          superscript={Csuperscript1}
        />
        <CardText
          title={Ctitle2}
          titleColor={CtitleColor2}
          value={Cvalue2}
          superscript={Csuperscript2}
        />
        {special && (
          <CardText
          title={Ctitle3}
          titleColor={CtitleColor3}
          value={Cvalue3}
          superscript={Csuperscript3}
          />
        )}
      </div>
    </div>
  );
};

export default Card;
