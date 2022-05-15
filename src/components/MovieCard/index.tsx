import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {styles} from './styles';

export const MovieCard: React.FC<IFilm> = param => {
  const {title, release_date} = param;
  return (
    <Pressable style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{release_date}</Text>
    </Pressable>
  );
};
