import React from 'react';
import {View, FlatList, StatusBar} from 'react-native';
import useProducts from '../hooks/useProducts';
import ProductItems from '../components/ProductItems';
import Loading from '../components/Loading';
import Error from '../components/Error';
import {useFavoriteContext} from '../context/FavoriteContext';

export default function HomeScreen() {
  const {listProducts, loading, error} = useProducts();

  const {isFavorite, toggleFavorite} = useFavoriteContext();

  const favorites = listProducts?.filter(p => isFavorite(p.id));
  const noFavorites = listProducts?.filter(p => !isFavorite(p.id));

  const allProducts = favorites?.concat(noFavorites ?? []);

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <View>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <FlatList
        data={allProducts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <ProductItems
            item={item}
            onPressFavorite={toggleFavorite}
            favorite={isFavorite(item.id)}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
