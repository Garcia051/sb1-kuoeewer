import React from 'react';
import { Heart } from 'lucide-react';

interface ProductCardProps {
  image: string;
  name: string;
  price: string;
  category: string;
}

export default function ProductCard({ image, name, price, category }: ProductCardProps) {
  return (
    <div className="group relative">
      <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-200">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
        <button className="absolute top-2 right-2 p-2 rounded-full bg-white/80 hover:bg-white">
          <Heart className="h-5 w-5" />
        </button>
      </div>
      <div className="mt-4">
        <p className="text-sm text-gray-500">{category}</p>
        <h3 className="text-sm font-medium text-gray-900">{name}</h3>
        <p className="mt-1 text-sm font-medium text-gray-900">{price}</p>
      </div>
    </div>
  );
}