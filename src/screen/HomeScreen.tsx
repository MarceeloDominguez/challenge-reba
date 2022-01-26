import React from 'react';
import {View, FlatList, StatusBar} from 'react-native';
import useProducts from '../hooks/useProducts';
import ProductItems from '../components/ProductItems';
import Loading from '../components/Loading';
import Error from '../components/Error';

export default function HomeScreen() {
  const {listProducts, loading, error} = useProducts();

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <View>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <FlatList
        data={listProducts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => <ProductItems item={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
