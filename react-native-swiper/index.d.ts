// Type definitions for react-native-swiper 1.5
// Project: https://github.com/leecade/react-native-swiper#readme
// Definitions by: CaiHuan <https://github.com/CaiHuan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from 'react';
import {
  ViewStyle
} from 'react-native';

interface SwiperProperties {

  horizontal?: boolean;

  children?: React.ReactElement<any>;

  style?: ViewStyle;

  pagingEnabled?: boolean;

  showsHorizontalScrollIndicator?: boolean;

  showsVerticalScrollIndicator?: boolean;

  bounces?: boolean;

  scrollsToTop?: boolean;

  removeClippedSubviews?: boolean;

  automaticallyAdjustContentInsets?: boolean;

  showsPagination?: boolean;

  showsButtons?: boolean;

  loadMinimal?: boolean;

  loadMinimalSize?: number;

  loadMinimalLoader?: React.ReactElement<any>;

  loop?: boolean;

  autoplay?: boolean;

  autoplayTimeout?: number;

  autoplayDirection?: boolean;

  index?: number;

  renderPagination?: (index: number, total: number, thisObject: SwiperStatic) => React.ReactElement<any>;

  dotStyle?: ViewStyle;

  activeDotStyle?: ViewStyle;

  dotColor?: string;

  activeDotColor?: string;
}


interface SwiperStatic extends React.ComponentClass<SwiperProperties> {
}

declare const Swiper: SwiperStatic;
declare type Swiper = SwiperStatic;

export default Swiper;