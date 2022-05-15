import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {fetchFilms$} from '../../services/films/fetchFilms';
import {AppDispatch, RootState} from '../../app/store';
import {Container, MovieCard} from '../../components';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import {styles} from './styles';
import {COLORS, FlexCenter} from '../../themes';

export const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  const film = useSelector((state: RootState) => state?.films);

  useEffect(() => {
    dispatch(fetchFilms$());
  }, []);

  return (
    <Container>
      {film?.loading ? (
        <View style={styles.conditionContainer}>
          <ActivityIndicator size="large" color={COLORS.WHITE} />
          <Text style={styles.textStyle}>Loading...</Text>
        </View>
      ) : null}
      {!film?.loading && film?.error ? (
        <View style={styles.conditionContainer}>
          <Text>Error : {film?.error}</Text>
        </View>
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
