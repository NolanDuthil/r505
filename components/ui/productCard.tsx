import * as React from "react";
import { ProductIcon } from '@/components/ui/icons'; // Assurez-vous d'importer le logo

interface CardProps {
  title: string;
  model: string;
  pricebefore: string;
  priceafter: string;
  imageUrl?: string;
}

const ProductCard: React.FC<CardProps> = ({ title, model, pricebefore, priceafter, imageUrl }) => {
  return (
    <div className="flex flex-col items-center w-50 h-98 lg:w-[24rem] lg:h-[38rem] p-2 border border-1 border-black bg-background-card">
      {imageUrl && (
        <div className="w-full h-64 bg-cover bg-center" style={{ backgroundImage: `url(${imageUrl})` }}></div>
      )}
      <div className="flex justify-center my-4">
        <ProductIcon className="w-16 h-16" />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-foreground text-center text-sm">{model}</p>
        <p className="text-lg text-center font-bold">{title}</p>
        <p className="text-foreground text-center font-bold text-sm">{pricebefore}</p>
        <p className="text-lg text-center font-bold">{priceafter}</p>
      </div>
    </div>
  );
};

export default ProductCard;