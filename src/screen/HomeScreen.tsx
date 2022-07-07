import React from 'react';
import {View, FlatList, StatusBar} from 'react-native';
import useProducts from '../hooks/useProducts';
import ProductItems from '../components/ProductItems';
import Loading from '../components/Loading';
import Error from '../components/Error';
import {useFavoriteContext} from '../context/FavoriteContext';

export default function HomeScreen() {
  const {listProducts, loading, error} = useProducts();
  const {isFavorite} = useFavoriteContext();

  const orderedList = listProducts?.sort((a, b) =>
    isFavorite(a.id) > isFavorite(b.id) ? -1 : 0,
  );

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <View>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <FlatList
        data={orderedList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => <ProductItems item={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
