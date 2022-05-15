import {ms} from '../utility';

type weightType =
  | 'normal'
  | 'bold'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
  | undefined;

export const size = {
  h1: ms(30),
  h2: ms(25),
  h3: ms(20),
  h4: ms(18),
  h5: ms(16),
  h6: ms(14),
};

export const weight: {
  bold: weightType;
  light: weightType;
  medium: weightType;
  semiBold: weightType;
  regular: weightType;
} = {
  light: '300',
  medium: '500',
  regular: '600',
  semiBold: '700',
  bold: '800',
};
