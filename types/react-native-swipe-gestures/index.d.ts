// Type definitions for react-native-swipe-gestures 1.0
// Project: https://github.com/glepur/react-native-swipe-gestures
// Definitions by: Ian <https://github.com/ian-rudge>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { Component } from 'react';
import { PanResponderGestureState } from 'react-native';

export interface SwipeDirections {
  SWIPE_UP: 'SWIPE_UP';
  SWIPE_DOWN: 'SWIPE_DOWN';
  SWIPE_LEFT: 'SWIPE_LEFT';
  SWIPE_RIGHT: 'SWIPE_RIGHT';
}

export const swipeDirections: SwipeDirections;

export interface GestureRecognizerConfig {
  velocityThreshold?: number;
  directionalOffsetThreshold?: number;
  gestureIsClickThreshold?: number;
}

export interface GestureRecognizerProps {
  config?: GestureRecognizerConfig;
  onSwipe?: (gestureName: string, state: PanResponderGestureState) => void;
  onSwipeUp?: (state: PanResponderGestureState) => void;
  onSwipeDown?: (state: PanResponderGestureState) => void;
  onSwipeLeft?: (state: PanResponderGestureState) => void;
  onSwipeRight?: (state: PanResponderGestureState) => void;
}

export default class GestureRecognizer extends Component<GestureRecognizerProps> {}
