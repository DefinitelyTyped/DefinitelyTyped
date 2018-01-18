// Type definitions for react-native-snap-carousel 3.5
// Project: https://github.com/archriss/react-native-snap-carousel
// Definitions by: jnbt <https://github.com/jnbt>
//                 Jacob Froman <https://github.com/j-fro>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as React from 'react';
import {
    Animated,
    LayoutChangeEvent,
    NativeSyntheticEvent,
    NativeScrollEvent,
    StyleProp,
    ScrollViewProperties,
    ScrollViewStyle,
    ViewStyle,
    ImageProperties,
    FlatListProperties
} from 'react-native';

export interface AdditionalParallaxProps {
    carouselRef?: React.Component<FlatListProperties<any>>;
    itemHeight?: number | undefined;
    itemWidth?: number | undefined;
    scrollPosition?: Animated.Value;
    sliderHeight?: number | undefined;
    sliderWidth?: number | undefined;
    vertical?: boolean;
}

export interface CarouselProps<T> extends React.Props<ScrollViewProperties> {
    // Required

    /**
     * Array of items to loop over
     */
    data: ReadonlyArray<T>;
    /**
     * Function that takes an item from the `data` array and returns a React
     * Element. See `react-native`'s `FlatList`
     */
    renderItem(item: { item: T; index: number }, parallaxProps?: AdditionalParallaxProps): React.ReactNode;
    /**
     * Width in pixels of your slides, must be the same for all of them
     * Note: Required with horizontal carousel
     */
    itemWidth?: number;
    /**
     * Height in pixels of carousel's items, must be the same for all of them
     * Note: Required with vertical carousel
     */
    itemHeight?: number;
    /**
     * Width in pixels of your slider
     * Note: Required with horizontal carousel
     */
    sliderWidth?: number;
    /**
     * Height in pixels of the carousel itself
     * Note: Required with vertical carousel
     */
    sliderHeight?: number;

    // Behavior

    /**
     * From slider's center, minimum slide distance to be scrolled before being set to active
     */
    activeSlideOffset?: number;
    /**
     * Duration of time while component is hidden after mounting. NOTE: May cause rendering
     * issues on Android. Defaults to 0
     */
    apparitionDelay?: number;
    /**
     * Defines a small margin for callbacks firing from scroll events.  Increase this value
     * if you experience missed callbacks. Defaults to 5
     */
    callbackOffsetMargin?: number;
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
     * Flag to indicate whether the carousel contains `<ParallaxImage />`. Parallax data
     * will not be passed to carousel items if this is false
     */
    hasParallaxImages?: boolean;
    /**
     * Prevent the user from interacting with the carousel while it is snapping. Ignored
     * if `enableMomentum` is `true`
     */
    lockScrollWhileSnapping?: boolean;
    /**
     * When momentum is disabled, this prop defines the timeframe during which multiple
     * callback calls should be "grouped" into a single one. This debounce also helps
     * smoothing the snap effect by providing a bit of inertia when touch is released..
     * Note that this will delay callback's execution.
     */
    scrollEndDragDebounceValue?: number;
    /**
     * Whether to implement a shouldComponentUpdate strategy to minimize updates
     */
    shouldOptimizeUpdates?: boolean;
    /**
     * Snapping on android is kinda choppy, especially when swiping quickly so you
     * can disable it.
     * Warning: this prop can't be changed dynamically.
     */
    snapOnAndroid?: boolean;
    /**
     * Delta x when swiping to trigger the snap
     */
    swipeThreshold?: number;
    /**
     * Determines whether to use `ScrollView` instead of `FlatList`. May cause
     * rendering performance issues due to losing `FlatList`'s performance
     * optimizations
     */
    useScrollView?: boolean;
    /*
     * Layout slides vertically instead of horizontally
     */
    vertical?: boolean;

    // Loop

