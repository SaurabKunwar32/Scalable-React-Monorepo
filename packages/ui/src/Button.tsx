import type { ReactNode } from "react";

type ButtonProps = {
  onClick: () => void;
  children: ReactNode;
};

export const Button = ({ onClick, children }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="
        rounded-xl
        bg-blue-600
        px-6
        py-3
        font-semibold
        text-white
        shadow-lg
        shadow-blue-600/30
        transition-all
        duration-300
        hover:bg-blue-700
        hover:shadow-blue-500/50
        active:scale-95
        focus:outline-none
        focus:ring-2
        focus:ring-blue-400
        focus:ring-offset-2
        focus:ring-offset-slate-950
      "
    >
      {children}
    </button>
  );
};
