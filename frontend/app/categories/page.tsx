import React from 'react';
import ORNEK from '../../../ornek.json';
import Link from 'next/link';
import CategoriesCard from '@/components/CategoriesCard';
async function getData() {
 const response = ORNEK;
 return response;
}

type Pizza = {
 id: string;
 name: string;
 showcase: string;
 image: string;
 ingredients: string[];
 isVegan: boolean;
 size: {
  size: string;
  price: number;
  diameter: number;
 }[];
};
type PanPizza = {
 id: string;
 name: string;
 image: string;
 ingredients: string[];
 isVegan: boolean;
 price: number;
};
type OzelLezzet = {
 id: string;
 name: string;
 image: string;
 isVegan: boolean;
 price: number;
};
type Icecek = {
 id: string;
 name: string;
 image: string;
 price: number;
};
const Categories = async () => {
 const categories = await getData();
 const { pizzalar, panPizzalar, ozelLezzetler, icecekler } = categories;
 return (
  <>
   <Link href={'categories/pizzalar'}>
    <section className="flex flex-row">
     <div className="flex-shrink-0">
      <h3 className="text-3xl text-white">Pizzalar</h3>
     </div>
     <div className="ms-5 mb-1 w-full border-b-2 border-white"></div>
    </section>
    <div className="grid grid-cols-3 grid-rows-1 gap-5">
     {pizzalar.slice(0, 3).map((pizza: Pizza) => {
      return (
       <div key={pizza.id}>
        <CategoriesCard
         image={pizza.image}
         name={pizza.name}
         price={pizza.size[1].price}
        />
       </div>
      );
     })}
    </div>
   </Link>
   <div>
    <section className="flex flex-row">
     <div className="flex-shrink-0">
      <h3 className="text-3xl text-white">PanPizzalar</h3>
     </div>
     <div className="ms-5 mb-1 w-full border-b-2 border-white"></div>
    </section>
    {panPizzalar.slice(0, 3).map((panPizza: PanPizza) => {
     return <div key={panPizza.id}>{panPizza.name}</div>;
    })}
   </div>
   <div>
    <section className="flex flex-row">
     <div className="flex-shrink-0">
      <h3 className="text-3xl text-white">Ozel Lezzetler</h3>
     </div>
     <div className="ms-5 mb-1 w-full border-b-2 border-white"></div>
    </section>
    {ozelLezzetler.slice(0, 3).map((citirLezzet: OzelLezzet) => {
     return <div key={citirLezzet.id}>{citirLezzet.name}</div>;
    })}
   </div>
   <div>
    <section className="flex flex-row">
     <div>
      <h3 className="text-3xl text-white">İçecekler</h3>
     </div>
     <div className="ms-5 mb-1 w-full border-b-2 border-white"></div>
    </section>
    {icecekler.slice(0, 3).map((icecek: Icecek) => {
     return <div key={icecek.id}>{icecek.name}</div>;
    })}
   </div>
  </>
 );
};

export default Categories;
