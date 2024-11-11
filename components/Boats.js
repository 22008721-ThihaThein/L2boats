import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

const Boats = ({ name, description, icon_name, poster }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name={icon_name} size={20} color="#B23B23" style={styles.icon} />
        <Text style={styles.title}>{name}</Text>
      </View>
      <Text style={styles.description}>{description}</Text>
      <Image source={poster} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  icon: {
    marginRight: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
  },
  image: {
    width: 400,
    height: 500,
    resizeMode: 'cover',
  },
});

export default Boats;
