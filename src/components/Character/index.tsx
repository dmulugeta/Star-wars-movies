import {View, Image} from 'react-native';
import React from 'react';
import {styles} from './styles';

const Character = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.avatar}
        source={require('../../assets/images/avatar.jpg')}
      />
    </View>
  );
};

export default Character;
