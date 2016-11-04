// Type definitions for smooth-scroll 10.1.0
// Project: https://github.com/cferdinandi/smooth-scroll
// Definitions by: TonyYang <https://github.com/TonyPythoneer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


interface SmoothScrollStatic {
    // Global Settings
    init(): void;
    // Global Settings
    init(options: SmoothScrollOptions): void;

    //Animate scrolling to an anchor.
    animateScroll(
        anchor: Element, // Node to scroll to. ex. document.querySelector( '#bazinga' )
    ): void;
    //Animate scrolling to an anchor.
    animateScroll(
        anchor: Element, // Node to scroll to. ex. document.querySelector( '#bazinga' )
        toggle: Element, // Node that toggles the animation, OR an integer. ex. document.querySelector( '#toggle' )
        options: SmoothScrollOptions // Classes and callbacks. Same options as those passed into the init() function.
    ): void;
    //You can optionally pass in a y-position to scroll to as an integer
    animateScroll(
        yPosition: number
    ): void;

    //Destroy the current smoothScroll.init(). This is called automatically during the init function to remove any existing initializations.
    destroy(): void;
}


/** 
 * Easing Options 
 *   https://github.com/cferdinandi/smooth-scroll#easing-options
 */
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

interface SmoothScrollOptions {
    selector?: string;
    selectorHeader?: string;
    speed?: number;
    easing?: EasingOptions;
    offset?: number;
    callback?: (anchor: Element, toggle: Element) => void;
}

declare var smoothScroll: SmoothScrollStatic;
declare module 'smooth-scroll' {
    export = smoothScroll;
}
