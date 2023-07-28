import Image from 'next/image';
import Link from 'next/link';
import FavIcon from './main_img.png';

export default function Home() {
 return (
  <main className="w-full h-full grid grid-rows-[5fr_6fr]">
   <section className="text-white grid place-items-center">
    <div className="flex flex-col gap-2 items-center text-4xl">
     <Image src={FavIcon} alt={''}></Image>
     <h1>Pizza</h1>
    </div>
   </section>
   <section className="flex flex-col items-center gap-5 w-full">
    <Link
     href={''}
     className="text-center text-white w-3/6 bg-[#ff4f4f] rounded-3xl py-3 text-xl font-medium">
     Admin
    </Link>
    <Link
     href={''}
     className="text-center text-[#0e0d1b] w-3/6 bg-[#f1f1f3] rounded-3xl py-3 text-xl font-medium">
     Customer
    </Link>
   </section>
  </main>
 );
}
