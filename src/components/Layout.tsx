import { Button, Input } from '@material-tailwind/react';
import { FC, PropsWithChildren } from 'react';
import { PokeBallIcon, StartIcon } from './svg/Svg';
import { useRouter } from 'next/router';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter();
  return (
    <section className="bg-red-900 text-blue-gray-50">
      <nav className="fixed inset-x-0 top-0 grid grid-rows-2 px-2 py-1 md:flex-row">
        <div
          onClick={() => router.push('/')}
          className="flex items-center gap-2 px-4 py-2 duration-100 rounded-lg select-none hover:bg-red-700 hover:shadow-md"
          role="button"
        >
          <PokeBallIcon />
          <span className="text-2xl font-bold">Pokedex</span>
        </div>
        <div
          onClick={() => router.push('/favorites')}
          className="flex items-center gap-2 px-4 py-2 duration-100 rounded-lg select-none hover:bg-red-700 hover:shadow-md"
          role="button"
        >
          {router.pathname === '/favorites' ? <StartIcon /> : <StartIcon />}
          <span className="text-2xl font-bold">Favorites</span>
        </div>
      </nav>
      {children}
    </section>
  );
};

export default Layout;
