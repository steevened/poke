import { usePokemonByName } from '@/lib/hooks';
import Image from 'next/image';
import { FC, useState } from 'react';
import { BigPokeBallIcon, PokeBallIcon, StartIcon } from './svg/Svg';

interface PokemonCardProps {
  name: string;
  url: string;
}

const PokemonCard: FC<PokemonCardProps> = ({ name, url }) => {
  const [pokemonId] = useState(url.split('/')[url.split('/').length - 2]);

  return (
    <li className="flex items-center justify-between p-4 font-semibold rounded-md shadow-lg bg-blue-gray-50 text-blue-gray-900 relative">
      <div className="h-full flex flex-col justify-between">
        <div>
          <p className="text-sm">Nº {pokemonId}</p>
          <h2 className="text-2xl capitalize">{name}</h2>
        </div>
        <button className="text-red-900 w-min p-1">
          <StartIcon />
        </button>
      </div>
      <div>
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
          alt={`pokemon ${name}`}
          width={150}
          height={150}
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
        <BigPokeBallIcon />
      </div>
    </li>
  );
};

export default PokemonCard;
