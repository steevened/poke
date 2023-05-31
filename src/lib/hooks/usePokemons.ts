import useSWR from 'swr';
import {
  PokemonItemResponse,
  PokemonsResponse,
} from '../interface/pokemons.interface';

const usePokemons = (offset = 0) => {
  const { data, error, isLoading } = useSWR<PokemonsResponse>(
    `/pokemon?offset=${offset}&limit=20`
  );

  return {
    pokemons: data,
    error,
    isLoading,
  };
};

const usePokemonByName = (name: string) => {
  const { data, error, isLoading } = useSWR<PokemonItemResponse>(
    `/pokemon/${name}`
  );

  return {
    pokemon: data,
    error,
    isLoading,
  };
};

const usePokemonTypes = (name: string) => {
  const { data, error, isLoading } = useSWR(`/type/${name}/`);
};

export { usePokemons, usePokemonByName, usePokemonTypes };
