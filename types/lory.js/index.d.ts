export declare var lory: LoryStatic;

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
     * slides to the index given as an argument.
     */
    slideTo(index: number): void;

    /**
     * returns the index of the current slide element
     */
    returnIndex(): number;

    /**
     * binds eventlisteners, merging default and user options, setup the slides based on DOM (called once during initialisation). Call setup if DOM or user options have changed or eventlisteners needs to be rebinded.
     */
    setup(): void;

    /**
     * sets the slider back to the starting position and resets the current index (called on resize event).
     */
    reset(): void;

    /**
     * unmount/destroy the instance of lory
     */
    destroy(): void;
}

interface LoryOptions {
    //////////////////////////////////////////////////
    //  Options
    //////////////////////////////////////////////////

    /**
     * slides scrolled at once (default: 1).
     */
    slidesToScroll?: number | undefined;

    /**
     * enabled mouse events
     * default: false
     */
    enableMouseEvents?: boolean | undefined;

    /**
     * time in milliseconds for the animation of a valid slide attempt (default: 300).
     */
    slideSpeed?: number | undefined;

    /**
     * time in milliseconds for the animation of the rewind after the last slide (default: 600).
     */
    rewindSpeed?: number | undefined;

    /**
     * time for the snapBack of the slider if the slide attempt was not valid (default: 200).
     */
    snapBackSpeed?: number | undefined;

    /**
     * cubic bezier easing functions: http://easings.net/de (default: 'cubic-bezier(0.455, 0.03, 0.515, 0.955)').
     */
    ease?: string | undefined;

    /**
     * the slide index to show when the slider is initialized (    default: 0 )
     */
    initialIndex?: number | undefined;

    /**
     * if slider reached the last slide, with next click the slider goes back to the startindex (default: false).
     */
    rewind?: boolean | undefined;

    /**
     * like carousel, works with multiple slides (default: false). (do not combine with rewind)
     */
    infinite?: boolean | number | undefined;

    /**
     * class name for slider frame
     * default: 'js_frame'
     */
    classNameFrame?: string | undefined;

    /**
     * class name for slides container
     * default: 'js_slides'
     */
    classNameSlideContainer?: string | undefined;

    /**
     * class name for slider previous control
     * default: 'js_prev'
     */
    classNamePrevCtrl?: string | undefined;

    /**
     * class name for slider next control
     * default: 'js_next'
     */
    classNameNextCtrl?: string | undefined;

    //////////////////////////////////////////////////
    //  Callbacks
    //////////////////////////////////////////////////

    /**
     * executed before initialisation (first in setup function)
     */
    beforeInit?(): any;

    /**
     * executed after initialisation (end of setup function)
     */
    afterInit?(): any;

    /**
     * executed on click of prev controls (prev function)
     */
    beforePrev?(): any;

    /**
     * executed on click of next controls (next function)
     */
    beforeNext?(): any;

    /**
     * executed on touch attempt (touchstart)
     */
    beforeTouch?(): any;

    /**
     * executed on every resize event
     */
    beforeResize?(): any;
}
