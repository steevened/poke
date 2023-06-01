import { Button, Input } from '@material-tailwind/react';
import { FC, PropsWithChildren } from 'react';
import { PokeBallIcon, SearchIcon, StartIcon } from './svg/Svg';
import { useRouter } from 'next/router';
import Head from 'next/head';

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
      <section className="bg-red-900 text-blue-gray-50">
        <nav className="absolute inset-x-0 top-0 grid grid-cols-4 grid-rows-2 gap-4 px-2 py-2 md:grid-rows-1 md:flex-row">
          <div
            onClick={() => router.push('/')}
            className="flex items-center justify-center col-span-2 gap-2 px-4 py-2 duration-100 rounded-lg select-none md:col-span-1 hover:bg-red-700 hover:shadow-md"
            role="button"
          >
            <PokeBallIcon />
            <span className="text-2xl font-bold">Pokedex</span>
          </div>
          <div
            onClick={() => router.push('/favorites')}
            className="flex items-center justify-center col-span-2 gap-2 px-4 py-2 duration-100 rounded-lg select-none md:col-span-1 md:col-start-4 hover:bg-red-700 hover:shadow-md"
            role="button"
          >
            {router.pathname === '/favorites' ? (
              <StartIcon solid />
            ) : (
              <StartIcon />
            )}
            <span className="text-2xl font-bold">Favorites</span>
          </div>
          <div className="relative col-span-4 md:col-span-2 md:col-start-2 md:row-start-1">
            <input
              className="w-full h-full pl-16 rounded-full outline-none text-blue-gray-900"
              placeholder="Search Pokemon"
            />
            <div className="absolute top-0 left-0">
              <Button
                className="flex items-center justify-center h-full px-4 rounded-tl-full rounded-bl-full"
                color="red"
                variant="text"
              >
                <SearchIcon />
              </Button>
            </div>
          </div>
        </nav>
        <div className="w-full max-w-6xl px-2 pt-32 mx-auto md:pt-16 ">
          {children}
        </div>
      </section>
    </>
  );
};

export default Layout;
