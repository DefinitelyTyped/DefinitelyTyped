// Type definitions for readmore-js 3.0
// Project: https://github.com/jedfoster/Readmore.js
// Definitions by: AntonDemarczyk <https://github.com/AntonDemarczyk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare class Readmore {
    constructor(element: string | Element | NodeList, options?: Readmore.Options);

    toggle(element: null | string | Element | NodeList): void;

    destroy(): void;
}

declare namespace Readmore {
    interface Options {
        speed?: number; // 100 in milliseconds
        collapsedHeight?: number; // 200 in pixels
        heightMargin?: number; // 16 in pixels, avoids collapsing blocks that are only slightly larger than collapsedHeight
        moreLink?: ((element: Element) => string) | string; // HTML string for the "more" toggle link; also accepts a callback function that returns an HTML string
        lessLink?: ((element: Element) => string) | string; // HTML string for the "less" toggle link; also accepts a callback function that returns an HTML string
        embedCSS?: boolean; // insert required CSS dynamically, set this to false if you include the necessary CSS in a stylesheet
        blockCSS?: string; // sets the styling of the blocks, ignored if embedCSS is false
        startOpen?: boolean;
        sourceOrder?: 'after' | 'before';
        beforeToggle?: (trigger: Element, element: Element, expanded: boolean) => void; // called once per block during initilization after Readmore.js has processed the block
        afterToggle?: (trigger: Element, element: Element, expanded: boolean) => void; // called after a more or less link is clicked, but before the block is collapsed or expanded
        blockProcessed?: (element: Element, collapsable: boolean) => void; // called after the block is collapsed or expanded
    }
}
export = Readmore;