    /**
     * Enable infinite loop mode. Does not work if `enableSnap` is `false`
     */
    loop?: boolean;
    /**
     * Number of clones to render at the beginning and end of the list. Default
     * is 3
     */
    loopClonesPerSide?: number;

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
     * Determine active slide's alignment relative to the carousel
     */
    activeSlideAlignment?: 'start' | 'center' | 'end';
    /**
     * Animated animation to use. Provide the name of the method
     */
    animationFunc?: 'decay' | 'timing' | 'spring';
    /**
     * Animation options to be merged with the default ones. Can be used w/ animationFunc
     */
    customAnimationOptions?: Animated.DecayAnimationConfig | Animated.TimingAnimationConfig | Animated.SpringAnimationConfig;
    /**
     * Override container's inner padding (needed for slides's centering).
     * Warning: be aware that overriding the default value can mess with carousel's behavior.
     */
    carouselHorizontalPadding?: number;
    /**
     * Optional styles for Scrollview's global wrapper
     */
    containerCustomStyle?: StyleProp<ScrollViewStyle>;
    /**
     * Optional styles for Scrollview's items container
     */
    contentContainerCustomStyle?: StyleProp<ScrollViewStyle>;
    /**
     * Value of the opacity effect applied to inactive slides
     */
    inactiveSlideOpacity?: number;
    /**
     * Value of the 'scale' transform applied to inactive slides
     */
    inactiveSlideScale?: number;
    /**
     * Value of the 'translate' transform applied to inactive slides. Not recommended with
     * `customAnimationOptions`
     */
    inactiveSlideShift?: number;
    /**
     * Optional style for each item's container (the one whose scale and opacity are animated)
     */
    slideStyle?: StyleProp<ViewStyle>;

    // Callbacks
    /**
     * Exposed View callback; invoked on mount and layout changes
     */
    onLayout?(event: LayoutChangeEvent): void;

    /**
     * Exposed ScrollView callback; fired while scrolling
     */
    onScroll?(event: NativeSyntheticEvent<NativeScrollEvent>): void;

    /**
     * @deprecated: use onScroll instead
     * Callback fired while scrolling; direct equivalent of ScrollView's onScroll
     * Since onScroll is overriden by plugin's implementation, you should use prop onScrollViewScroll
     * if you need a callback while scrolling.
     */
    onScrollViewScroll?(event: NativeSyntheticEvent<NativeScrollEvent>): void;

    /**
     * Callback fired when navigating to an item
     */
    onSnapToItem?(slideIndex: number): void;
}

export interface CarouselStatic<T> extends React.ComponentClass<CarouselProps<T>> {
    currentIndex: number;
    currentScrollPosition: number;
    startAutoplay(instantly?: boolean): void;
    stopAutoplay(): void;
    snapToItem(index: number, animated?: boolean, fireCallback?: boolean, initial?: boolean): void;
    snapToNext(animated?: boolean): void;
    snapToPrev(animated?: boolean): void;
}

export type CarouselProperties<T> = ScrollViewProperties & CarouselProps<T> & React.Props<CarouselStatic<T>>;

export interface ParallaxImageProps extends ImageProperties, AdditionalParallaxProps {
    /**
     * Optional style for image's container
     */
    containerStyle?: StyleProp<ViewStyle>;
    /**
     * On screen dimensions of the image
     */
    dimensions?: { width: number; height: number };
    /**
     * Duration of fade in when object is loaded. Default of 500
     */
    fadeDuration?: number;
    /**
     * Speed of parallax effect. A higher value appears more 'zoomed in'
     */
    parallaxFactor?: number;
    /**
     * Whether to display a loading spinner
     */
    showSpinner?: boolean;
    /**
     * Color of the loading spinner if displayed
     */
    spinnerColor?: string;
}

export type ParallaxImageStatic = React.ComponentClass<ParallaxImageProps>;

export type ParallaxImageProperties = ParallaxImageProps & React.Props<ParallaxImageStatic>;

export class ParallaxImage extends React.Component<ParallaxImageProperties> { }

export interface PaginationProps {
    /**
     * Number of dots to display
     */
    dotsLength: number;
    /**
     * Currently focused dot
     */
    activeDotIndex: number;
    /**
     * Style for dots' container that will be merged with the default one
     */
    containerStyle?: StyleProp<ViewStyle>;
    /**
     * Dots' style that will be merged with the default one
     */
    dotStyle?: StyleProp<ViewStyle>;
    /**
     * Value of the opacity effect applied to inactive dots
     */
    inactiveDotOpacity?: number;
    /**
     * Value of the 'scale' transform applied to inactive dots
     */
    inactiveDotScale?: number;
}

export type PaginationStatic = React.ComponentClass<PaginationProps>;

export type PaginationProperties = PaginationProps & React.Props<PaginationStatic>;

export class Pagination extends React.Component<PaginationProperties> { }

export default class Carousel<T> extends React.Component<CarouselProperties<T>> { }
