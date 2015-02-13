// Type definitions for jQuery Actual plugin


interface JQueryActualOptions {
    absolute?: boolean;
    clone?: boolean;
    includeMargin?: boolean;
}


interface JQuery {
    actual(method: string, options?: JQueryActualOptions): number;
}