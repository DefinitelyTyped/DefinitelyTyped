// Type definitions for tiny-slider-react 0.3
// Project: https://github.com/jechav/tiny-slider-react#readme
// Definitions by: Christian Rackerseder <https://github.com/screendriver>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6
import * as React from "react";

interface CommonOptions {
    /**
     * Default: 0.
     * The initial index of the slider.
     */
    startIndex?: number;
    /**
     * Default: 1.
     * Number of slides being displayed in the viewport.
     */
    items?: number;
    /**
     * Default: 0.
     * Space between slides (in "px").
     */
    gutter?: number;
    /**
     * 	Default: 1.
     * Number of slides going on one "click".
     */
    slideBy?: number | "page";
    /**
     * Default: 300.
     * Speed of the slide animation (in "ms").
     */
    speed?: number;
    /**
     * 	Default: false.
     * Height of slider container changes according to each slide"s height.
     */
    autoHeight?: boolean;
    /**
     * Default: false.
     * Controls width attribute of the slides.
     */
    fixedWidth?: number | false;
    /**
     * Default: 0.
     * Space on the outside (in "px").
     */
    edgePadding?: number;
    /**
     * Default: true.
     * Controls the display and functionalities of controls components (prev/next buttons). If true, display the controls and add all functionalities.
     */
    controls?: boolean;
    /**
     * Default: ["prev", "next"].
     * Text or markup in the prev/next buttons
     */
    controlsText?: string[];
    /**
     * Default: true.
     * Controls the display and functionalities of nav components (dots). If true, display the nav and add all functionalities.
     */
    nav?: boolean;
    /**
     * Default: false.
     * Toggles the automatic change of slides
     */
    autoplay?: boolean;
    /**
     * Default: false.
     * Stops sliding on mouseover.
     */
    autoplayHoverPause?: boolean;
    /**
     * Default: true.
     * Pauses the sliding when the page is invisiable and resumes it when the page become visiable again
     */
    autoplayResetOnVisibility?: boolean;
    /**
     * Default: ["start", "stop"].
     * Text or markup in the autoplay start/stop button.
     */
    autoplayText?: string[];
    /**
     * Default: 5000.
     * Time between 2 autoplay slides change (in "ms").
     */
    autoplayTimeout?: number;
    /**
     * 	Default: true.
     * Activates input detection for touch devices.
     */
    touch?: boolean;
    /**
     * Default: false.
     * Changing slides by dragging them.
     */
    mouseDrag?: boolean;
    /**
     * Default: false.
     * Allows using arrow keys to switch slides.
     */
    arrowKeys?: boolean;
    /**
     * Default: false.
     * Disable slider.
     */
    disable?: boolean;
}

export interface ResponsiveOptions {
    [breakpoint: number]: CommonOptions;
}

export interface TinySliderSettings extends CommonOptions {
    /**
     * Default: document.querySelector(".slider").
     * The slider container element or selector.
     */
    container?: HTMLElement | string;
    /**
     * Default: "carousel".
     * Controls animation behaviour.
     * With carousel everything slides to the side, while gallery uses fade animations and changes all slides at once.
     */
    mode?: "carousel" | "gallery";
    /**
     * Default: "horizontal".
     * The axis of the slider.
     */
    axis?: "horizontal" | "vertical";
    /**
     * Default: false.
     * The container element/selector around the prev/next buttons.
     * controlsContainer must have at least 2 child elements.
     */
    controlsContainer?: HTMLElement | string | false;
    /**
     * Default: false.
     * The container element/selector around the dots.
     * navContainer must have at least same number of children as the slides.
     */
    navContainer?: HTMLElement | string | false;
    /**
     * Default: false.
     * Indecate if the dots are thurbnails. If true, they will always be visible even when more than 1 slides displayed in the viewport.
     */
    navAsThumbnails?: boolean;
    /**
     * Default: "forward".
     * Direction of slide movement (ascending/descending the slide index).
     */
    autoplayDirection?: "forward" | "backward";
    /**
     * Default: false.
     * The customized autoplay start/stop button or selector.
     */
    autoplayButton?: HTMLElement | string | false;
    /**
     * Default: true.
     * Output autoplayButton markup when autoplay is true but a customized autoplayButton is not provided.
     */
    autoplayButtonOutput?: boolean;
    /**
     * Default: "tns-fadeIn".
     * Name of intro animation class.
     */
    animateIn?: string;
    /**
     * Default: "tns-fadeOut".
     * Name of outro animation class.
     */
    animateOut?: string;
    /**
     * Default: "tns-normal".
     * Name of default animation class.
     */
    animateNormal?: string;
    /**
     * Default: false.
     * Time between each gallery animation (in "ms").
     */
    animateDelay?: number | false;
    /**
     * Default: true.
     * Moves throughout all the slides seamlessly.
     */
    loop?: boolean;
    /**
     * Default: false.
     * Moves to the opposite edge when reaching the first or last slide.
     */
    rewind?: boolean;
    /**
     * Default: false.
     * Breakpoint: Integer.
     * Defines options for different viewport widths
     */
    responsive?: ResponsiveOptions | false;
    /**
     * Default: false.
     * Enables lazyloading images that are currently not viewed, thus saving bandwidth
     */
    lazyload?: boolean;
    /**
     * Default: 15.
     * Swipe or drag will not be triggered if the angle is not inside the range when set.
     */
    swipeAngle?: number | boolean;
    /**
     * Default: false.
     * Difine the relationship between nested sliders.
     * Make sure you run the inner slider first, otherwise the height of the inner slider container will be wrong.
     */
    nested?: "inner" | "outer" | false;
    /**
     * Default: true.
     * Indicate whether the slider will be frozen (controls, nav, autoplay and other functions will stop work) when all slides can be displayed in one page.
     */
    freezable?: boolean;
    /**
     * Default: false.
     * Callback to be run on initialization.
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
