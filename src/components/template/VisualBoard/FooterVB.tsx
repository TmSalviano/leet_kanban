import { IconPlus } from "@tabler/icons-react";

interface FooterVBProps {
  components_bg: string;
}

export default function FooterVB(props: FooterVBProps) {
  return (
    <div className={`border-t flex justify-start items-center gap-2 pt-1 `}>
      <div className={`flex justify-start items-center gap-2 pt-1 ${props.components_bg} px-1 py-0.5 rounded-md`}>
        <IconPlus size={22} stroke={1.5} />
        <span>New</span>
      </div>
    </div>
  );
}
