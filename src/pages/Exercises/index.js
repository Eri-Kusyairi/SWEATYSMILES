import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import SearchBar from '../../../components/SearchBar';
import Slider from '../../../components/Slider';
import SLIDER1 from '../../assets/images/SLIDER1.jpeg';
import SLIDER2 from '../../assets/images/SLIDER2.jpeg';
import SLIDER3 from '../../assets/images/SLIDER3.jpeg';

const Exercises = () => {
  const [sliderImages] = useState([SLIDER1, SLIDER2, SLIDER3]);
  return (
    <ScrollView>
       <SearchBar/>

      <Slider images={sliderImages} />
      <Slider images={sliderImages} />
    </ScrollView>

  )
  }
export default Exercises
const styles = StyleSheet.create({})