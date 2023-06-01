const toggleFavorite = (name: string) => {
  // console.log('toggleFavorite called');

  let favorites: string[] = JSON.parse(
    localStorage.getItem('favorites') || '[]'
  );

  if (favorites.includes(name)) {
    favorites = favorites.filter((pokeName) => pokeName !== name);
  } else {
    favorites.push(name);
  }

  localStorage.setItem('favorites', JSON.stringify(favorites));
};

const isOnFavorites = (name: string): boolean => {
  if (typeof window === 'undefined') return false;

  const favorites: string[] = JSON.parse(
    localStorage.getItem('favorites') || '[]'
  );

  return favorites.includes(name);
};

const pokemons = (): string[] => {
  return JSON.parse(localStorage.getItem('favorites') || '[]');
};

export default {
  toggleFavorite,
  isOnFavorites,
  pokemons,
};
