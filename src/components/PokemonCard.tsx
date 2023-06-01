import { usePokemonByName } from '@/lib/hooks';
import Image from 'next/image';
import { FC, MouseEventHandler, useState } from 'react';
import { BigPokeBallIcon, StartIcon } from './svg/Svg';
import { useRouter } from 'next/router';
import defaultImage from '/public/image.png';
import localFavorites from '@/lib/utils/localFavorites';

interface PokemonCardProps {
  name: string;
}

interface IType {
  [key: string]: { name: string; color: string };
}

export const Type: IType = {
  normal: { name: 'normal', color: '#AAA67F' },
  fighting: { name: 'fighting', color: '#C12239' },
  flying: { name: 'flying', color: '#A891EC' },
  poison: { name: 'poison', color: '#A43E9E' },
  ground: { name: 'ground', color: '#DEC16B' },
  rock: { name: 'rock', color: '#B9A156' },
  bug: { name: 'bug', color: '#A7B723' },
  ghost: { name: 'ghost', color: '#70559B' },
  steel: { name: 'steel', color: '#B7B9D0' },
  fire: { name: 'fire', color: '#F57D31' },
  water: { name: 'water', color: '#6493EB' },
  grass: { name: 'grass', color: '#74CB48' },
  electric: { name: 'electric', color: '#F9CF30' },
  psychic: { name: 'psychic', color: '#FB5584' },
  ice: { name: 'ice', color: '#9AD6DF' },
  dragon: { name: 'dragon', color: '#7037FF' },
  dark: { name: 'dark', color: '#75574C' },
  fairy: { name: 'fairy', color: '#E69EAC' },
  unknown: { name: 'unknown', color: '#FFFFFF' },
  shadow: { name: 'shadow', color: '#000000' },
};

const PokemonCard: FC<PokemonCardProps> = ({ name }) => {
  const [isInFavorites, setIsInFavorites] = useState(
    localFavorites.isOnFavorites(name)
  );

  const router = useRouter();

  const { pokemon, error, isLoading } = usePokemonByName(name);

  const onToggleFavorite = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    localFavorites.toggleFavorite(name);
    setIsInFavorites(!isInFavorites);

    if (isInFavorites) return;

    // confetti({
    //   zIndex: 999,
    //   particleCount: 100,
    //   spread: 200,
    //   angle: -100,
    //   origin: { x: 0.9, y: 0.2 },
    // });
  };

  return (
    <li
      role="button"
      onClick={() => router.push(`/pokemon/${name}`)}
      className="flex h-full min-h-[192px] max-h-56 items-center justify-between p-4 font-semibold rounded-md shadow-lg bg-blue-gray-50 text-blue-gray-900 relative hover:scale-105 hover:shadow-2xl hover:shadow-black/50 duration-100"
    >
      <div className="flex flex-col justify-between h-full">
        <div>
          <div>
            <p className="text-sm">Nº {pokemon?.id}</p>
            <h2 className="text-2xl capitalize">{name}</h2>
          </div>
          <div>
            <p className="text-sm">Types</p>
            <div className="flex gap-2 mt-2">
              {pokemon?.types?.map(({ type }) => (
                <span
                  key={type.name}
                  style={{
                    backgroundColor: Type[type.name].color,
                  }}
                  className={` text-white px-2 py-1 rounded-md capitalize`}
                >
                  {type.name}
                </span>
              ))}
            </div>
          </div>
        </div>
        <button
          onClick={onToggleFavorite}
          className="p-1 text-red-900 duration-100 w-min hover:scale-110 active:scale-100 active:animate-ping"
        >
          <StartIcon solid={isInFavorites} />
        </button>
      </div>
      <div>
        <Image
          src={
            pokemon?.sprites?.other?.['official-artwork'].front_default ||
            defaultImage
          }
          alt={`pokemon ${name}`}
          width={150}
          height={150}
          className={`${
            !pokemon?.sprites?.other?.['official-artwork'].front_default
              ? 'animate-pulse'
              : ''
          }`}
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
        <BigPokeBallIcon />
      </div>
    </li>
  );
};

export default PokemonCard;
