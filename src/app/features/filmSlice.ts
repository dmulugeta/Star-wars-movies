import {createSlice} from '@reduxjs/toolkit';
import {fetchFilms$} from '../../services/films/fetchFilms';

export interface IFilmState {
  films: IFilms;
  loading: boolean;
  error?: string;
}

const initialState: IFilmState = {
  films: {
    count: 0,
    next: '',
    previous: '',
    results: [],
  },
  loading: false,
  error: '',
};

const filmSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchFilms$.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchFilms$.fulfilled, (state, action) => {
      state.films = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchFilms$.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });
  },
});

export default filmSlice.reducer;
