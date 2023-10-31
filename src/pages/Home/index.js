import React, { useState } from 'react';
import { ScrollView, View, StyleSheet, ImageBackground, Dimensions, Text, Image } from 'react-native';
import SLIDER1 from '../../assets/images/SLIDER1.jpeg';
import SLIDER2 from '../../assets/images/SLIDER2.jpeg';
import SLIDER3 from '../../assets/images/SLIDER3.jpeg';
import SearchBar from '../../../components/SearchBar';
import Slider from '../../../components/Slider';
import Category from '../../../components/Category';

const Home = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [sliderImages] = useState([SLIDER1, SLIDER2, SLIDER3]);

  const handleSearch = (query) => {
    // Implement your search logic here and update searchResults state.
  };

  return (
    <ScrollView>
      
      <SearchBar onSearch={handleSearch} />

      <View style={styles.categoryContainer}>
        <Category iconName="bars" title="Menu" />
        <Category iconName="bars" title="Running" />
        <Category iconName="bars" title="Workout" />
        <Category iconName="user" title="User" />
      </View>

      <Slider images={sliderImages} />
      
      {/* Rest of your content */}
    </ScrollView>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  header: {
    width: windowWidth,
    height: windowHeight * 0.13,
    paddingHorizontal: 1,
    paddingTop: 18,
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default Home;
