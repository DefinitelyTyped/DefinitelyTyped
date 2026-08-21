/// <reference types="jquery" />

/**
 * VEGAS is a jQuery plugin which adds beautiful animated background slideshows to your page body or any of its elements.
 * It works on IE9+, Safari, Firefox and Chrome.
 */
export as namespace vegas;

export interface JQueryExtension {
    (config?: Settings): JQuery;
    readonly defaults: Readonly<Settings>;
    isVideoCompatible(): boolean;
}

export interface Settings {
    /**
     * Index number of initial slide.
     * @default 0
     */
    slide?: number | undefined;

    /**
     * Preload both images and videos at start.
     * @default false
     */
    preload?: boolean | undefined;

    /**
     * Preload images at start. preload must be false .
     * @default false
     */
    preloadImage?: boolean | undefined;

    /**
     * Display/hide timer bar.
     * The timer class is .vegas-timer-progress .
     * @default true
     */
    timer?: boolean | undefined;

    /**
     * Display/hide the overlay.
     * Could be `true` `false` or the path of an overlay image pattern.
     * These image can be found in the overlays folder. Read the Overlay section for more information.
     * @default false
     */
    overlay?: boolean | string | undefined;

    /**
     * Start the Slideshow automatically.
     * @default true
     */
    autoplay?: boolean | undefined;

    /**
     * Loop the Slideshow.
     * @default true
     */
    loop?: boolean | undefined;

    /**
     * The array of slides is shuffled before.
     * @default false
     */
    shuffle?: boolean | undefined;

    /**
     * Delay beetween slides in milliseconds
     * @default 5_000
     */
    delay?: number | undefined;

    /**
     * `true` the slide image is scaled to fit the container.
     * `false` the slide image is displayed entirely.
     * `repeat` the slide image is repeated.
     * @default true
     */
    cover?: boolean | "repeat" | undefined;

    /**
     * Slide background color
     */
    color?: string | undefined;

    /**
     * Horizontal alignment of the image in the slide.
     * Could be `center` `top` `right` `bottom` `left` or a percentage.
     * @default 'center'
     */
    align?: AlignType | undefined;

    /**
     * Vertical alignment of the image in the slide.
     * Could be `center` `top` `right` `bottom` `left` or a percentage.
     * @default 'center'
     */
    valign?: AlignType | undefined;

    /**
     * Set the transition between slides.
     * Could be a transition name| random or an array of transition picked randomly.
     * {@link http://vegas.jaysalvat.com/documentation/transitions}
     * @default 'fade'
     */
    transition?: TransitionType | undefined;

    /**
     * Set the transition duration in milliseconds.
     * Could be `auto` so the transition duration will be equal to the slide delay.
     * @default 1_000
     */
    transitionDuration?: Duration | undefined;

    /**
     * Set the transition for the first played slide.
     * Could be a transition name, `random` or an array of transition picked randomly.
     * {@link http://vegas.jaysalvat.com/documentation/transitions/}
     */
    firstTransition?: TransitionType | undefined;

    /**
     * Set the transition duration in milliseconds for the first played slide.
     * Could be `auto` so the transition duration will be equal to the slide delay .
     */
    firstTransitionDuration?: Duration | undefined;

    /**
     * Add custom transitions to the transitions list available in random mode.
     * {@link http://vegas.jaysalvat.com/documentation/transitions/}
     */
    transitionRegister?: string[] | undefined;

    /**
     * Set the animation of the slides.
     * Could be an animation name, `random` or an array of transition picked randomly.
     * {@link http://vegas.jaysalvat.com/documentation/transitions/}
     */
    animation?: AnimationType | undefined;

    /**
     * Set the animation duration in milliseconds.
     * Could be `auto` so the animation duration will be equal to the slide delay .
     * @default 'auto'
     */
    animationDuration?: Duration | undefined;

    /**
     * Add custom animations to the animations list available in random mode.
     * {@link http://vegas.jaysalvat.com/documentation/transitions/}
     */
    animationRegister?: string[] | undefined;

    /**
     * Number of slides to keep in the background before removing it.
     * @default 1
     */
    slidesToKeep?: number | undefined;

    /**
     * Array of slides
     * {@link http://vegas.jaysalvat.com/documentation/settings/#slide}
     */
    slides?: Slide[] | undefined;

    /**
     * Function called when Vegas is applied to an element.
     */
    init?: ((settings: Settings) => void) | undefined;

    /**
     * Function called when Vegas starts to play the slideshow.
     */
    play?: ((index: number, slide: Slide) => void) | undefined;

    /**
     * Function called when Vegas pauses the slideshow.
     */
    pause?: ((index: number, slide: Slide) => void) | undefined;

