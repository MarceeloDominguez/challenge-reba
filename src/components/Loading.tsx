import {View, ActivityIndicator, StyleSheet} from 'react-native';
import React from 'react';

export default function Loading() {
  return (
    <View style={styles.loading}>
      <ActivityIndicator color="#00B074" size={30} />
    </View>
  );
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
  },
});
