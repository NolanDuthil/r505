import * as React from "react";

const Bande: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div className="relative overflow-hidden p-4 bg-background-bande border-t-2 border-b-2 border-black w-full">
      <div className="absolute inset-0 flex items-center justify-center whitespace-nowrap animate-scroll text-xl uppercase">
        {text}
      </div>
    </div>
  );
};

export default Bande;