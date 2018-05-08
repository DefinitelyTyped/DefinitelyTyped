// Type definitions for simplebar.js 1.1.7
// Project: https://github.com/Grsmto/simplebar
// Definitions by: Gregor Woiwode <https://github.com/gregonnet>, Leonard Thieu <https://github.com/leonard-thieu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery" />

interface SimplebarOptions {
    autoHide?: boolean;
    wrapContent?: boolean;
}

interface SimpleBar {
    noConflict(): SimpleBar & JQuery;

    /**
     * Enables simplebar on calling element.
     */
    (options?: SimplebarOptions): JQuery;
}

interface JQuery {
    simplebar: SimpleBar;
}
