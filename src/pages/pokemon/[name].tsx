import { FC, MouseEvent, useState } from 'react';
import { NextPageWithLayout } from '../_app';
import Layout from '@/components/Layout';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import { PokemonItemResponse } from '@/lib/interface/pokemons.interface';
import { Button, Carousel, Tooltip } from '@material-tailwind/react';
import Image from 'next/image';
import {
  ArrowIcon,
  HeightIcon,
  StartIcon,
  WeightIcon,
} from '@/components/svg/Svg';
import { Type } from '@/components/PokemonCard';
import localFavorites from '@/lib/utils/localFavorites';
import defaultImage from '/public/image.png';
import { usePokemonByName } from '@/lib/hooks';

// interface Props {
//   pokemon: PokemonItemResponse;
// }

const PokemonPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { name } = router.query;

  const { pokemon, error, isLoading } = usePokemonByName(name as string);
  // console.log(pokemon);

  const [isInFavorites, setIsInFavorites] = useState(
    localFavorites.isOnFavorites(pokemon?.name || '')
  );

  const onToggleFavorite = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    localFavorites.toggleFavorite(pokemon?.name || '');
    setIsInFavorites(!isInFavorites);

    if (isInFavorites) return;
  };
  if (isLoading || !pokemon)
    return (
      <div className="min-h-[calc(100vh-128px)] md:min-h-[calc(100vh-65px)] h-full py-5">
        Loading...
      </div>
    );

  return (
    <div className="min-h-[calc(100vh-128px)] md:min-h-[calc(100vh-65px)] h-full py-5">
      <div className="flex items-center justify-between mt-5 font-bold text ">
        <Button
          size="sm"
          variant="text"
          color="white"
          onClick={() => router.back()}
        >
          <ArrowIcon />
        </Button>
        <h2 className="text-3xl capitalize">{pokemon?.name}</h2>
        <button
          onClick={onToggleFavorite}
          className="p-1 duration-100 text-blue-gray-50 w-min hover:scale-110"
        >
          <StartIcon solid={isInFavorites} />
        </button>
      </div>
      <div className="relative z-50 flex items-center w-full max-w-2xl mx-auto">
        <Carousel
          className=""
          transition={{ duration: 0.5 }}
          autoplay
          navigation={false as any}
        >
          {Object.keys(pokemon.sprites.other!['official-artwork']).map(
            (key) => (
              <Image
                key={key}
                src={
                  pokemon.sprites.other?.['official-artwork'][
                    key as keyof (typeof pokemon.sprites.other)['official-artwork']
                  ]! || defaultImage
                }
                alt="pokemon"
                width={300}
                height={300}
                className="flex object-contain mx-auto "
              />
            )
          )}
        </Carousel>
      </div>

      <div className="z-0 p-5 rounded-md pt-14 -translate-y-14 bg-blue-gray-50 text-blue-gray-900">
        <div className="flex items-center justify-center gap-5 ">
          {pokemon.types.map(({ type }) => (
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

        <div className="grid grid-cols-2 gap-5 mt-5 ">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-blue-gray-700">
              <WeightIcon />
              <span>Weight</span>
            </div>
            <div className="p-3 text-center bg-white rounded-md shadow-md text-blue-gray-700">
              {pokemon.weight} KG
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-blue-gray-700">
              <HeightIcon />
              <span>Height</span>
            </div>
            <div className="p-3 text-center bg-white rounded-md shadow-md text-blue-gray-700">
              {pokemon.height.toString().length > 1
                ? pokemon.height.toString().slice(0, 1) +
                  '.' +
                  pokemon.height.toString().slice(1)
                : '0.' + pokemon.height}{' '}
              M
            </div>
          </div>
        </div>
        <div className="mt-5 text-lg font-bold text-center">
          <h3>Base Stats</h3>
          <div className="mt-5 space-y-2">
            {pokemon.stats.map(({ base_stat, stat }, i) => (
              <Tooltip content={`${base_stat}%`} key={i}>
                <div className="flex flex-col items-start gap-2 p-2 text-sm duration-100 bg-white rounded-md shadow-md text-blue-gray-700 hover:scale-105">
                  <span className="capitalize">{stat.name}</span>

                  <div className="relative w-full h-2 rounded-full bg-blue-gray-200">
                    <span
                      className={`absolute top-0 left-0 h-full rounded-full ${
                        base_stat > 50
                          ? 'bg-green-500'
                          : base_stat > 30
                          ? 'bg-yellow-500'
                          : 'bg-red-500'
                      }`}
                      style={{
                        width: base_stat > 100 ? '100%' : `${base_stat}%`,
                      }}
                    />
                  </div>
                </div>
              </Tooltip>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// export const getServerSideProps: GetServerSideProps = async ({ params }) => {
//   const { name } = params as { name: string };
//   const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
//   const pokemon = await res.json();

//   if (!pokemon) {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: {
//       pokemon,
//     },
//   };
// };

PokemonPage.getLayout = (page) => {
  console.log(page);
  return <Layout title={page.props.pokemon?.name}>{page}</Layout>;
};

export default PokemonPage;
