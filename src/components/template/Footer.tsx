import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex justify-between bg-black border-t border-zinc-800 px-6 py-3">
      <div className="flex flex-col">
        <span className="text-zinc-400 text-sm">
          <a href="http://creativecommons.org/licenses/by/4.0/">
          This work is licensed under the Creative Commons Attribution 4.0 International License
          </a>
        </span>
      </div>

      <span className="text-zinc-400 text-sm">
        Write something or press 'Space' for AI, '/' for commands
      </span>
    </div>
  );
}
