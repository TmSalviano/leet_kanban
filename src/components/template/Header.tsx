import { IconBrandLeetcode } from "@tabler/icons-react";

export default function Header() {
    return (
       <header className="flex justify-between items-center bg-black border-b border-zinc-800 px-6 py-3 ">
            <div className="flex items-center gap-2">

                <IconBrandLeetcode size={36} stroke={1} className="text-blue-400 " />
                <span className="font-bold">LeetKanban</span>
            </div>
            <div className="flex justify-center items-center font-bold bg-green-600 w-11 h-11 rounded-full text-yellow-300">
                BRA
            </div>
       </header> 
    )
}