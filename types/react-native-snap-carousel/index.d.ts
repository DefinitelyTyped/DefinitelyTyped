// Type definitions for react-native-snap-carousel 2.1
// Project: https://github.com/archriss/react-native-snap-carousel
// Definitions by: jnbt <https://github.com/jnbt>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

import * as React from 'react';
import {
    Animated,
    ScrollViewProperties,
    ScrollViewStyle,
    ViewStyle
} from 'react-native';

export interface CarouselProps extends React.Props<ScrollViewProperties> {
    // Required

    /**
     * Width in pixels of your slides, must be the same for all of them
     */
    itemWidth: number;
    /**
     * Width in pixels of your slider
     */
    sliderWidth: number;

    // Behavior

    /**
     * From slider's center, minimum slide distance to be scrolled before being set to active
     */
    activeSlideOffset?: number;
    /**
     * Since 1.5.0, the snapping effect can now be based on momentum instead of when you're
     * releasing your finger. It means that the component will wait until the ScrollView
     * isn't moving anymore to snap
     */
    enableMomentum?: boolean;
    /**
     * If enabled, releasing the touch will scroll to the center of the nearest/active item
     */
    enableSnap?: boolean;
    /**
     * Index of the first item to display
     */
    firstItem?: number;
    /**
     * Whether to implement a shouldComponentUpdate strategy to minimize updates
     */
    shouldOptimizeUpdates?: boolean;
    /**
     * Snapping on android is kinda choppy, especially when swiping quickly so you can disable it
     */
    snapOnAndroid?: boolean;
    /**
     * Delta x when swiping to trigger the snap
     */
    swipeThreshold?: number;

    // Autoplay

    /**
     * Trigger autoplay on mount
     */
    autoplay?: boolean;
    /**
     * Delay before enabling autoplay on startup & after releasing the touch
     */
    autoplayDelay?: number;
    /**
     * Delay in ms until navigating to the next item
     */
    autoplayInterval?: number;

    // Style and animation

    /**
     * Animated animation to use. Provide the name of the method
     */
    animationFunc?: 'decay' | 'timing' | 'spring';
    /**
     * Animation options to be merged with the default ones. Can be used w/ animationFunc
     */
    animationOptions?: Animated.DecayAnimationConfig | Animated.TimingAnimationConfig | Animated.SpringAnimationConfig;
    /**
     * Optional styles for Scrollview's global wrapper
     */
    containerCustomStyle?: ScrollViewStyle;
    /**
     * Optional styles for Scrollview's items container
     */
    contentContainerCustomStyle?: ScrollViewStyle;
    /**
     * Value of the opacity effect applied to inactive slides
     */
    inactiveSlideOpacity?: number;
    /**
     * Value of the 'scale' transform applied to inactive slides
     */
    inactiveSlideScale?: number;
    /**
     * Optional style for each item's container (the one whose scale and opacity are animated)
     */
    slideStyle?: ViewStyle;

    // Callbacks

    /**
     * Callback fired when navigating to an item
     */
    onSnapToItem?(slideIndex: number): void;
}

export interface CarouselStatic extends React.ComponentClass<CarouselProps> {
    currentIndex: number;
    startAutoplay(instantly?: boolean): void;
    stopAutoplay(): void;
    snapToItem(index: number, animated?: boolean): void;
    snapToNext(animated?: boolean): void;
    snapToPrev(animated?: boolean): void;
}

export type CarouselProperties = ScrollViewProperties & CarouselProps & React.Props<CarouselStatic>;

export default class Carousel extends React.Component<CarouselProperties, {}> { }
