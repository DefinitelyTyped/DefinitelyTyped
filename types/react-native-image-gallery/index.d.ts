import { PureComponent, ReactNode } from "react";
import { FlatListProps as _FlatListProps, ImageProps, StyleProp, ViewProps, ViewStyle } from "react-native";

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
    dimensions?: ImageDimensions | undefined;
}

export type Image = LocalImage | RemoteImage;

export enum ScrollState {
    IDLE = "idle",
    DRAGGING = "dragging",
    SETTLING = "settling",
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
    pinch?: number | undefined;
    previousPinch?: number | undefined;

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
    _singleTabFailed?: boolean | undefined;
}

export type FlatListProps = Omit<
    _FlatListProps<Image>,
    | "style"
    | "ref"
    | "keyExtractor"
    | "scrollEnabled"
    | "horizontal"
    | "data"
    | "renderItem"
    | "onLayout"
    | "contentOffset"
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
    initialPage?: number | undefined;

    /**
     * Custom function to render your images, 1st param is the image props, 2nd is its dimensions
     */
    imageComponent?: ((imageProps: ImageProps, imageDimensions: ImageDimensions) => ReactNode) | undefined;

    /**
     * Custom function to render the page of an image that couldn't be displayed
     */
    errorComponent?: (() => ReactNode) | undefined;

    /**
     * Props to be passed to the underlying FlatList
     * @default { windowSize: 3 }
     */
    flatListProps?: FlatListProps | undefined;

    /**
     * Blank space to show between images
     */
    pageMargin?: number | undefined;

    /**
     * Fired with the index of page that has been selected
     */
    onPageSelected?: ((page: number) => void) | undefined;

    /**
     * Called when page scrolling state has changed, see scroll state and events
     */
    onPageScrollStateChanged?: ((state: ScrollState) => void) | undefined;

    /**
     * Scroll event, see scroll state and events
     */
    onPageScroll?: ((event: ScrollEvent) => void) | undefined;

    /**
     * Custom style for the FlatList component
     */
    scrollViewStyle?: StyleProp<ViewStyle> | undefined;

    /**
     * Fired after a single tap
     */
    onSingleTapConfirmed?: ((page: number) => void) | undefined;

    /**
     * Fired after a long press
     */
    onLongPress?: ((state: GestureState) => void) | undefined;
}

export default class Gallery extends PureComponent<Props> {}

export {};
type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
