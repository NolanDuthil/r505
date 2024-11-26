import * as React from "react";

interface CardProps {
  number: string;
  title: string;
  imageUrl?: string;
}

const Card: React.FC<CardProps> = ({ number, title, imageUrl }) => {
  return (
    <div className="flex flex-col max-w-48">
    <div className="border border-2 border-black overflow-hidden">
      {imageUrl && (
        <div className="w-44 h-64 bg-cover bg-center" style={{ backgroundImage: `url(${imageUrl})` }}></div>
      )}
    </div>
    <div className="flex flex-row gap-8 items-center">
          <p className="text-gray-700 text-sm">({number})</p>
          <div className="text-sm">{title}</div>
    </div>
    </div>
  );
};

export default Card;