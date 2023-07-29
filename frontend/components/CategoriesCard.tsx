import Image from 'next/image';
import React from 'react';

type CategoriesCardProps = {
 image: string;
 name: string;
 price: number;
};

const CategoriesCard = ({ image, name, price }: CategoriesCardProps) => {
 return (
  <div className="flex flex-col gap-2 text-white py-5">
   <div className="w-30 h-auto rounded-2xl overflow-hidden">
    <Image alt="urun resmi" width={200} height={200} src={image} />
   </div>
   <h3 className="line-clamp-1">{name}</h3>
   <p className="text-sm opacity-70">${price}</p>
  </div>
 );
};

export default CategoriesCard;
