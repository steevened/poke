import { usePokemons } from '@/lib/hooks';
import { NextPageWithLayout } from './_app';
import Layout from '@/components/Layout';
import PokemonCard from '@/components/PokemonCard';
import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Button } from '@material-tailwind/react';
import { ArrowIcon, BigPokeBallIcon } from '@/components/svg/Svg';

const Home: NextPageWithLayout = () => {
  const [offset, setOffset] = useState(0);
  const { pokemons, error, isLoading } = usePokemons(offset);

  const handlePageChange = (data: { selected: number }) => {
    setOffset(data.selected * 20);
  };

  if (isLoading || !pokemons)
    return (
      <div className="min-h-[calc(100vh-128px)] md:min-h-[calc(100vh-65px)] h-full py-5 flex items-center justify-center">
        <div className="animate-spin">
          <BigPokeBallIcon />
        </div>
      </div>
    );

  return (
    <main className="py-5 min-h-[calc(100vh-128px)] md:min-h-[calc(100vh-65px)] h-full flex flex-col">
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 grow">
        {pokemons?.results?.map(({ name, url }) => (
          <PokemonCard key={url} name={name} />
        ))}
      </ul>
      <div className="mt-5 ">
        <ReactPaginate
          pageCount={pokemons ? pokemons?.count / 20 : 65}
          containerClassName="flex justify-center items-center mx-auto sm:gap-1"
          activeClassName="bg-white text-blue-900 hover:bg-white shadow-lg"
          onPageChange={handlePageChange}
          // breakClassName="white"
          breakLinkClassName="pointer-events-none"
          pageClassName="text-center leading-8 w-8 h-8 rounded-md font-bold hover:bg-red-700 duration-200 hover:shadow-lg"
          breakLabel={
            <Button
              variant="text"
              size="sm"
              color="white"
              className="flex items-center justify-center w-8 h-8 rounded-md"
            >
              ...
            </Button>
          }
          previousLabel={
            <Button
              size="sm"
              variant="text"
              color="white"
              disabled={offset === 0}
              className={`flex items-center `}
            >
              <ArrowIcon />
              <span className="hidden sm:block">Previous</span>
            </Button>
          }
          nextLabel={
            <Button
              size="sm"
              variant="text"
              color="white"
              disabled={pokemons ? offset > pokemons?.count - 20 : false}
              className={`flex items-center `}
            >
              <span className="hidden sm:block">Next</span>
              <ArrowIcon rotate />
            </Button>
          }
        />
      </div>
    </main>
  );
};

Home.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export default Home;
