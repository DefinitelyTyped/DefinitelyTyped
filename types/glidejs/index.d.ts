interface JQuery {
    /**
     * Glide is responsive and touch-friendly jQuery slider.
     * Based on CSS3 transitions with fallback to older broswers.
     * It's simple, lightweight and fast. Designed to slide,
     * no less, no more.
     */
    glide(options?: JQueryGlide.IGlideOptions): JQuery;
}

declare namespace JQueryGlide {
    interface IGlideOptions {
        /**
         * Default: 4000
         * {Int or Bool} False for turning off autoplay
         */
        autoplay?: any;
        /**
         * Default: true {Bool} Pause autoplay on mouseover slider
         */
        hoverpause?: boolean | undefined;
        /**
         * Default: true {Bool} Circular play (Animation continues without starting over once it reaches the last slide)
         */
        circular?: boolean | undefined;

        /**
         * Default: 500
         * Animation time in ms
         */
        animationDuration?: number | undefined;
        /**
         * Default: cubic-bezier(0.165, 0.840, 0.440, 1.000)
         * cubic-bezier(0.165, 0.840, 0.440, 1.000)
         */
        animationTimingFunc?: string | undefined;

        /**
         * Default: true
         * {Bool or String} Show/hide/appendTo arrows
         * True for append arrows to slider wrapper
         * False for not appending arrows
         * Id or class name (e.g. '.class-name') for appending to specific HTML markup
         */
        arrows?: any;
        /**
         * Default: 'slider-arrows'
         * {String} Arrows wrapper class
         */
        arrowsWrapperClass?: string | undefined;
        /**
         * Default: 'slider-arrow'
         * {String} Main class for both arrows
         */
        arrowMainClass?: string | undefined;
        /**
         * Default: 'slider-arrow--right'
         * {String} Right arrow
         */
        arrowRightClass?: string | undefined;
        /**
         * Default: 'next'
         * {String} Right arrow text
         */
        arrowRightText?: string | undefined;
        /**
         * Default: 'slider-arrow--left'
         * {String} Left arrow
         */
        arrowLeftClass?: string | undefined;
        /**
         * Default: 'prev'
         * {String} Left arrow text
         */
        arrowLeftText?: string | undefined;

        /**
         * Default: true
         * {Bool or String} Show/hide/appendTo bullets navigation
         * True for append arrows to slider wrapper
         * False for not appending arrows
         * Id or class name (e.g. '.class-name') for appending to specific HTML markup
         */
        navigation?: any;
        /**
         * Default: true
         * {Bool} Center bullet navigation
         */
        navigationCenter?: boolean | undefined;
        /**
         * Default: 'slider-nav'
         * {String} Navigation class
         */
        navigationClass?: string | undefined;
        /**
         * Default: 'slider-nav__item'
         * {String} Navigation item class
         */
        navigationItemClass?: string | undefined;
        /**
         * Default: 'slider-nav__item--current'
         * {String} Current navigation item class
         */
        navigationCurrentItemClass?: string | undefined;

        /**
         * Default: true
         * {Bool} Slide on left / right keyboard arrows press
         */
        keyboard?: boolean | undefined;

        /**
         * Default: 60
         * {Int or Bool} Touch settings
         */
        touchDistance?: any;

        /**
         * Default: function () {}
         * {Function} Callback before plugin init
         */
        beforeInit?: Function | undefined;
        /**
         * Default: function () {}
         * {Function} Callback after plugin init
         */
        afterInit?: Function | undefined;

        /**
         * Default: function () {}
         * {Function} Callback before slide change
         */
        beforeTransition?: Function | undefined;
        /**
         * Default: function() {}
         * {Function} Callback after slide change
         */
        afterTransition?: Function | undefined;
    }

    interface IGlideApi {
        /**
         * Returning current slide number
         */
        current(): number;
        /**
         * Rebuild and recalculate dimensions of slider elements
         */
        reinit(): void;
        /**
         * Destroy and cleanup slider
         */
        destroy(): void;
        /**
         * Starting autoplay
         */
        play(): void;
        /**
         * Stopping autoplay
         */
        pause(): void;
        /**
         * Slide one forward
         */
        next(callback: Function): void;
        /**
         * Slide one backward
         */
        prev(callback: Function): void;
        /**
         * Jump to current slide
         */
        jump(distance: number, callback: Function): void;
        /**
         * Append navigation to specifed target (eq. 'body', '.class', '#id')
         */
        nav(target: string): void;
        /**
         * Append arrows to specifed target (eq. 'body', '.class', '#id')
         */
        arrows(target: string): void;
    }
}
