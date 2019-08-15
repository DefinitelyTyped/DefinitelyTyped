import * as React from 'react';
import { View } from 'react-native';
import SvgUri from 'react-native-svg-uri';

const TestSvgUri = () => (
  <View>
    <SvgUri
      width="200"
      height="200"
      source={{ uri: 'http://thenewcode.com/assets/images/thumbnails/homer-simpson.svg' }}
    />
  </View>
);
