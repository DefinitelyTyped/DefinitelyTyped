import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ViewStyle
} from 'react-native';
import Swiper from 'react-native-swiper';

class SwiperTest extends React.Component<{}, {}> {
  constructor(props: {}) {
    super(props);
  }

  render(): React.ReactElement<any> {
    return (
      <Swiper
        style={styles.wrapper}>
        <View
          style={styles.slide1}>
          <Text style={styles.text}>Hello Swiper</Text>
        </View>
        <View
          style={styles.slide2}>
          <Text style={styles.text}>Beautiful</Text>
        </View>
        <View
          style={styles.slide3}>
          <Text>And Simple</Text>
        </View>
      </Swiper>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
  } as ViewStyle,
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  } as ViewStyle,
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  } as ViewStyle,
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  } as ViewStyle,
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  } as ViewStyle
});
