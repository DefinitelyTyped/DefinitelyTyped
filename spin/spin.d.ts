// Type definitions for Spin.js 1.2
// Project: http://fgnass.github.com/spin.js/
// Definitions by: Boris Yankov <https://github.com/borisyankov/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


interface SpinnerOptions {
    lines?: number; // The number of lines to draw
    length?: number; // The length of each line
    width?: number;  // The line thickness
    radius?: number; // The radius of the inner circle
    corners?: number; // Corner roundness (0..1)
    rotate?: number; // The rotation offset
    color?: string; // #rgb or #rrggbb
    speed?: number; // Rounds per second
    trail?: number; // Afterglow percentage
    shadow?: bool; // Whether to render a shadow
    hwaccel?: bool; // Whether to use hardware acceleration
    className?: string; // The CSS class to assign to the spinner
    zIndex?: number; // The z-index (defaults to 2000000000)
    top?: string; // Top position relative to parent in px
    left?: string; // Left position relative to parent in px
}


declare class Spinner {
    constructor (options?: SpinnerOptions);
    spin(target?: any);
    stop();
    lines(el, o);
    opacity(el, i, val);
}
