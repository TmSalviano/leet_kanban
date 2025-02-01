import { ReactNode } from "react";
import CardItem from "../CardItem";
import { IconPlus } from "@tabler/icons-react";
import HeaderVB from "./HeaderVB";
import FooterVB from "./FooterVB";

interface VisualBoardProps {
  title: string;
  color: string;
  circle_color: string;
  components_bg: string,
  CardItems: ReactNode[];
}
export default function VisualBoard(props: VisualBoardProps) {
  return (
    <div
      className={`flex flex-col flex-1 rounded-md px-4 py-2 border-2 border-zinc-800 ${props.color} bg-opacity-60 `}
    >
      <HeaderVB color={props.color} circle_color={props.circle_color} title={props.title} components_bg={props.components_bg} />
      <div className="flex flex-col gap-1 flex-1 py-2 ">{props.CardItems}</div>
      <FooterVB components_bg={props.components_bg} />
    </div>
  );
}
