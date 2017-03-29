// Type definitions for react-native-swiper 1.5
// Project: https://github.com/leecade/react-native-swiper#readme
// Definitions by: CaiHuan <https://github.com/CaiHuan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

import * as React from 'react';
import {
  ViewStyle
} from 'react-native';

interface SwiperProperties extends React.Props<Swiper> {
  horizontal?: boolean;

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

  loadMinimalLoader?: JSX.Element;

  loop?: boolean;

  autoplay?: boolean;

  autoplayTimeout?: number;

  autoplayDirection?: boolean;

  index?: number;

  renderPagination?(index: number, total: number, thisObject: Swiper): JSX.Element;

  dotStyle?: ViewStyle;

  activeDotStyle?: ViewStyle;

  dotColor?: string;

  activeDotColor?: string;
}

export default class Swiper extends React.Component<SwiperProperties, {}> {
}
