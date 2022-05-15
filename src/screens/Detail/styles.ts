import {StyleSheet} from 'react-native';
import {COLORS} from '../../themes';
import {size, weight} from '../../themes/fonts';
import {ms, s, vs} from '../../utility';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 0,
  },
  coverImage: {
    width: '100%',
    height: vs(240),
  },
  ImageBg: {
    flex: 1,
  },
  detailContainer: {
    flex: 1,
    marginBottom: ms(20),
  },
  posterImage: {
    position: 'absolute',
    top: -ms(60),
    left: ms(30),
    width: s(110),
    height: vs(150),
    borderRadius: s(4),
  },
  goBackContainer: {
    position: 'absolute',
    zIndex: 1,
    top: ms(20),
    left: ms(20),
    borderRadius: s(20),
    backgroundColor: COLORS.GREY,
    opacity: 0.6,
    width: s(35),
    height: s(35),
    justifyContent: 'center',
    alignItems: 'center',
  },
  goBackImage: {
    width: s(30),
    height: s(20),
  },
  detailTextContainer: {
    paddingLeft: ms(160),
    marginTop: vs(10),
  },
  title: {
    fontSize: size.h3,
    fontWeight: weight.medium,
    color: 'white',
    marginBottom: ms(4),
  },
  detail: {
    fontSize: size.h5,
    fontWeight: weight.regular,
    color: 'white',
    opacity: 0.8,
  },
  opening_crawl: {
    fontSize: size.h6,
    fontWeight: weight.regular,
    color: 'white',
    opacity: 0.8,
    marginTop: ms(10),
    textAlign: 'justify',
  },
  filmDetails: {
    flex: 1,
    marginTop: ms(60),
    marginHorizontal: ms(30),
  },
});
