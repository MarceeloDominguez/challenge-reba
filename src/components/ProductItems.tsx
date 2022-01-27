import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React, {useState} from 'react';
import {Products} from '../interfaces/productsInterfaces';
import {CommonActions, useNavigation} from '@react-navigation/native';
import Icons from 'react-native-vector-icons/Ionicons';

interface Props {
  item: Products;
  onPressFavorite: (id: number) => void;
  favorite: boolean;
}

export default function ProductItems({item, onPressFavorite, favorite}: Props) {
  const {title, image, price, id} = item;
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.container}
      onPress={() =>
        navigation.dispatch(CommonActions.navigate('DetailsScreen', item))
      }>
      <View style={{flexDirection: 'row'}}>
        <Image
          source={{uri: image}}
          style={styles.image}
          resizeMode="contain"
        />

        <View style={styles.containerInfo}>
          <Text style={styles.title} numberOfLines={2}>
            {title}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              flex: 1,
            }}>
            <Text style={styles.price}>$ {price}</Text>
            <TouchableOpacity
              onPress={() => {
                onPressFavorite(id);
              }}
              style={{
                alignSelf: 'flex-end',
              }}>
              <Icons name="heart" color={favorite ? 'red' : '#ccc'} size={24} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginVertical: 10,
    marginHorizontal: 16,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 4,
  },
  image: {
    width: 100,
    height: 100,
  },
  containerInfo: {
    flex: 1,
    marginLeft: 16,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666666',
  },
  price: {
    fontSize: 18,
    textAlignVertical: 'bottom',
    flex: 1,
    color: '#444444',
    fontWeight: 'bold',
  },
});
