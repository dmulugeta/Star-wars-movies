import {
  View,
  Text,
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  FlatList,
} from 'react-native';
import React from 'react';
import {Container} from '../../components';
import {styles} from './styles';
import Character from '../../components/Character';

interface IProps {
  navigation: any;
  route: {
    params: {
      filmDetail: IFilm;
    };
  };
}

export const Detail: React.FC<IProps> = ({navigation, route}) => {
  const {filmDetail} = route.params;
  const {title, director, opening_crawl, release_date, characters} = filmDetail;

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <Container hideStatusBar={true} containerStyle={styles.container}>
      <Pressable onPress={handleGoBack} style={styles.goBackContainer}>
        <Image
          style={styles.goBackImage}
          source={require('../../assets/images/icons/go-back.png')}
        />
      </Pressable>
      <ScrollView>
        <ImageBackground
          source={require('../../assets/images/cover-poster.jpg')}
          style={styles.ImageBg}
          blurRadius={20}>
          <Image
            style={styles.coverImage}
            source={require('../../assets/images/cover-poster.jpg')}
          />
          <View style={styles.detailContainer}>
            <Image
              style={styles.posterImage}
              source={require('../../assets/images/poster.jpg')}
            />
            <View style={styles.detailTextContainer}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.detail}>{release_date}</Text>
            </View>
            <View style={styles.filmDetails}>
              <Text style={styles.detail}>Director by {director}</Text>
              <FlatList
                data={characters}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => <Character />}
              />
              <Text style={styles.detail}>Story Line</Text>
              <Text style={styles.opening_crawl}>{opening_crawl}</Text>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </Container>
  );
};
