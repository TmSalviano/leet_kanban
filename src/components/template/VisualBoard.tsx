import { ReactNode } from "react";
import CardItem from "./CardItem";
import { IconPlus } from "@tabler/icons-react";

interface VisualBoardProps {
  title: string;
  color: string;
  circle_color: string,
  CardItems: ReactNode[]
}
export default function VisualBoard(props: VisualBoardProps) {
  return (
    
    <div className={`flex flex-col flex-1 rounded-md px-4 py-2 border-2 border-zinc-800 ${props.color} bg-opacity-60 `}>
      <div
        className={`flex justify-start items-center pb-1 ${props.color} bg-opacity-0 gap-2 border-b`}
      >
        <div className={`w-2 h-2 ${props.circle_color} rounded-full  `}></div>
        <span className="text-white">{props.title}</span>
      </div>
      <div className="flex flex-col gap-1 flex-1 py-2 ">
        {props.CardItems}
      </div>
      <div className="border-t flex justify-start items-center gap-2 pt-1 ">
        <IconPlus size={22} stroke={1.5} />
        <span>New</span>
      </div>

    </div>
  );
}
