// Type definitions for Watermark plugin for jQuery 3.1
// Project: http://jquery-watermark.googlecode.com
// Definitions by: https://github.com/anwarjaved
// Definitions: https://github.com/borisyankov/DefinitelyTyped


/// <reference path="../jquery/jquery.d.ts"/>

interface WatermarkOptions {
    className?: string; // Default class name for all watermarks
    useNative?: bool; // If true, plugin will detect and use native browser support for watermarks, if available. (e.g., WebKit's placeholder attribute.)
    hideBeforeUnload?: bool; // If true, all watermarks will be hidden during the window beforeunload event.
}

interface Watermark {
    options: WatermarkOptions;

    show(element: string): void;
    hide(element: string): void;
    showAll(): void;
    hideAll(): void;
}

interface JQuery {
    watermark(text: string, options?: WatermarkOptions): JQuery;
}

interface JQueryStatic {
    watermark: Watermark;
}