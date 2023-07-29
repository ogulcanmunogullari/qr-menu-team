import React from 'react';
import ORNEK from '../../../ornek.json';
import Link from 'next/link';
import CategoriesCard from '@/components/CategoriesCard';
import Header from '@/components/Header';
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
  <div>
   <Header />
   <div className="mt-72 flex flex-col gap-5">
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
    <Link href={'categories/panpizzalar'}>
     <section className="flex flex-row">
      <div className="flex-shrink-0">
       <h3 className="text-3xl text-white">PanPizzalar</h3>
      </div>
      <div className="ms-5 mb-1 w-full border-b-2 border-white"></div>
     </section>
     <div className="grid grid-cols-3 grid-rows-1 gap-5">
      {panPizzalar.slice(0, 3).map((panPizza: PanPizza) => {
       return (
        <div key={panPizza.id}>
         <CategoriesCard
          image={panPizza.image}
          name={panPizza.name}
          price={panPizza.price}
         />
        </div>
       );
      })}
     </div>
    </Link>
    <Link href={'categories/ozellezzetler'}>
     <section className="flex flex-row">
      <div className="flex-shrink-0">
       <h3 className="text-3xl text-white">Ozel Lezzetler</h3>
      </div>
      <div className="ms-5 mb-1 w-full border-b-2 border-white"></div>
     </section>
     <div className="grid grid-cols-3 grid-rows-1 gap-5">
      {ozelLezzetler.slice(0, 3).map((ozellezzetler: OzelLezzet) => {
       return (
        <div key={ozellezzetler.id}>
         <CategoriesCard
          image={ozellezzetler.image}
          name={ozellezzetler.name}
          price={ozellezzetler.price}
         />
        </div>
       );
      })}
     </div>
    </Link>
    <Link href={'categories/icecekler'}>
     <section className="flex flex-row">
      <div>
       <h3 className="text-3xl text-white">İçecekler</h3>
      </div>
      <div className="ms-5 mb-1 w-full border-b-2 border-white"></div>
     </section>
     <div className="grid grid-cols-3 grid-rows-1 gap-5">
      {icecekler.slice(1, 4).map((icecek: Icecek) => {
       return (
        <div key={icecek.id}>
         <CategoriesCard
          image={icecek.image}
          name={icecek.name}
          price={icecek.price}
         />
        </div>
       );
      })}
     </div>
    </Link>
   </div>
  </div>
 );
};

export default Categories;
