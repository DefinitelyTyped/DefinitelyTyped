declare class Readmore {
    constructor(element: string | Element | NodeList, options?: Readmore.Options);

    toggle(element: null | string | Element | NodeList): void;

    destroy(): void;
}

declare namespace Readmore {
    interface Options {
        speed?: number | undefined; // 100 in milliseconds
        collapsedHeight?: number | undefined; // 200 in pixels
        heightMargin?: number | undefined; // 16 in pixels, avoids collapsing blocks that are only slightly larger than collapsedHeight
        moreLink?: ((element: Element) => string) | string | undefined; // HTML string for the "more" toggle link; also accepts a callback function that returns an HTML string
        lessLink?: ((element: Element) => string) | string | undefined; // HTML string for the "less" toggle link; also accepts a callback function that returns an HTML string
        embedCSS?: boolean | undefined; // insert required CSS dynamically, set this to false if you include the necessary CSS in a stylesheet
        blockCSS?: string | undefined; // sets the styling of the blocks, ignored if embedCSS is false
        startOpen?: boolean | undefined;
        sourceOrder?: "after" | "before" | undefined;
        beforeToggle?: ((trigger: Element, element: Element, expanded: boolean) => void) | undefined; // called once per block during initilization after Readmore.js has processed the block
        afterToggle?: ((trigger: Element, element: Element, expanded: boolean) => void) | undefined; // called after a more or less link is clicked, but before the block is collapsed or expanded
        blockProcessed?: ((element: Element, collapsable: boolean) => void) | undefined; // called after the block is collapsed or expanded
    }
}
export = Readmore;
