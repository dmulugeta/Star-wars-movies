import {View, Text, Pressable, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {styles} from './styles';

export const MovieCard: React.FC<IFilm> = param => {
  const {title, release_date} = param;

  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Detail', {
      filmDetail: param,
    });
  };

  return (
    <Pressable onPress={handlePress} style={styles.container}>
      <Image
        style={styles.posterImage}
        resizeMode="cover"
        source={require('../../assets/images/cover-poster.jpg')}
      />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{release_date}</Text>
      </View>
    </Pressable>
  );
};
