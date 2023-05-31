import { usePokemonByName } from '@/lib/hooks';
import Image from 'next/image';
import { FC } from 'react';

interface PokemonCardProps {
  name: string;
}

const PokemonCard: FC<PokemonCardProps> = ({ name }) => {
  const { error, isLoading, pokemon } = usePokemonByName(name);

  console.log(pokemon);

  return (
    <li className="flex items-center justify-between p-4 font-semibold rounded-md shadow-lg bg-blue-gray-50 text-blue-gray-900">
      <div>
        <p className="text-sm">Nº {pokemon?.id}</p>
        <h2 className="text-2xl capitalize">{pokemon?.name}</h2>
        <div className="flex gap-2">
          {pokemon?.types.map(({ type }) => (
            <span
              key={type.name}
              className="px-2 py-1 text-sm font-semibold text-red-900 capitalize bg-red-200 rounded-full"
            >
              {type.name}
            </span>
          ))}
        </div>
      </div>
      <div>
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon?.id}.svg`}
          alt={`pokemon ${pokemon?.name}`}
          width={200}
          height={200}
        />
      </div>
    </li>
  );
};

export default PokemonCard;