    /**
     * Function called when Vegas changes the slide.
     */
    walk?: ((index: number, slide: Slide) => void) | undefined;

    /**
     * Function called when the Slideshow is completed (loop: false).
     */

    end?: ((index: number, slide: Slide) => void) | undefined;
}

export interface Slide {
    /**
     * Path of the image.
     */
    src?: string | undefined;

    /**
     * {@link http://vegas.jaysalvat.com/documentation/settings/#videos}
     */
    video?: Video | undefined;

    /**
     * Delay beetween slides in milliseconds.
     * @default 5_000
     */
    delay?: number | undefined;

    /**
     * `true` the background image is scaled to fit the container.
     * `false` the background image is displayed entirely.
     * @default true
     */
    cover?: boolean | undefined;

    /**
     * Slide background color.
     */
    color?: string | undefined;

    /**
     * Horizontal alignment of the image in the slide.
     * @default 'center'
     */
    align?: AlignType | undefined;

    /**
     * Vertical alignment of the image in the slide.
     * @default 'center'
     */
    valing?: AlignType | undefined;

    /**
     * Set the transition of this slide.
     * Could be a transition name, random or an array of transition picked randomly.
     * {@link http://vegas.jaysalvat.com/documentation/transitions/}
     * @default 'fade'
     */
    transition?: TransitionType | undefined;

    /**
     * Set the transition duration in milliseconds.
     * Could be `auto` so the transition duration will be equal to the slide delay .
     * @default 1_000
     */
    transitionDuration?: number | undefined;

    /**
     * Set the animation of this slide.
     * Could be an animation name, `random` or an array of transition picked randomly.
     * {@link http://vegas.jaysalvat.com/documentation/transitions/}
     */
    animation?: AnimationType | undefined;

    /**
     * Set the animation duration in milliseconds.
     * Could be `auto` so the animation duration will be equal to the slide delay .
     */
    animationDuration?: Duration | undefined;
}

export interface Video {
    /**
     * Path of the video.
     * Could be a string or an array of sources.
     */
    src: string | string[];
    /**
     * @default false
     */
    loop?: boolean | undefined;
    /**
     * @default true
     */
    mute?: boolean | undefined;
}

export interface Support {
    readonly objectFit: boolean;
    readonly transition: boolean;
    readonly video: boolean;
}

export type AlignType = "center" | "top" | "right" | "bottom" | "left" | number;

export type Transition =
    | "fade"
    | "fade2"
    | "blur"
    | "blur2"
    | "flash"
    | "flash2"
    | "negative"
    | "negative2"
    | "burn"
    | "burn2"
    | "slideLeft"
    | "slideLeft2"
    | "slideRight"
    | "slideRight2"
    | "slideUp"
    | "slideUp2"
    | "slideDown"
    | "slideDown2"
    | "zoomIn"
    | "zoomIn2"
    | "zoomOut"
    | "zoomOut2"
    | "swirlLeft"
    | "swirlLeft2"
    | "swirlRight"
    | "swirlRight2";

export type TransitionType = Transition | "random" | Transition[];

export type Animation =
    | "kenburns"
    | "kenburnsLeft"
    | "kenburnsRight"
    | "kenburnsUp"
    | "kenburnsUpLeft"
    | "kenburnsUpRight"
    | "kenburnsDown"
    | "kenburnsDownLeft"
    | "kenburnsDownRight";

export type AnimationType = Animation | "random" | Animation[];

export type Duration = "auto" | number;

/** Function called when Vegas is applied to an element. */
export type VegasInitEvent = "vegasinit";

export interface VegasInitHnalder<TElement>
    extends JQuery.TriggeredEvent<TElement, undefined, HTMLElement, HTMLElement>
{}

/** Function called when Vegas starts to play the slideshow. */
export type VegasPlay = "vegasplay";

/** Function called when Vegas pauses the slideshow. */
export type VegasPause = "vegaspause";

/** Function called when Vegas changes the slide. */
export type VegasWalk = "vegaswalk";

/** Function called when the Slideshow is completed (loop: false). */
export type VegasEnd = "vegasend";

declare global {
    interface JQuery<TElement = HTMLElement> {
        vegas: vegas.JQueryExtension;
        on(events: VegasInitEvent, handler: (event: JQuery.Event, settings: Settings) => void): this;
        on(
            events: VegasPlay | VegasPause | VegasWalk | VegasEnd,
            handler: (event: JQuery.Event, index: number, slide: Slide) => void,
        ): this;
    }

    interface JQueryStatic {
        vegas: vegas.JQueryExtension;
    }
}
