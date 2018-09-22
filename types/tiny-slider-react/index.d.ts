// Type definitions for tiny-slider-react 0.3
// Project: https://github.com/jechav/tiny-slider-react#readme
// Definitions by: Christian Rackerseder <https://github.com/screendriver>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8
import * as React from "react";

export interface CommonOptions {
    /**
     * The initial index of the slider.
     * @defaultValue 0
     */
    startIndex?: number;
    /**
     * Number of slides being displayed in the viewport.
     * @defaultValue 1
     */
    items?: number;
    /**
     * Space between slides (in "px").
     * @defaultValue 0
     */
    gutter?: number;
    /**
     * Number of slides going on one "click".
     * @defaultValue 1
     */
    slideBy?: number | "page";
    /**
     * Speed of the slide animation (in "ms").
     * @defaultValue 300
     */
    speed?: number;
    /**
     * Height of slider container changes according to each slide"s height.
     * @defaultValue false
     */
    autoHeight?: boolean;
    /**
     * Controls width attribute of the slides.
     * @defaultValue false
     */
    fixedWidth?: number | false;
    /**
     * Space on the outside (in "px").
     * @defaultValue 0
     */
    edgePadding?: number;
    /**
     * Controls the display and functionalities of controls components (prev/next buttons). If true, display the controls and add all functionalities.
     * @defaultValue true
     */
    controls?: boolean;
    /**
     * Text or markup in the prev/next buttons
     * @defaultValue ["prev", "next"]
     */
    controlsText?: string[];
    /**
     * Controls the display and functionalities of nav components (dots). If true, display the nav and add all functionalities.
     * @defaultValue true
     */
    nav?: boolean;
    /**
     * Toggles the automatic change of slides
     * @defaultValue false
     */
    autoplay?: boolean;
    /**
     * Stops sliding on mouseover.
     * @defaultValue false
     */
    autoplayHoverPause?: boolean;
    /**
     * Pauses the sliding when the page is invisiable and resumes it when the page become visiable again
     * @defaultValue true
     */
    autoplayResetOnVisibility?: boolean;
    /**
     * Text or markup in the autoplay start/stop button.
     * @defaultValue ["start", "stop"]
     */
    autoplayText?: string[];
    /**
     * Time between 2 autoplay slides change (in "ms").
     * @defaultValue 5000
     */
    autoplayTimeout?: number;
    /**
     * Activates input detection for touch devices.
     * @defaultValue true
     */
    touch?: boolean;
    /**
     * Changing slides by dragging them.
     * @defaultValue false
     */
    mouseDrag?: boolean;
    /**
     * Allows using arrow keys to switch slides.
     * @defaultValue false
     */
    arrowKeys?: boolean;
    /**
     * Disable slider.
     * @defaultValue false
     */
    disable?: boolean;
}

export interface ResponsiveOptions {
    [breakpoint: number]: CommonOptions;
}

export interface TinySliderSettings extends CommonOptions {
    /**
     * Controls animation behaviour.
     * With carousel everything slides to the side, while gallery uses fade animations and changes all slides at once.
     * @defaultValue "carousel"
     */
    mode?: "carousel" | "gallery";
    /**
     * The axis of the slider.
     * @defaultValue "horizontal"
     */
    axis?: "horizontal" | "vertical";
    /**
     * The container element/selector around the prev/next buttons.
     * controlsContainer must have at least 2 child elements.
     * @defaultValue false
     */
    controlsContainer?: HTMLElement | string | false;
    /**
     * The container element/selector around the dots.
     * navContainer must have at least same number of children as the slides.
     * @defaultValue false
     */
    navContainer?: HTMLElement | string | false;
    /**
     * Indecate if the dots are thurbnails. If true, they will always be visible even when more than 1 slides displayed in the viewport.
     * @defaultValue false
     */
    navAsThumbnails?: boolean;
    /**
     * Direction of slide movement (ascending/descending the slide index).
     * @defaultValue "forward"
     */
    autoplayDirection?: "forward" | "backward";
    /**
     * The customized autoplay start/stop button or selector.
     * @defaultValue false
     */
    autoplayButton?: HTMLElement | string | false;
    /**
     * Output autoplayButton markup when autoplay is true but a customized autoplayButton is not provided.
     * @defaultValue true
     */
    autoplayButtonOutput?: boolean;
    /**
     * Name of intro animation class.
     * @defaultValue "tns-fadeIn"
     */
    animateIn?: string;
    /**
     * Name of outro animation class.
     * @defaultValue "tns-fadeOut"
     */
    animateOut?: string;
    /**
     * Name of default animation class.
     * @defaultValue "tns-normal"
     */
    animateNormal?: string;
    /**
     * Time between each gallery animation (in "ms").
     * @defaultValue false
     */
    animateDelay?: number | false;
    /**
     * Moves throughout all the slides seamlessly.
     * @defaultValue true
     */
    loop?: boolean;
    /**
     * Moves to the opposite edge when reaching the first or last slide.
     * @defaultValue false
     */
    rewind?: boolean;
    /**
     * Breakpoint: Integer.
     * Defines options for different viewport widths
     * @defaultValue false
     */
    responsive?: ResponsiveOptions | false;
    /**
     * Enables lazyloading images that are currently not viewed, thus saving bandwidth
     * @defaultValue false
     */
    lazyload?: boolean;
    /**
     * Swipe or drag will not be triggered if the angle is not inside the range when set.
     * @defaultValue 15
     */
    swipeAngle?: number | boolean;
    /**
     * Difine the relationship between nested sliders.
     * Make sure you run the inner slider first, otherwise the height of the inner slider container will be wrong.
     * @defaultValue false
     */
    nested?: "inner" | "outer" | false;
    /**
     * Indicate whether the slider will be frozen (controls, nav, autoplay and other functions will stop work) when all slides can be displayed in one page.
     * @defaultValue true
     */
    freezable?: boolean;
    /**
     * Callback to be run on initialization.
     * @defaultValue false
     */
    onInit?: () => void | false;
}

export interface TinySliderInfo {
    cloneCount: number;
    container: HTMLElement;
    controlsContainer?: boolean;
    hasControls: boolean;
    index: number;
    indexCached: number;
    items: number;
    navContainer?: HTMLElement;
    navCurrentIndex?: number;
    navCurrentIndexCached?: number;
    navItems?: HTMLCollection;
    nextButton?: HTMLElement;
    prevButton?: HTMLElement;
    slideBy: number;
    slideCount: number;
    slideCountNew: number;
    slideItems: HTMLCollection;
    visibleNavIndexes?: number;
    visibleNavIndexesCached?: number;
}

export interface TinySliderProps {
    settings?: TinySliderSettings;
    onClick?: (slideClicked: number, info: string, event: Event) => void;
    startIndex?: number;
    onIndexChanged?: (info: TinySliderInfo) => void;
    onTransitionStart?: (info: TinySliderInfo) => void;
    onTransitionEnd?: (info: TinySliderInfo) => void;
    onTouchStart?: (info: TinySliderInfo) => void;
    onTouchMove?: (info: TinySliderInfo) => void;
    onTouchEnd?: (info: TinySliderInfo) => void;
}

declare class TinySlider extends React.Component<TinySliderProps> {}

export default TinySlider;
