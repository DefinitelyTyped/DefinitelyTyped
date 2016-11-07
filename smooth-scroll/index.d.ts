// Type definitions for cferdinandi-smooth-scroll 10.1.0
// Project: https://github.com/cferdinandi/smooth-scroll
// Definitions by: TonyYang <https://github.com/TonyPythoneer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


declare var smoothScroll: smoothScroll.SmoothScrollStatic;
export = smoothScroll;
export as namespace smoothScroll;


declare namespace smoothScroll {
    interface SmoothScrollStatic {
        /** Global Settings */
        init(): void;
        /** Global Settings */
        init(options?: SmoothScrollOptions): void;

        /** Animate scrolling to an anchor. */
        animateScroll(anchor: Element): void;
        /** You can optionally pass in a y-position to scroll to as an integer */
        animateScroll(yPosition: number): void;
        /** Animate scrolling to an anchor. */
        animateScroll(anchor: Element, toggle: Element, options: SmoothScrollOptions): void;

        /** Destroy the current smoothScroll.init(). This is called automatically during the init function to remove any existing initializations. */
        destroy(): void;
    }


    /** Easing Options */
    type EasingOptions =
        'Linear' |
        'easeInQuad' |
        'easeInCubic' |
        'easeInQuart' |
        'easeInQuint' |
        'easeInOutQuad' |
        'easeInOutCubic' |
        'easeInOutQuart' |
        'easeInOutQuint' |
        'easeOutQuad' |
        'easeOutCubic' |
        'easeOutQuart' |
        'easeOutQuint';


    /** Options and Settings */
    interface SmoothScrollOptions {
        selector?: string;
        selectorHeader?: string;
        speed?: number;
        easing?: EasingOptions;
        offset?: number;
        callback?: (anchor: Element, toggle: Element) => void;
    }

}
