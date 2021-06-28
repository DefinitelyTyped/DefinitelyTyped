// Type definitions for react-native-snap-carousel 3.8
// Project: https://github.com/archriss/react-native-snap-carousel
// Definitions by: jnbt <https://github.com/jnbt>
//                 Jacob Froman <https://github.com/j-fro>
//                 Nikolay Polukhin <https://github.com/gazaret>
//                 Guillaume Amat <https://github.com/GuillaumeAmat>
//                 Vitor Luiz Cavalcanti <https://github.com/VitorLuizC>
//                 Lemon Garrett <https://github.com/egarrett94>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';
import {
    Animated,
    LayoutChangeEvent,
    NativeSyntheticEvent,
    NativeScrollEvent,
    StyleProp,
    ScrollViewProps,
    ViewStyle,
    ImageProps,
    FlatListProps
} from 'react-native';

export interface AdditionalParallaxProps {
    carouselRef?: React.Component<FlatListProps<any>>;
    itemHeight?: number;
    itemWidth?: number;
    scrollPosition?: Animated.Value;
    sliderHeight?: number;
    sliderWidth?: number;
    vertical?: boolean;
}

export interface CarouselProps<T> {
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
    /**
     * Reverses the direction of scroll. Uses scale transforms of -1.
     */
    inverted?: boolean;
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
     * How many items should be rendered at the start?
     */
    initialNumToRender?: number;
    /**
     * Prevent the user from interacting with the carousel while it is snapping. Ignored
     * if `enableMomentum` is `true`
     */
    lockScrollWhileSnapping?: boolean;
    /**
     * Changes default lock's timeout duration in ms.
     */
    lockScrollTimeoutDuration?: number;
    /**
     * When momentum is disabled, this prop defines the timeframe during which multiple
     * callback calls should be "grouped" into a single one. This debounce also helps
     * smoothing the snap effect by providing a bit of inertia when touch is released..
     * Note that this will delay callback's execution.
     */
    scrollEndDragDebounceValue?: number;
    /**
     * Allow scroll independently of user interaction on carousel. `false` as default.
     */
    scrollEnabled?: boolean;
    /**
     * Whether to implement a shouldComponentUpdate strategy to minimize updates
     */
    shouldOptimizeUpdates?: boolean;
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
     * Custom animation options.
     * Note that useNativeDriver will be enabled by default and that opacity's easing will always be kept linear.
     * Setting this prop to something other than null will trigger custom animations and will completely change
     * the way items are animated: rather than having their opacity and scale interpolated based the scroll value (default behavior),
     * they will now play the custom animation you provide as soon as they become active.
     * This means you cannot use props layout, scrollInterpolator or slideInterpolatedStyle in conjunction with activeAnimationOptions
     */
    activeAnimationOptions?: Animated.DecayAnimationConfig | Animated.TimingAnimationConfig | Animated.SpringAnimationConfig;
    /**
     * Custom animation type: either 'decay, 'spring' or 'timing'.
     * Note that it will only be applied to the scale animation since opacity's animation type will always be set
     * to timing (no one wants the opacity to 'bounce' around)
     */
    activeAnimationType?: 'decay' | 'spring' | 'timing';
    /**
     * Determine active slide's alignment relative to the carousel
     */
    activeSlideAlignment?: 'start' | 'center' | 'end';
    /**
     * Optional styles for Scrollview's global wrapper
     */
    containerCustomStyle?: StyleProp<ViewStyle>;
    /**
     * Optional styles for Scrollview's items container
     */
    contentContainerCustomStyle?: StyleProp<ViewStyle>;
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
     * Define the way items are rendered and animated.
     * Possible values are 'default', 'stack' and 'tinder'.
     * See this for more info and visual examples.
     * WARNING: setting this prop to either 'stack' or 'tinder' will activate useScrollView to prevent rendering bugs with FlatList.
     * Therefore, those layouts will probably not be suited if you have a large data set.
     */
    layout?: 'default' | 'stack' | 'tinder';
    /**
     * Use to increase or decrease the default card offset in both 'stack' and 'tinder' layouts.
     */
    layoutCardOffset?: number;
    /**
     * Used to define custom interpolations
     */
    scrollInterpolator?(index: number, carouselProps: CarouselProps<any>): { inputRange: number[], outputRange: number[] };
    /**
     * Used to define custom interpolations
     */
    slideInterpolatedStyle?(index: number, animatedValue: Animated.AnimatedValue, carouselProps: CarouselProps<any>): StyleProp<ViewStyle>;
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
     * Callback fired when navigating to an item
     */
    onSnapToItem?(slideIndex: number): void;

    /**
     * Callback fired before navigating to an item
     */
    onBeforeSnapToItem?(slideIndex: number): void;
}

export type CarouselProperties<T> = ScrollViewProps & FlatListProps<T> & CarouselProps<T>;

