import {StyleSheet} from 'react-native';
import {ms} from '../../utility';

export const styles = StyleSheet.create({
  container: {
    width: ms(50),
    height: ms(50),
    borderRadius: ms(25),
    backgroundColor: '#fff',
    margin: ms(10),
  },
  avatar: {
    width: '100%',
    height: '100%',
    borderRadius: ms(25),
  },
});
