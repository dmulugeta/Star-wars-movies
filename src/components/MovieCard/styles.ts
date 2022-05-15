import {StyleSheet} from 'react-native';
import {COLORS} from '../../themes';
import {weight, size} from '../../themes/fonts';
import {vs} from '../../utility';

export const styles = StyleSheet.create({
  container: {
    height: vs(140),
    marginBottom: vs(20),
    borderRadius: 10,
    backgroundColor: COLORS.WHITE,
  },
  title: {
    fontSize: size.h4,
    color: COLORS.WHITE,
    fontWeight: weight.bold,
  },
  date: {
    fontSize: size.h5,
    color: COLORS.WHITE,
    fontWeight: weight.medium,
    marginTop: vs(10),
  },
  posterImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  content: {
    padding: vs(10),
  },
});
