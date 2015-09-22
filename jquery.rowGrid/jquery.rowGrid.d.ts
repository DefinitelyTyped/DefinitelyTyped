// Type definitions for jQuery rowGrid.js plugin (v1.0.2)
// Project: https://github.com/brunjo/rowGrid.js
// Definitions by: Vinayak Garg <https://github.com/vinayak-garg>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts" />

interface JQueryRowGridJSOptions {
    minMargin?: number;
    maxMargin?: number;
    itemSelector: string;
}

interface JQuery {
    rowGrid(options?: JQueryRowGridJSOptions): JQuery;
    rowGrid(appended: string): JQuery;
}