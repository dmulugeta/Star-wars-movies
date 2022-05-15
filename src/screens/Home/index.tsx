import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {fetchFilms$} from '../../services/films/fetchFilms';
import {AppDispatch, RootState} from '../../app/store';
import {Container, MovieCard} from '../../components';
import {FlatList, Text} from 'react-native';

export const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  const film = useSelector((state: RootState) => state?.films);

  useEffect(() => {
    dispatch(fetchFilms$());
  }, []);

  return (
    <Container>
      {film?.loading ? <Text>Loading...</Text> : null}
      {!film?.loading && film?.error ? (
        <Text>Error : {film?.error}</Text>
      ) : null}
      {!film?.loading && !film?.error ? (
        <FlatList
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          data={film?.films?.results}
          renderItem={({item}) => <MovieCard {...item} />}
        />
      ) : null}
    </Container>
  );
};
