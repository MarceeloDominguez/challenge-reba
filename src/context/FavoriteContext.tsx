import React, {createContext, useContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type FavoritesType = {
  toggleFavorite: (id: number) => void;
  isFavorite: (id: number) => boolean;
};
export const FavoritesContext = createContext<FavoritesType>(
  {} as FavoritesType,
);

export default function FavoriteContext({children}: any) {
  const [ids, setIds] = useState<number[]>([]);

  useEffect(() => {
    (async () => {
      const data = await AsyncStorage.getItem('favorites');
      if (data) {
        const parseData = JSON.parse(data);
        setIds(parseData);
      }
    })();
  }, []);

  useEffect(() => {
    const stringifyIds = JSON.stringify(ids);
    AsyncStorage.setItem('favorites', stringifyIds);
  }, [ids]);

  const removeFavorite = (id: number) => {
    const tempIds = ids.filter(i => i !== id);
    setIds(tempIds);
  };

  const isFavorite = (id: number) => {
    return ids.some(i => i === id);
  };

  const toggleFavorite = (id: number) => {
    if (isFavorite(id)) {
      removeFavorite(id);
    } else {
      setIds([...ids, id]);
    }
  };

  return (
    <FavoritesContext.Provider
      value={{
        toggleFavorite,
        isFavorite,
      }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export const useFavoriteContext = () => useContext(FavoritesContext);
