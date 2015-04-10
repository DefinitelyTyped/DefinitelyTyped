// Type definitions for lory 0.4.3
// Project: https://github.com/meandmax/lory/
// Definitions by: kubosho <https://github.com/kubosho/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare var lory: LoryStatic;

interface LoryStatic {
    (element: Element, options?: LoryOptions): LoryStatic;

    /**
     * slides to the previous slide.
     */
    prev(): void;

    /**
     * slides to the next slide.
     */
    next(): void;

    /**
     * slides to the index given as an argument
     * @param {number} index
     */
    slideTo(index: number): void;

    /**
     * binds eventlisteners, merging default and user options, setup the slides based on DOM (called once during initialisation). Call setup if DOM or user options have changed or eventlisteners needs to be rebinded.
     */
    setup(): void;

    /**
     * sets the slider back to the starting position and resets the current index (called on resize event)
     */
    reset(): void;
}

interface LoryOptions {
    /**
     * slides scrolled at once (default: 1)
     */
    slidesToScroll?: number;

    /**
     * time in milliseconds for the animation of a valid slide attempt (default: 300)
     */
    slideSpeed?: number;

    /**
     * time in milliseconds for the animation of the rewind after the last slide (default: 600)
     */
    rewindSpeed?: number;

    /**
     * time for the snapBack of the slider if the slide attempt was not valid (default: 200)
     */
    snapBackSpeed?: number;

    /**
     * cubic bezier easing functions: http://easings.net/de (default: 'cubic-bezier(0.455, 0.03, 0.515, 0.955)')
     */
    ease?: string;

    /**
     * if slider reached the last slide, with next click the slider goes back to the startindex (default: false)
     */
    rewind?: boolean;
}
