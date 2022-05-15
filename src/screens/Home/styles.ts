import {StyleSheet} from 'react-native';
import {COLORS} from '../../themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: COLORS.BLACK,
  },
  conditionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    color: COLORS.WHITE,
  },
});
