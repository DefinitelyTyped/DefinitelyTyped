// Type definitions for jQuery rowGrid.js plugin 1.0
// Project: https://github.com/brunjo/rowGrid.js
// Definitions by: Vinayak Garg <https://github.com/vinayak-garg>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="jquery" />

interface JQueryRowGridJSOptions {
    minMargin?: number;
    maxMargin?: number;
    itemSelector: string;
}

interface JQuery {
    rowGrid(options?: JQueryRowGridJSOptions): JQuery;
    rowGrid(appended: string): JQuery;
}