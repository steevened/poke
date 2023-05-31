import { usePokemonByName } from '@/lib/hooks';
import Image from 'next/image';
import { FC, useState } from 'react';

interface PokemonCardProps {
  name: string;
  url: string;
}

const PokemonCard: FC<PokemonCardProps> = ({ name, url }) => {
  // const { error, isLoading, pokemon } = usePokemonByName(name);
  const [pokemonId] = useState(url.split('/')[url.split('/').length - 2]);

  console.log(url.split('/')[url.split('/').length - 2]);
  return (
    <li className="flex items-center justify-between p-4 font-semibold rounded-md shadow-lg bg-blue-gray-50 text-blue-gray-900">
      <div>
        <p className="text-sm">Nº {pokemonId}</p>
        <h2 className="text-2xl capitalize">{name}</h2>
        {/* <div className="flex gap-2">
          {pokemon?.types.map(({ type }) => (
            <span
              key={type.name}
              className="px-2 py-1 text-sm font-semibold text-red-900 capitalize bg-red-200 rounded-full"
            >
              {type.name}
            </span>
          ))}
        </div> */}
      </div>
      <div>
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
          alt={`pokemon ${name}`}
          width={150}
          height={150}
        />
      </div>
    </li>
  );
};

export default PokemonCard;
