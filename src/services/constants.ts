import axios from 'axios';

export const baseURI = 'https://swapi.dev/api';

export const FILMS_URI = axios.create({
  baseURL: `${baseURI}/films`,
});
