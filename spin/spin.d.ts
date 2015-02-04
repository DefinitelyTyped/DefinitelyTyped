// Type definitions for Spin.js 1.3.1
// Project: http://fgnass.github.com/spin.js/
// Definitions by: Boris Yankov <https://github.com/borisyankov/>, Theodore Brown <https://github.com/theodorejb/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


interface SpinnerOptions {
    lines?: number; // The number of lines to draw
    length?: number; // The length of each line
    width?: number;  // The line thickness
    radius?: number; // The radius of the inner circle
    corners?: number; // Corner roundness (0..1)
    rotate?: number; // The rotation offset
    direction?: number; // 1: clockwise, -1: counterclockwise
    color?: any; // #rgb or #rrggbb or array of colors
    speed?: number; // Rounds per second
    trail?: number; // Afterglow percentage
    shadow?: boolean; // Whether to render a shadow
    hwaccel?: boolean; // Whether to use hardware acceleration
    className?: string; // The CSS class to assign to the spinner
    zIndex?: number; // The z-index (defaults to 2000000000)
    top?: string; // Top position relative to parent in px
    left?: string; // Left position relative to parent in px
}


declare class Spinner {
    /** The Spinner's HTML element - can be used to manually insert the spinner into the DOM  */
    public el: HTMLElement;
    constructor(options?: SpinnerOptions);

    /**
     * Adds the spinner to the given target element. If this instance is already
     * spinning, it is automatically removed from its previous target by calling
     * stop() internally.
     */
    spin(target?: HTMLElement): Spinner;

    /**
     * Stops and removes the Spinner.
     * Stopped spinners may be reused by calling spin() again.
     */
    stop(): Spinner;
    lines(el:HTMLElement, o:SpinnerOptions):HTMLElement;
    opacity(el:HTMLElement, i:number, val:number, o:SpinnerOptions):void;
}
