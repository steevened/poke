import { Button, Input } from '@material-tailwind/react';
import { FC, PropsWithChildren } from 'react';
import { PokeBallIcon, SearchIcon, StartIcon } from './svg/Svg';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Navbar from './Navbar';

interface Props {
  title?: string;
}

const Layout: FC<PropsWithChildren<Props>> = ({ children, title }) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{!title ? 'Pokedex' : title + ' - Pokedex'}</title>
      </Head>
      <section className="bg-red-900  text-blue-gray-50">
        <Navbar />
        <div className="w-full max-w-6xl px-2 pt-32 mx-auto md:pt-16 ">
          {children}
        </div>
      </section>
    </>
  );
};

export default Layout;
