import {
  View,
  Text,
  ScrollView,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../navigation/Navigation';
import useDetails from '../hooks/useDetails';
import Loading from '../components/Loading';
import Error from '../components/Error';
import Icons from 'react-native-vector-icons/Ionicons';
import Button from '../components/Button';

interface Props extends StackScreenProps<RootStackParams, 'DetailsScreen'> {}

const screenHeight = Dimensions.get('screen').height * 0.6;

export default function DetailsScreen({route, navigation}: Props) {
  const [changeColorIcon, setChangeColorIcon] = useState(false);
  const productItem = route.params;
  const {title, price, description, image, category, loading, error} =
    useDetails(productItem.id);

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}>
      <View style={styles.containerImage}>
        <Image
          source={{uri: image}}
          style={styles.image}
          resizeMode="contain"
        />

        <View style={styles.backButton}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.pop()}>
            <Icons name="arrow-back-outline" color="#444444" size={24} />
          </TouchableOpacity>
        </View>
        <View style={styles.favorite}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setChangeColorIcon(!changeColorIcon)}>
            <Icons
              name="heart"
              color={changeColorIcon ? 'red' : '#ccc'}
              size={24}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          flex: 1,
        }}>
        <Text numberOfLines={2} style={styles.title}>
          {title}
        </Text>
        <Text style={styles.category}>
          <Text>Type: </Text> {category}
        </Text>
        <Text style={styles.description}>Description:</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.price}>$ {price}</Text>
      </View>

      <View style={{flexDirection: 'row'}}>
        <Button
          title="Add cart"
          backgroundColor="#1F1F1F"
          nameIcon="cart-outline"
        />
        <Button title="Buy now" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  containerImage: {
    backgroundColor: '#fff',
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 10,
    height: screenHeight,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: screenHeight,
  },
  backButton: {
    position: 'absolute',
    left: 16,
    top: 18,
  },
  favorite: {
    position: 'absolute',
    top: 18,
    right: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#444444',
    marginHorizontal: 22,
    textAlign: 'center',
    marginVertical: 16,
  },
  category: {
    marginHorizontal: 16,
    color: '#444444',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: '#666666',
    fontWeight: '600',
    marginHorizontal: 16,
    marginBottom: 16,
    lineHeight: 20,
    opacity: 0.7,
  },
  price: {
    fontSize: 20,
    color: '#444444',
    fontWeight: 'bold',
    marginHorizontal: 16,
    marginBottom: 16,
  },
});
