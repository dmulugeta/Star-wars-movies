import axios from 'axios';

import {getResponseData} from '../getData';
import {createAsyncThunk} from '@reduxjs/toolkit';

export const fetchCharacter$ = createAsyncThunk('films/fetchCharacter', uri => {
  return axios.get(`${uri}`).then(getResponseData);
});
