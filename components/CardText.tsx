import { CardTextProps } from "@/types";

const CardText = ({
  title,
  titleColor,
  value,
  superscript,
}: CardTextProps) => {
  return (
    <div className="w-1/2">
      <span className={`text-sm ${titleColor}`}>{title}</span>
      <div className="flex items-center">
        <span className="mr-1">{value}</span>
        <span className='text-green-500 text-xs'>{superscript}</span>
      </div>
    </div>
  );
};

export default CardText;
