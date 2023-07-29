'use client';
import React from 'react';
import ArrowBack from '../app/arrrow_back.svg';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
const Header = () => {
 const router = useRouter();
 return (
  <div
   className="w-full h-72 rounded-b-3xl absolute top-0 left-0 right-0 bg-slate-500 p-5 bg-[url('https://media.istockphoto.com/id/1192270298/tr/fotoğraf/insanlar-italyan-pizza-ile-masanın-üzerinde-şarap-ile-bardak-clinking.jpg?s=612x612&w=0&k=20&c=m_DuLiTD6oYOOVbg1tsM6jJC6O5m96KHwAO3Dx3Wbpg=')]"
   style={{ backgroundPosition: 'center' }}>
   <Image
    onClick={() => router.back()}
    src={ArrowBack}
    width={35}
    height={35}
    alt="back icon"
   />
  </div>
 );
};

export default Header;
