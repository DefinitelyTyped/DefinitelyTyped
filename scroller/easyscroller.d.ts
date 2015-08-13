// Type definitions for Zynga EasyScroller
// Project: https://github.com/zynga/scroller
// Definitions by: Boris Yankov <https://github.com/borisyankov>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


/// <reference path="scroller.d.ts"/>

declare class EasyScroller  {
    constructor (content: any, options: ScrollerOptions);

    render(): void;
    reflow(): void;
    bindEvents(): void;
}
