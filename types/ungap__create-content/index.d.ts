// Type definitions for @ungap/create-content 0.1
// Project: https://github.com/ungap/create-content
// Definitions by: ExE Boss <https://github.com/ExE-Boss>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * @param markup The markup to parse.
 * @param type The markup type, defaults to `'html'`. When set to `'svg'`, the markup is parsed as an SVG image.
 */
declare function createContent(markup: any, type?: string): DocumentFragment;

export as namespace createContent;
export = createContent;
