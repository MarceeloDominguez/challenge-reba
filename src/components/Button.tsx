import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import Icons from 'react-native-vector-icons/Ionicons';

interface Props {
  title: string;
  backgroundColor?: string;
  nameIcon?: string;
  style?: {};
}

export default function Button({
  title,
  nameIcon,
  backgroundColor = '#00B074',
  style,
}: Props) {
  return (
    <TouchableOpacity style={{flex: 1}} activeOpacity={0.5}>
      <View
        style={[{backgroundColor: backgroundColor}, style, styles.container]}>
        <Text style={styles.title}>{title}</Text>
        <Icons name={nameIcon as any} size={24} style={styles.icon} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginBottom: 26,
    paddingVertical: 14,
    borderRadius: 6,
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  icon: {
    position: 'absolute',
    top: 10,
    left: 20,
    color: '#fff',
  },
});