export interface ParallaxImageProps extends ImageProps, AdditionalParallaxProps {
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
     * Length of dot animation (milliseconds)
     */
    animatedDuration?: number;
    /**
     * Controls "bounciness"/overshoot on dot animation
     */
    animatedFriction?: number;
    /**
     * Controls speed dot animation
     */
    animatedTension?: number;
    /**
     * Number of dots to display
     */
    dotsLength: number;
    /**
     * Currently focused dot
     */
    activeDotIndex: number;
    /**
     * Opacity of the dot when tapped. The prop has no effect if tappableDots hasn't been set to true
     */
    activeOpacity?: number;
    /**
     * Reference to the Carousel component to which pagination is linked.
     * Needed only when setting tappableDots to true
     */
    carouselRef?: React.Component<FlatListProps<any>>;
    /**
     * Style for dots' container that will be merged with the default one
     */
    containerStyle?: StyleProp<ViewStyle>;
    /**
     * Delay in ms, from the start of the touch, before onPressIn is called on dot
     */
    delayPressInDot?: number;
    /**
     * Background color of the active dot.
     * Use this if you want to animate the change between active and inactive colors,
     * and always in conjunction with inactiveDotColor
     */
    dotColor?: string;
    /**
     * Style of each dot's container.
     * Use this if you need to specify styles that wouldn't have any effect when defined with dotStyle (such as flex)
     */
    dotContainerStyle?: StyleProp<ViewStyle>;
    /**
     * Optional custom active dot element that will replace the default one.
     * The element will receive a prop active set to true as well as a prop index
     */
    dotElement?: React.ReactNode;
    /**
     * Dots' style that will be merged with the default one
     */
    dotStyle?: StyleProp<ViewStyle>;
    /**
     * Background color of the inactive dots.
     * Use this if you want to animate the change between active and inactive colors, and always in conjunction with dotColor
     */
    inactiveDotColor?: string;
    /**
     * Optional custom inactive dot element that will replace the default one.
     * The element will receive a prop active set to false as well as a prop index
     */
    inactiveDotElement?: React.ReactNode;
    /**
     * Value of the opacity effect applied to inactive dots
     */
    inactiveDotOpacity?: number;
    /**
     * Value of the 'scale' transform applied to inactive dots
     */
    inactiveDotScale?: number;
    /**
     * Dots' style that will be applied to inactive elements
     */
    inactiveDotStyle?: StyleProp<ViewStyle>;
    /**
     * Function that gives you complete control over pagination's rendering.
     * It will receive three parameters : (activeIndex, total, context).
     * This can be especially useful in order to replace dots with numbers
     */
    renderDots?(activeIndex: number, total: number, context: any): React.ReactNode;
    /**
     * Make default dots tappable, e.g. your carousel will slide to the corresponding item.
     * Note that carouselRef must be specified for this to work
     */
    tappableDots?: boolean;
    /**
     * Whether to layout dots vertically or horizontally
     */
    vertical?: boolean;
}

export type PaginationStatic = React.ComponentClass<PaginationProps>;

export type PaginationProperties = PaginationProps & React.Props<PaginationStatic>;

export class Pagination extends React.Component<PaginationProperties> { }

export default class Carousel<T> extends React.Component<CarouselProperties<T>> {
    /**
     * Current active item (int, starts at 0)
     */
    currentIndex: number;
    /**
     * Underlying ScrollView's current content offset
     * (int, starts at 0 if activeSlideAlignment is set to start, negative value otherwise)
     */
    currentScrollPosition: number;
    /**
     * Start the autoplay manually
     */
    startAutoplay(instantly?: boolean): void;
    /**
     * Stop the autoplay manually
     */
    stopAutoplay(): void;
    /**
     * Snap to an item manually
     */
    snapToItem(index: number, animated?: boolean, fireCallback?: boolean, initial?: boolean, lockScroll?: boolean): void;
    /**
     * Snap to next item manually
     */
    snapToNext(animated?: boolean, fireCallback?: boolean): void;
    /**
     * Snap to previous item manually
     */
    snapToPrev(animated?: boolean, fireCallback?: boolean): void;
    /**
     * Call this when needed to work around a random FlatList bug that keeps content hidden until the carousel is scrolled
     * (see #238). Note that the offset parameter is not required and will default to either 1 or -1 depending
     * on the current scroll position
     */
    triggerRenderingHack(offset?: number): void;
}

/**
 * Get scroll interpolator's input range from an array of slide indexes
 * Indexes are relative to the current active slide (index 0)
 * For example, using [3, 2, 1, 0, -1] will return:
 * [
 *     (index - 3) * sizeRef, // active + 3
 *     (index - 2) * sizeRef, // active + 2
 *     (index - 1) * sizeRef, // active + 1
 *     index * sizeRef, // active
 *     (index + 1) * sizeRef // active - 1
 * ]
 */
export function getInputRangeFromIndexes(range: number[], index: number, carouselProps: CarouselProps<any>): number[];
