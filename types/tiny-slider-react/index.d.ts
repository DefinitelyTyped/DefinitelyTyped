import * as React from "react";

export interface CommonOptions {
    /**
     * The initial index of the slider.
     * @defaultValue 0
     */
    startIndex?: number | undefined;
    /**
     * Number of slides being displayed in the viewport.
     * @defaultValue 1
     */
    items?: number | undefined;
    /**
     * Space between slides (in "px").
     * @defaultValue 0
     */
    gutter?: number | undefined;
    /**
     * Number of slides going on one "click".
     * @defaultValue 1
     */
    slideBy?: number | "page" | undefined;
    /**
     * Speed of the slide animation (in "ms").
     * @defaultValue 300
     */
    speed?: number | undefined;
    /**
     * Height of slider container changes according to each slide"s height.
     * @defaultValue false
     */
    autoHeight?: boolean | undefined;
    /**
     * Controls width attribute of the slides.
     * @defaultValue false
     */
    fixedWidth?: number | false | undefined;
    /**
     * Space on the outside (in "px").
     * @defaultValue 0
     */
    edgePadding?: number | undefined;
    /**
     * Controls the display and functionalities of controls components (prev/next buttons). If true, display the controls and add all functionalities.
     * @defaultValue true
     */
    controls?: boolean | undefined;
    /**
     * Text or markup in the prev/next buttons
     * @defaultValue ["prev", "next"]
     */
    controlsText?: string[] | undefined;
    /**
     * Controls the display and functionalities of nav components (dots). If true, display the nav and add all functionalities.
     * @defaultValue true
     */
    nav?: boolean | undefined;
    /**
     * Toggles the automatic change of slides
     * @defaultValue false
     */
    autoplay?: boolean | undefined;
    /**
     * Stops sliding on mouseover.
     * @defaultValue false
     */
    autoplayHoverPause?: boolean | undefined;
    /**
     * Pauses the sliding when the page is invisiable and resumes it when the page become visiable again
     * @defaultValue true
     */
    autoplayResetOnVisibility?: boolean | undefined;
    /**
     * Text or markup in the autoplay start/stop button.
     * @defaultValue ["start", "stop"]
     */
    autoplayText?: string[] | undefined;
    /**
     * Time between 2 autoplay slides change (in "ms").
     * @defaultValue 5000
     */
    autoplayTimeout?: number | undefined;
    /**
     * Activates input detection for touch devices.
     * @defaultValue true
     */
    touch?: boolean | undefined;
    /**
     * Changing slides by dragging them.
     * @defaultValue false
     */
    mouseDrag?: boolean | undefined;
    /**
     * Allows using arrow keys to switch slides.
     * @defaultValue false
     */
    arrowKeys?: boolean | undefined;
    /**
     * Disable slider.
     * @defaultValue false
     */
    disable?: boolean | undefined;
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
    mode?: "carousel" | "gallery" | undefined;
    /**
     * The axis of the slider.
     * @defaultValue "horizontal"
     */
    axis?: "horizontal" | "vertical" | undefined;
    /**
     * The container element/selector around the prev/next buttons.
     * controlsContainer must have at least 2 child elements.
     * @defaultValue false
     */
    controlsContainer?: HTMLElement | string | false | undefined;
    /**
     * The container element/selector around the dots.
     * navContainer must have at least same number of children as the slides.
     * @defaultValue false
     */
    navContainer?: HTMLElement | string | false | undefined;
    /**
     * Indecate if the dots are thurbnails. If true, they will always be visible even when more than 1 slides displayed in the viewport.
     * @defaultValue false
     */
    navAsThumbnails?: boolean | undefined;
    /**
     * Direction of slide movement (ascending/descending the slide index).
     * @defaultValue "forward"
     */
    autoplayDirection?: "forward" | "backward" | undefined;
    /**
     * The customized autoplay start/stop button or selector.
     * @defaultValue false
     */
    autoplayButton?: HTMLElement | string | false | undefined;
    /**
     * Output autoplayButton markup when autoplay is true but a customized autoplayButton is not provided.
     * @defaultValue true
     */
    autoplayButtonOutput?: boolean | undefined;
    /**
     * Name of intro animation class.
     * @defaultValue "tns-fadeIn"
     */
    animateIn?: string | undefined;
    /**
     * Name of outro animation class.
     * @defaultValue "tns-fadeOut"
     */
    animateOut?: string | undefined;
    /**
     * Name of default animation class.
     * @defaultValue "tns-normal"
     */
    animateNormal?: string | undefined;
    /**
     * Time between each gallery animation (in "ms").
     * @defaultValue false
     */
    animateDelay?: number | false | undefined;
    /**
     * Moves throughout all the slides seamlessly.
     * @defaultValue true
     */
    loop?: boolean | undefined;
    /**
     * Moves to the opposite edge when reaching the first or last slide.
     * @defaultValue false
     */
    rewind?: boolean | undefined;
    /**
     * Breakpoint: Integer.
     * Defines options for different viewport widths
     * @defaultValue false
     */
    responsive?: ResponsiveOptions | false | undefined;
    /**
     * Enables lazyloading images that are currently not viewed, thus saving bandwidth
     * @defaultValue false
     */
    lazyload?: boolean | undefined;
    /**
     * Swipe or drag will not be triggered if the angle is not inside the range when set.
     * @defaultValue 15
     */
    swipeAngle?: number | boolean | undefined;
    /**
     * Difine the relationship between nested sliders.
     * Make sure you run the inner slider first, otherwise the height of the inner slider container will be wrong.
     * @defaultValue false
     */
    nested?: "inner" | "outer" | false | undefined;
    /**
     * Indicate whether the slider will be frozen (controls, nav, autoplay and other functions will stop work) when all slides can be displayed in one page.
     * @defaultValue true
     */
    freezable?: boolean | undefined;
    /**
     * Callback to be run on initialization.
     * @defaultValue false
     */
    onInit?: (() => void | false) | undefined;
}

export interface TinySliderInfo {
    cloneCount: number;
    container: HTMLElement;
    controlsContainer?: boolean | undefined;
    hasControls: boolean;
    index: number;
    indexCached: number;
    items: number;
    navContainer?: HTMLElement | undefined;
    navCurrentIndex?: number | undefined;
    navCurrentIndexCached?: number | undefined;
    navItems?: HTMLCollection | undefined;
    nextButton?: HTMLElement | undefined;
    prevButton?: HTMLElement | undefined;
    slideBy: number;
    slideCount: number;
    slideCountNew: number;
    slideItems: HTMLCollection;
    visibleNavIndexes?: number | undefined;
    visibleNavIndexesCached?: number | undefined;
}

export type TinySliderProps = React.PropsWithChildren<{
    settings?: TinySliderSettings | undefined;
    onClick?: ((slideClicked: number, info: string, event: Event) => void) | undefined;
    startIndex?: number | undefined;
    onIndexChanged?: ((info: TinySliderInfo) => void) | undefined;
    onTransitionStart?: ((info: TinySliderInfo) => void) | undefined;
    onTransitionEnd?: ((info: TinySliderInfo) => void) | undefined;
    onTouchStart?: ((info: TinySliderInfo) => void) | undefined;
    onTouchMove?: ((info: TinySliderInfo) => void) | undefined;
    onTouchEnd?: ((info: TinySliderInfo) => void) | undefined;
}>;

declare class TinySlider extends React.Component<TinySliderProps> {}

export default TinySlider;
