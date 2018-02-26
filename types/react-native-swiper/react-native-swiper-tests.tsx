import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ViewStyle,
  NativeSyntheticEvent,
  NativeScrollEvent
} from 'react-native';
import Swiper, { SwiperState } from 'react-native-swiper';

class SwiperTest extends React.Component {
  constructor(props: {}) {
    super(props);
  }
  callback = (
    event: NativeSyntheticEvent<NativeScrollEvent>,
    state: SwiperState,
    context: Swiper
  ) => {
    console.log(this.callback.name, event, state, context);
  }
  render(): React.ReactElement<any> {
    return (
      <Swiper
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator
        showsVerticalScrollIndicator
        bounces
        scrollsToTop
        scrollEnabled
        removeClippedSubviews
        automaticallyAdjustContentInsets
        showsPagination
        showsButtons
        loadMinimal
        loadMinimalSize={1}
        loop
        autoplay
        autoplayTimeout={300}
        autoplayDirection
        renderPagination={() => (<View />)}
        height={100}
        width={200}
        nextButton={<View><Text>NEXT</Text></View>}
        prevButton={<View><Text>PREV</Text></View>}
        onScrollBeginDrag={this.callback}
        onMomentumScrollEnd={this.callback}
        onTouchStartCapture={this.callback}
        onTouchStart={this.callback}
        onTouchEnd={this.callback}
        onResponderRelease={this.callback}
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
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
});
