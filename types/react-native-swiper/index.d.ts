// Type definitions for react-native-swiper 1.5
// Project: https://github.com/leecade/react-native-swiper#readme
// Definitions by: CaiHuan <https://github.com/CaiHuan>,  HuHuanming <https://github.com/huhuanming>,  mhcgrq <https://github.com/mhcgrq>,
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

import * as React from 'react';
import {
  ViewStyle,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';

export interface SwiperState {
  autoplayEnd: boolean;
  dir: 'x' | 'y';
  height: number;
  width: number;
  index: number;
  isScrolling: boolean;
  loopJump: boolean;
  offset: {
    x: number;
    y: number;
  };
  total: number;
}

type ScrollResponder = (
  event: NativeSyntheticEvent<NativeScrollEvent>,
  state: SwiperState,
  context: Swiper
) => void;

export interface SwiperProperties extends React.Props<Swiper> {
  horizontal?: boolean;

  style?: ViewStyle;

  pagingEnabled?: boolean;

  showsHorizontalScrollIndicator?: boolean;

  showsVerticalScrollIndicator?: boolean;

  bounces?: boolean;

  scrollsToTop?: boolean;

  scrollEnabled?: boolean;

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

  activeDot?: JSX.Element;

  dot?: JSX.Element;

  dotColor?: string;

  activeDotColor?: string;

  height?: number;

  width?: number;

  paginationStyle?: ViewStyle;

  buttonWrapperStyle?: ViewStyle;

  nextButton?: JSX.Element;

  prevButton?: JSX.Element;

  onScrollBeginDrag?: ScrollResponder;

  onMomentumScrollEnd?: ScrollResponder;

  onTouchStartCapture?: ScrollResponder;

  onTouchStart?: ScrollResponder;

  onTouchEnd?: ScrollResponder;

  onResponderRelease?: ScrollResponder;
}

export default class Swiper extends React.Component<SwiperProperties, SwiperState> {
}
