/**
 * `matches()` polyfill that works in ie8
 */
declare const matches: (element: Element, selectors: string) => boolean;
export = matches;
