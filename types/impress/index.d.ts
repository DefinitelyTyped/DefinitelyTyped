// Type definitions for Impress.js 0.5
// Project: https://github.com/bartaz/impress.js
// Definitions by: Boris Yankov <https://github.com/borisyankov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8


interface Impress {
    init(): void;
    getStep(step: any): any;
    goto(element: any, duration?: number): any;
    prev(): any;
    next(): any;
}

declare function impress(): Impress;