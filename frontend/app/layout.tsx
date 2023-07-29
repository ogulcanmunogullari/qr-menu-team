import './globals.css';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
 subsets: ['latin'],
 weight: ['400', '500', '700'],
 style: ['italic', 'normal'],
});

export const metadata: Metadata = {
 title: 'Pizza Menu',
 description: 'Basic pizza menu',
};

export default function RootLayout({
 children,
}: {
 children: React.ReactNode;
}) {
 return (
  <html lang="tr">
   <body
    className={`${roboto.className} h-screen grid place-items-center sm:bg-gradient-to-br from-[#f38896] to-[#65c5ff]`}>
    <main className="bg-[#100f1f] filter-none p-5  h-full w-full sm:w-[414px] sm:h-[800px] sm:drop-shadow-2xl sm:rounded-3xl overflow-y-scroll">
     {children}
    </main>
   </body>
  </html>
 );
}
