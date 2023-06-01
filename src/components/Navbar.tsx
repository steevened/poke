import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';
import { PokeBallIcon, SearchIcon, StartIcon } from './svg/Svg';
import { Button } from '@material-tailwind/react';
import Image from 'next/image';

interface NavbarProps {}

interface Option {
  name: string;
  sprite: string;
}

const Navbar: FC<NavbarProps> = ({}) => {
  const [display, setDisplay] = useState(false);
  const [options, setOptions] = useState<Option[]>([]);
  const [search, setSearch] = useState('');

  const router = useRouter();

  useEffect(() => {
    const pokemon: Option[] = [];
    const promises = new Array(151)
      .fill(0)
      .map((_, i) => fetch(`https://pokeapi.co/api/v2/pokemon-form/${i + 1}`));
    Promise.all(promises).then((pokemonArr) => {
      return pokemonArr.map((res) =>
        res.json().then(({ name, sprites: { front_default: sprite } }) => {
          return pokemon.push({ name, sprite });
        })
      );
    });
    setOptions(pokemon);
  }, []);

  return (
    <nav className="absolute inset-x-0 top-0 grid grid-cols-4 grid-rows-2 gap-4 px-2 py-2 md:grid-rows-1 md:flex-row">
      <Button
        variant="text"
        color="white"
        onClick={() => router.push('/')}
        className="flex items-center justify-center col-span-2 gap-2 px-4 py-2 duration-100 rounded-lg select-none md:col-span-1 hover:bg-red-700 hover:shadow-md"
        role="button"
      >
        <PokeBallIcon />
        <span className="text-2xl font-bold">Pokedex</span>
      </Button>
      <Button
        variant="text"
        color="white"
        onClick={() => router.push('/favorites')}
        className="flex items-center justify-center col-span-2 gap-2 px-4 py-2 duration-100 rounded-lg select-none md:col-span-1 md:col-start-4 hover:bg-red-700 hover:shadow-md"
        role="button"
      >
        {router.pathname === '/favorites' ? <StartIcon solid /> : <StartIcon />}
        <span className="text-2xl font-bold">Favorites</span>
      </Button>
      <div className="relative col-span-4 md:col-span-2 md:col-start-2 md:row-start-1">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full h-full pl-16 rounded-full outline-none text-blue-gray-900"
          placeholder="Search Pokemon"
        />
        {search && (
          <ul className="absolute z-20 flex flex-col w-full gap-2 p-2 mt-2 rounded-md shadow-md bg-blue-gray-50">
            {options
              .filter(({ name }) => name.includes(search.toLowerCase()))
              .slice(0, 5)
              .map((v, i) => (
                <li
                  key={i}
                  onClick={() => {
                    setSearch('');
                    router.push(`/pokemon/${v.name}`);
                  }}
                  className="flex items-center justify-between px-4 duration-100 rounded-md cursor-pointer text-blue-gray-900 hover:bg-blue-gray-100"
                >
                  <span className="text-xl font-semibold capitalize">
                    {v.name}
                  </span>
                  <Image src={v.sprite} alt="pokemon" width={80} height={80} />
                </li>
              ))}
            {options.filter(({ name }) => name.includes(search.toLowerCase()))
              .length === 0 && (
              <li className="flex items-center justify-center px-4 text-xl font-semibold duration-100 rounded-md cursor-default py-[26px] text-blue-gray-900">
                No results
              </li>
            )}
          </ul>
        )}
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
  );
};

export default Navbar;
