import { FC, useEffect, useState } from 'react';
import { NextPageWithLayout } from '../_app';
import Layout from '@/components/Layout';
import localFavorites from '@/lib/utils/localFavorites';
import PokemonCard from '@/components/PokemonCard';

// interface indexProps {}

const FavoritesPage: NextPageWithLayout = ({}) => {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    setFavorites(localFavorites.pokemons);
  }, []);

  console.log(favorites);

  return (
    <div className="py-5 min-h-[calc(100vh-128px)] md:min-h-[calc(100vh-65px)] h-full">
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 grow">
        {favorites.map((name) => (
          <PokemonCard key={name} name={name} />
        ))}
      </ul>
    </div>
  );
};

FavoritesPage.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export default FavoritesPage;
