// Type definitions for react-native-image-gallery 2.1
// Project: https://github.com/archriss/react-native-image-gallery#readme
// Definitions by: Shirsh Zibbu <https://github.com/zhirzh>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { PureComponent, ReactNode } from 'react';
import { FlatListProps as _FlatListProps, ImageProps, StyleProp, ViewProps, ViewStyle } from 'react-native';

export interface ImageDimensions {
    width: number;
    height: number;
}

export interface LocalImage {
    source: number;
    dimensions: ImageDimensions;
}

export interface RemoteImage {
    source: { uri: string };
    dimensions?: ImageDimensions;
}

export type Image = LocalImage | RemoteImage;

export enum ScrollState {
    IDLE = 'idle',
    DRAGGING = 'dragging',
    SETTLING = 'settling',
}

export interface ScrollEvent {
    position: number;
    offset: number;
    fraction: number;
}

export interface GestureState {
    moveX: number;
    moveY: number;
    previousMoveX: number;
    previousMoveY: number;
    pinch?: number;
    previousPinch?: number;

    x0: number;
    y0: number;
    dx: number;
    dy: number;
    vx: number;
    vy: number;

    numberActiveTouches: number;
    singleTapUp: boolean;
    doubleTapUp: boolean;

    _accountsForMovesUpTo: number;
    _singleTabFailed?: boolean;
}

export type FlatListProps = Omit<
    _FlatListProps<Image>,
    | 'style'
    | 'ref'
    | 'keyExtractor'
    | 'scrollEnabled'
    | 'horizontal'
    | 'data'
    | 'renderItem'
    | 'onLayout'
    | 'contentOffset'
>;

export interface Props extends ViewProps {
    /**
     * Your array of images
     */
    images: Image[];

    /**
     * Image displayed first
     * @default 0
     */
    initialPage?: number;

    /**
     * Custom function to render your images, 1st param is the image props, 2nd is its dimensions
     */
    imageComponent?: (imageProps: ImageProps, imageDimensions: ImageDimensions) => ReactNode;

    /**
     * Custom function to render the page of an image that couldn't be displayed
     */
    errorComponent?: () => ReactNode;

    /**
     * Props to be passed to the underlying FlatList
     * @default { windowSize: 3 }
     */
    flatListProps?: FlatListProps;

    /**
     * Blank space to show between images
     */
    pageMargin?: number;

    /**
     * Fired with the index of page that has been selected
     */
    onPageSelected?: (page: number) => void;

    /**
     * Called when page scrolling state has changed, see scroll state and events
     */
    onPageScrollStateChanged?: (state: ScrollState) => void;

    /**
     * Scroll event, see scroll state and events
     */
    onPageScroll?: (event: ScrollEvent) => void;

    /**
     * Custom style for the FlatList component
     */
    scrollViewStyle?: StyleProp<ViewStyle>;

    /**
     * Fired after a single tap
     */
    onSingleTapConfirmed?: (page: number) => void;

    /**
     * Fired after a long press
     */
    onLongPress?: (state: GestureState) => void;
}

export default class Gallery extends PureComponent<Props> {}

export {};
type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
