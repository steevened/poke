import useSWR from 'swr';
import {
  PokemonItemResponse,
  PokemonsResponse,
  RelatedResponse,
  SpecieResponse,
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

const usePokemonBySpecie = (id: number) => {
  const { data, error, isLoading } = useSWR<SpecieResponse>(
    id ? `/pokemon-species/${id}/` : null
  );

  return {
    specie: data,
    error,
    isLoading,
  };
};

const useRelatedPokemons = (name?: string) => {
  const { data, error, isLoading } = useSWR<RelatedResponse>(
    name ? `/egg-group/${name}` : null
  );

  return {
    related: data,
    error,
    isLoading,
  };
};

export {
  usePokemons,
  usePokemonByName,
  usePokemonBySpecie,
  useRelatedPokemons,
};
