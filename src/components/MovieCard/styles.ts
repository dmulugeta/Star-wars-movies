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
    padding: vs(10),
  },
  title: {
    fontSize: size.h4,
    color: COLORS.BLACK,
    fontWeight: weight.bold,
  },
  date: {
    fontSize: size.h5,
    color: COLORS.BLACK,
    fontWeight: weight.medium,
    marginTop: vs(10),
  },
});
