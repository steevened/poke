import useSWR from 'swr';
import {
  PokemonItemResponse,
  PokemonsResponse,
} from '../interface/pokemons.interface';

const usePokemons = (offset = 0, limit = 20) => {
  const { data, error, isLoading } = useSWR<PokemonsResponse>(
    `/pokemon?offset=${offset}&limit=${limit}`
  );

  return {
    pokemons: data?.results,
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

export { usePokemons, usePokemonByName };
