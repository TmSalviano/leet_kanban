import { IconDots, IconPlus } from "@tabler/icons-react";

interface HeaderVBProps {
  color: string;
  circle_color: string;
  title: string;
  components_bg: string,
}

export default function HeaderVB(props: HeaderVBProps) {
  return (
    <div
      className={`flex justify-between items-center pb-1 ${props.color} bg-opacity-0 gap-2 border-b`}
    >
      <div className={`flex items-center gap-2 ${props.components_bg} px-1.5 py-0.5 rounded-md`}>
        <div className={`w-2 h-2 ${props.circle_color} rounded-full  `}></div>
        <span className="text-white">{props.title}</span>
      </div>
      <div className={`flex gap-2 ${props.components_bg} px-1.5 py-0.5 rounded-md`}>
            <IconPlus size={22} stroke={1.5} />
            <IconDots size={22} stroke={1.5} />
      </div>
    </div>
  );
}
