import {FILMS_URI} from '../constants';
import {getResponseData} from '../getData';
import {createAsyncThunk} from '@reduxjs/toolkit';

export const fetchFilms$ = createAsyncThunk('films/fetchFilms', () => {
  return FILMS_URI.get('').then(getResponseData);
});
