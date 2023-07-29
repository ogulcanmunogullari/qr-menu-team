import { type } from 'os';
import React from 'react';

type CategoriesCardProps = {
 image: string;
 name: string;
 price: number;
};

const CategoriesCard = ({ image, name, price }: CategoriesCardProps) => {
 return <div>{price}</div>;
};

export default CategoriesCard;
