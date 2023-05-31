import { usePokemons } from '@/lib/hooks';
import { NextPageWithLayout } from './_app';
import Layout from '@/components/Layout';
import Image from 'next/image';
import PokemonCard from '@/components/PokemonCard';

const Home: NextPageWithLayout = () => {
  const { pokemons, error, isLoading } = usePokemons();

  // console.log(pokemons);
  return (
    <main className="mt-5 ">
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {pokemons?.map(({ name, url }) => (
          <PokemonCard key={url} name={name} url={url} />
        ))}
      </ul>
    </main>
  );
};

Home.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export default Home;
